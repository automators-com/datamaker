import { FC, ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="group relative inline-block w-full">
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible absolute top-[0.63rem] left-[4.5rem] rounded-md bg-automatorsBlue p-2 text-sm text-white shadow-sm transition duration-300 before:absolute before:top-[1.15rem] before:left-0 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:transform before:bg-automatorsBlue group-hover:visible"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
