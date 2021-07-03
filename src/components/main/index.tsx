import React, { CSSProperties } from 'react';
import { Container } from 'react-bootstrap';

import { Button } from '@components';

export const Main: React.FC = () => {
    return (
        <div
            className="text-center py-4"
            style={{ backgroundColor: '#282c34' }}
        >
            <Container>
                <Button
                    variant="primary"
                    size="lg"
                    href="https://pankod.github.io/superplate/"
                    target="_blank"
                >
                    login
                </Button>
            </Container>
        </div>
    );
};
