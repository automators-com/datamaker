/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import * as ReactDOMServer from "react-dom/server";
import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";

function Example({
  children,
  title,
  tag,
}: {
  children: any;
  title?: string;
  tag?: string;
}) {
  const [showCode, setShowCode] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const component = ref.current?.querySelector("#component");
    const snippet = ref.current?.querySelector("#snippet");

    if (showCode) {
      component?.classList.add("hidden");
      snippet?.classList.remove("hidden");
    } else {
      component?.classList.remove("hidden");
      snippet?.classList.add("hidden");
    }
  }, [showCode]);

  return (
    <div className={"min-h-[12rem] w-full rounded-md border p-4"}>
      <div className="mb-4 flex items-center justify-between p-1 text-xs">
        <div className="flex items-center">
          <p className="mr-2 text-xs uppercase text-base-content ">{title}</p>
          {tag && (
            <p className="rounded-md border border-accent px-1 py-0 text-[10px] text-accent">
              {tag}
            </p>
          )}
        </div>

        <button
          className="btn btn-primary-accent-light ml-6 flex h-9 font-normal"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? `component` : `code`}
        </button>
      </div>
      <div ref={ref}>{children}</div>
    </div>
  );
}

const ExampleComponent = ({ children }: { children: any }) => {
  return (
    <div id="component" className="flex w-full items-center justify-center p-4">
      {children}
    </div>
  );
};

const ExampleSnippet = ({ children }: { children: any }) => {
  // the function below is used convert the html entities to their actual characters
  const deentitize = (some_string: string) => {
    let ret = some_string.replace(/&gt;/g, ">");
    ret = ret.replace(/&lt;/g, "<");
    ret = ret.replace(/&quot;/g, '"');
    ret = ret.replace(/&apos;/g, "'");
    ret = ret.replace(/&amp;/g, "&");
    return ret;
  };

  // convert the react component to a string
  const markup = ReactDOMServer.renderToStaticMarkup(<>{children}</>);

  // format the string using prettier
  let snippet = prettier.format(deentitize(markup), {
    parser: "babel",
    useTabs: true,
    semi: false,
    proseWrap: "always",
    plugins: [parserBabel],
  });

  // remove the first semi-colon that seems to appear in the string
  if (snippet) {
    snippet = snippet.replace(";", "");
  }

  return (
    <div id="snippet" className="hidden rounded-md bg-neutral p-4">
      <pre>
        <code className="m-0 flex items-start justify-start overflow-scroll whitespace-pre px-0 py-2 text-xs text-accent">
          {snippet}
        </code>
      </pre>
    </div>
  );
};

Example.Component = ExampleComponent;
Example.Snippet = ExampleSnippet;

export default Example;
