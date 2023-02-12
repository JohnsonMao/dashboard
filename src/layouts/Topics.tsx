import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

import { db } from '../utils/firebase';

interface ITopic extends DocumentData {
    name: string;
}

const Topics: React.FC = () => {
    const [topics, setTopics] = useState<ITopic[]>([]);

    useEffect(() => {
        const topicsRef = collection(db, 'topics');

        getDocs(topicsRef).then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => doc.data() as ITopic);
            setTopics(data);
        });
    }, []);

    return (
        <Row>
            <Col>
                <ListGroup>
                    {topics.map((topic) => (
                        <ListGroup.Item action key={topic.name}>
                            {topic.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col xs={8}>
                <Outlet />
            </Col>
        </Row>
    );
};

export default Topics;
