import React, { ChangeEvent, useState } from 'react';
import { FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { meaning } from '@word-book';

import { InputContainer } from './styles';
import { InputProps } from './types';

export const Password: React.FC<InputProps> = ({ value, changeValue }) => {
    const [see, changeSee] = useState<boolean>(false);

    const [placeholder, changePlaceholder] = useState<string>(
        meaning('shared.forms.password-input'),
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    };

    const onFocus = () => {
        changePlaceholder('Bladbafo123');
    };

    const onBlur = () => {
        changePlaceholder(meaning('shared.forms.password-input'));
    };

    const handleSee = () => {
        changeSee(!see);
    };

    return (
        <InputContainer
            label={meaning('shared.forms.password-input')}
            errorMsg=""
        >
            <span id="lock">
                <FaLock />
            </span>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                type={(see && 'text') || 'password'}
            />
            <span id="eyes" onClick={handleSee}>
                {(see && <FaRegEye />) || <FaRegEyeSlash />}
            </span>
        </InputContainer>
    );
};
