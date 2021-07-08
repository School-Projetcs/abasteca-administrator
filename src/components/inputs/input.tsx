import React, { ChangeEvent } from 'react';
import { InputContainer } from './styles';
import { InputProps } from './types';

export const GenericInput: React.FC<InputProps & { label: string }> = ({
    value,
    label,
    changeValue,
}) => {
    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        changeValue(target.value);
    };

    return (
        <InputContainer label={label} errorMsg="">
            <span>{label}</span>
            <input
                value={value}
                onChange={onChange}
                placeholder={label}
                required
            />
        </InputContainer>
    );
};
