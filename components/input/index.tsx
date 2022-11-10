import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface IProps {
  label?: string;
  name: string;
  value: string | number;
  placeholder: string;
  type: string;
  error?: string;
  setValue: any;
  addClass?: string
}

export const Input: FC<IProps> = ({
  error,
  name,
  placeholder,
  value,
  label,
  type,
  setValue,
  addClass
}) => {
  return (
    <div>
      {label && 
        <label
          htmlFor="email"
          className={`block text-sm font-medium text-base-content mb-1`}
        >
          {label}
        </label>
      }
      
      <div className="relative">
        <input
          type={type}
          name={name}
          id={name}
          className={`block w-full rounded-md border bg-base-100 border-${
            error ? "red-300" : "borderColor"
          } text-base-content
                    text-${error ? "error" : "borderColor"}
                    placeholder-base-300 focus:border-${
                      error ? "error" : "accent"
                    } focus:${error ? "outline-none" : "border-accent"}
                    focus:ring-${error ? "red-500" : "accent"} py-1 pl-3
                    pr-5 text-left shadow-sm hover:border-accent focus:border-accent focus:outline-none sm:text-sm ${addClass}`}
          placeholder={placeholder}
          aria-invalid="true"
          aria-describedby="email-error"
          value={value}
          onChange={setValue}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-error"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-error" id="email-error">
          {" "}
          {error}{" "}
        </p>
      )}
    </div>
  );
};
