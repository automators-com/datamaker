import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React, { type FC } from "react";
// import { UseFormRegisterReturn } from "react-hook-form";
import { classNames } from "../../utilities/className";

interface IProps {
  label?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  type: string;
  error?: string;
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addClass?: string;
  formRegister?: any; // UseFormRegisterReturn;
  id?: string;
}

export const Input: FC<IProps> = ({
  error,
  name,
  placeholder,
  value,
  label,
  type,
  setValue,
  addClass,
  formRegister,
  id,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="email"
          className="mb-2 block text-[11px] font-medium text-base-content opacity-50"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {formRegister ? (
          <input
            {...formRegister}
            type={type}
            id={id}
            className={classNames(
              "block w-full rounded-md border bg-base-100 text-sm font-medium  text-base-content placeholder-base-content placeholder-opacity-30",
              "py-1 pl-3 pr-5 text-left shadow-sm hover:border-accent focus:outline-none",
              error
                ? "border-error text-error hover:border-error focus:border-error"
                : "border-accent focus:border-accent",
              addClass
            )}
            placeholder={placeholder}
            aria-invalid="true"
            aria-describedby="email-error"
          />
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            className={classNames(
              "block w-full rounded-md border bg-base-100 text-sm font-medium  text-base-content placeholder-base-content placeholder-opacity-30",
              "py-1 pl-3 pr-5 text-left shadow-sm hover:border-accent focus:outline-none",
              error
                ? "border-error text-error hover:border-error focus:border-error"
                : "border-accent focus:border-accent",
              addClass
            )}
            placeholder={placeholder}
            aria-invalid="true"
            aria-describedby="email-error"
            value={value}
            onChange={setValue}
          />
        )}
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
        <p className="mt-2 text-xs text-error" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
};
