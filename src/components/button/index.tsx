import { CogIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react';


interface IProps {
    text: string
    // open: boolean;
    // setOpen: (open: any) => void;
  }
const Button: FC<IProps> = ({text, }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center rounded border border-transparent bg-automatorsTurquoise 
            px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-automatorsBtnHover hover:text-automatorsBlue  focus:outline-none"
        >
            <CogIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
            {text}
        </button>
    );
};

export default Button;