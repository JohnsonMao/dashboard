import React, { useState } from 'react';
import {
    Stack,
    Button,
    ButtonGroup,
    Form,
    FloatingLabel
} from 'react-bootstrap';

type activeItem = 'login' | 'regester';

const Signin: React.FC = () => {
    const [activeItem, setActiveItem] = useState<activeItem>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Stack gap={3}>
            <ButtonGroup className="w-100">
                <Button
                    variant="outline-primary"
                    active={activeItem === 'regester'}
                    onClick={() => setActiveItem('regester')}
                >
                    註冊
                </Button>
                <Button
                    variant="outline-primary"
                    active={activeItem === 'login'}
                    onClick={() => setActiveItem('login')}
                >
                    登入
                </Button>
            </ButtonGroup>
            <FloatingLabel label="信箱">
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel label="密碼">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FloatingLabel>
            <Button className="ms-auto">
                {activeItem === 'login' ? '登入' : '註冊'}
            </Button>
        </Stack>
    );
};

export default Signin;
