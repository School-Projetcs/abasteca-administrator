import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuContainer, Toggle } from './styles';
import { Routes } from '@constants';
import { meaning } from '@word-book';

export const Menu: React.FC = () => {
    const [toggle, changeToggle] = useState<boolean>(false);
    const { pathname } = useRouter();

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
                    <Link href={Routes.employees}>
                        <li id={pathname === Routes.employees && 'active'}>
                            {meaning('pages.employees')}
                        </li>
                    </Link>
                    <Link href={Routes.register}>
                        <li id={pathname === Routes.register && 'active'}>
                            {meaning('pages.register')}
                        </li>
                    </Link>
                    <Link href={Routes.gas_stations}>
                        <li id={pathname === Routes.gas_stations && 'active'}>
                            {meaning('pages.gas-stations')}
                        </li>
                    </Link>
                </ul>
            </MenuContainer>
        </>
    );
};
