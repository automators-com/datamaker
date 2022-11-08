"use client";
import { ReactNode, useRef } from "react";

export default function ToolTip({
  children,
  tooltip,
}: {
  children: ReactNode;
  tooltip?: string;
}) {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} className="group relative inline-block w-full">
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible absolute top-[0.63rem] left-[4.5rem] rounded-md bg-secondary py-2 px-3 text-sm text-secondary-content shadow-sm transition duration-300 before:absolute before:top-[1.15rem] before:left-0 before:h-2 before:w-2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:transform before:bg-secondary group-hover:visible"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
}
