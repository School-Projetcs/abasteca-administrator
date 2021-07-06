import React, { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Routes } from '@constants';
import { meaning } from '@word-book';
import { Container } from '@components';

import { MenuContainer, Toggle } from './styles';

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
            {!toggle && (
                <Container
                    bg="background"
                    display={['flex', 'none']}
                    position="fixed"
                    height={78}
                    top={0}
                    left={0}
                    right={0}
                >
                    <div />
                </Container>
            )}
            <MenuContainer
                bg="white"
                width={['100%', '300px']}
                height={['100vh', '400px']}
                top={[0]}
                left={[0]}
                right={[0]}
                bottom={[0]}
                position={['fixed', 'relative']}
                display={[(toggle && 'flex') || 'none', 'flex']}
                borderRadius={['', '8px']}
            >
                <ul>
                    <Link href={Routes.employees}>
                        <li id={pathname === Routes.employees && 'active'}>
                            {meaning('pages.employees.name')}
                        </li>
                    </Link>
                    <Link href={Routes.register}>
                        <li id={pathname === Routes.register && 'active'}>
                            {meaning('pages.register.name')}
                        </li>
                    </Link>
                    <Link href={Routes.gas_stations}>
                        <li id={pathname === Routes.gas_stations && 'active'}>
                            {meaning('pages.gas-stations.name')}
                        </li>
                    </Link>
                </ul>
            </MenuContainer>
        </>
    );
};
