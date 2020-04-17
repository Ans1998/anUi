import React, { FC, useState, ChangeEvent } from 'react'
import Input, { InputProps } from '../Input/index'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => string[];
    onSelect?: (item: string) => void;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        value,
        ...restProps
    } = props;
    const [ inputValue, setInputValue ] = useState(value);
    const [ suggestions, setSugestions ] = useState<string[]>([]);
    console.log(suggestions);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        if (value) {
            const results = fetchSuggestions(value);
            setSugestions(results)
        } else {
            setSugestions([]);
        }
    };

    const handleSelect = (item: string) => {
        setInputValue(item);
        setSugestions([]);
        if (onSelect) {
            onSelect(item);
        }
    };

    const generateDropdown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    return (
                        <li key={index} onClick={() => handleSelect(item)}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        )
    };
    return (
        <div className="an-auto-complete">
            <Input
                value={inputValue}
                onChange={handleChange}
                {...restProps}
            />
            { (suggestions.length > 0) && generateDropdown()}
        </div>
    )
};
