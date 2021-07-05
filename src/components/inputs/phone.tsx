import React, { ChangeEvent } from 'react';
import { InputContainer } from './styles';
import { meaning } from '@word-book';
import { InputProps } from './types';
import { useState } from 'react';

export const Phone: React.FC<InputProps> = ({ value, changeValue }) => {
    const [placeholder, changePlaceholder] = useState<string>(
        meaning('shared.forms.phone-input'),
    );

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.target.value);
    };

    const onFocus = () => {
        changePlaceholder('9 _ _   _ _ _   _ _ _');
    };

    const onBlur = () => {
        changePlaceholder(meaning('shared.forms.phone-input'));
    };

    return (
        <InputContainer label={meaning('shared.forms.phone-input')} errorMsg="">
            <span>{meaning('shared.forms.phone-prefix')}</span>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </InputContainer>
    );
};
