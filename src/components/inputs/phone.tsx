import React, { ChangeEvent, useEffect } from 'react';
import { InputContainer } from './styles';
import { meaning } from '@word-book';
import { InputProps } from './types';
import { useState } from 'react';
import { maskPhoneNumber } from '@components/utils';

export const Phone: React.FC<InputProps> = ({ value, changeValue }) => {
    const [maskedPhone, setMaskedPhone] = useState<string>('');

    const [placeholder, changePlaceholder] = useState<string>(
        meaning('shared.forms.phone-input'),
    );

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { maskedPhone, phone } = maskPhoneNumber(target.value);
        changeValue(phone);
        setMaskedPhone(maskedPhone);
    };

    const onFocus = () => {
        changePlaceholder('9__ ___ ___');
    };

    const onBlur = () => {
        changePlaceholder(meaning('shared.forms.phone-input'));
    };

    useEffect(() => {
        const { maskedPhone } = maskPhoneNumber(value);
        changeValue(maskedPhone);
    }, []);

    return (
        <InputContainer label={meaning('shared.forms.phone-input')} errorMsg="">
            <span>{meaning('shared.forms.phone-prefix')}</span>
            <input
                value={maskedPhone}
                onChange={onChange}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </InputContainer>
    );
};
