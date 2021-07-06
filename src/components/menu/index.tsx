import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';

import { MenuContainer, Toggle } from './styles';

export const Menu: React.FC = () => {
    const [toggle, changeToggle] = useState<boolean>(true);

    const handleToggle = () => {
        changeToggle(!toggle);
    };

    return (
        <>
            <Toggle
                className={`toggle ${(toggle && 'show') || 'hidden'}`}
                onClick={handleToggle}
            >
                {(!toggle && <CgMenuRight />) || <CgClose />}
            </Toggle>
            <MenuContainer
                bg="white"
                width={['100%', '300px']}
                height={['100vh', '400px']}
                position={['absolute', 'relative']}
                display={[(toggle && 'flex') || 'none', 'flex']}
                borderRadius={['', '8px']}
            >
                <ul>
                    <li>Empregados</li>
                    <li>Cadastrar Empregados</li>
                    <li>Estações de </li>
                </ul>
            </MenuContainer>
        </>
    );
};
