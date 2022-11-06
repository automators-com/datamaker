import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import React, { FC } from 'react'


interface IProps {
    label?: string;
    name: string;
    value: string;
    placeholder: string;
    type: string;
    error: string;
    setValue: any;
}


export const Input: FC<IProps> = ({ error, name, placeholder, value, label, type, setValue }) => {

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative mt-1 mb-2 rounded ">
                <input
                    type={type}
                    name={name}
                    id={name}
                    className={`block w-full rounded border border-${error ? 'red-300' : 'borderColor'} 
                    text-${error ? 'red-900' : 'borderColor'}
                    placeholder-gray-500 focus:border-${error ? 'red-300' : 'automatorsTourquoise'} focus:${error ? 'outline-none' : 'border-automatorsTourquoise'}
                    focus:ring-${error ? 'red-500' : 'automatorsTourquoise'} hover:border-automatorsTourquoise sm:text-sm
                    py-1 pl-3 pr-5 text-left shadow-sm focus:border-automatorsTourquoise focus:outline-none`}
                    placeholder={placeholder}
                    aria-invalid="true"
                    aria-describedby="email-error"
                    value={value}
                    onChange={setValue}
                />
                {
                    error &&
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>
                }

            </div>
            {error && <p className="mt-2 text-sm text-red-600" id="email-error"> {error} </p>}
        </div>
    )
}
