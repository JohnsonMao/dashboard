import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import { collection, getDocs, DocumentData } from 'firebase/firestore';

import Topics from '../../components/Topics';
import { db } from '../../utils/firebase';

interface IPost extends DocumentData {
    id: string;
    title: string;
    content: string;
    topic: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([
        {
            id: '123',
            title: '主題',
            content: '內容',
            topic: '電影'
        }
    ]);

    useEffect(() => {
        // const postsRef = collection(db, 'posts');
        // getDocs(postsRef).then((querySnapshot) => {
        //     const data = querySnapshot.docs.map((doc) => ({
        //         ...doc.data(),
        //         id: doc.id
        //     }));
        //     setPosts(data);
        // });
    }, []);
    return (
        <ListGroup variant="flush">
            {posts.map((post) => (
                <ListGroup.Item
                    action
                    key={post.id}
                    as={Link}
                    to={`/posts/${post.id}`}
                >
                    <Card>
                        <Row>
                            <Col>
                                <Card.Img src="https://react.semantic-ui.com/images/wireframe/image.png" />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Subtitle className="d-flex align-items-center gap-1 mb-2">
                                        <Image
                                            src="https://react.semantic-ui.com/images/wireframe/image.png"
                                            width="24px"
                                            height="24px"
                                            roundedCircle
                                        />
                                        {post.topic}．使用者
                                    </Card.Subtitle>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>{post.content}</Card.Text>
                                    <Card.Text className="py-2 text-secondary position-absolute bottom-0">
                                        留言 0 ． 讚 0
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Posts;
