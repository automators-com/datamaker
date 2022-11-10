import React from 'react';
import { Switch } from '@headlessui/react'
import {classNames} from '../../utilities/className'


const Toggle= ({text, toggle, setToggle} : {text?: string, toggle: boolean, setToggle: any}) => {

    return (
        <Switch.Group as="div" className="inline-flex items-center w-20">
        <Switch
            checked={toggle}
            onChange={setToggle}
            className={classNames(
                toggle ? 'bg-accent' : 'bg-base-300',
            'relative inline-flex items-center h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out '
            )}
        >
            <span
            aria-hidden="true"
            className={classNames(
                toggle ? 'translate-x-6' : 'translate-x-0',
                'pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
            />
        </Switch>
        <Switch.Label as="span" className="ml-3">
            <span className="text-sm text-primary">{text}</span>
        </Switch.Label>
    </Switch.Group>
    );
}

export default Toggle;