import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Stack,
    Row,
    Col,
    Button,
    ToggleButton,
    ButtonGroup,
    Form,
    FloatingLabel
} from 'react-bootstrap';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../../utils/firebase';

enum ActiveItem {
    login = 'login',
    regester = 'regester'
}

const Signin: React.FC = () => {
    const [activeItem, setActiveItem] = useState<ActiveItem>(ActiveItem.login);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const tabs = [
        {
            label: '註冊',
            value: ActiveItem.regester
        },
        {
            label: '登入',
            value: ActiveItem.login
        }
    ];

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        const isRegester = activeItem === ActiveItem.regester;

        setError('');
        setIsLoading(true);
        try {
            const api = isRegester
                ? createUserWithEmailAndPassword
                : signInWithEmailAndPassword;
            await api(auth, email, password);
            navigate('/');
        } catch (err) {
            setError(isRegester ? '帳號已被註冊' : '帳號密碼錯誤');
        }
        setIsLoading(false);
    };

    return (
        <Row md={2} className="justify-content-center">
            <Col as={Form} onSubmit={handleSubmit}>
                <Stack gap={3}>
                    <ButtonGroup className="w-100">
                        {tabs.map((tab) => (
                            <ToggleButton
                                type="radio"
                                id={tab.value}
                                value={tab.value}
                                checked={activeItem === tab.value}
                                variant="outline-primary"
                                onChange={() => {
                                    setError('');
                                    setActiveItem(tab.value);
                                }}
                            >
                                {tab.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <FloatingLabel label="信箱">
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel label="密碼">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <Row className="justify-content-end align-items-center">
                        {error && (
                            <Col className="text-center text-danger">
                                {error}
                            </Col>
                        )}
                        <Col className="col-auto">
                            <Button type="submit" disabled={isLoading}>
                                {activeItem === ActiveItem.regester
                                    ? '註冊'
                                    : '登入'}
                            </Button>
                        </Col>
                    </Row>
                </Stack>
            </Col>
        </Row>
    );
};

export default Signin;
