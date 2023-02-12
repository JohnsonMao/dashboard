import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image, Row, Col } from 'react-bootstrap';

const Post: React.FC = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {}, []);

    return (
        <>
            <div>
                <Image
                    src="https://react.semantic-ui.com/images/wireframe/image.png"
                    width="24px"
                    height="24px"
                    roundedCircle
                />
                使用者
            </div>
            <h1>標題</h1>
            <h2>
                電影．<time>{new Date().toLocaleDateString()}</time>
            </h2>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" width="100%" />
            <article>內文</article>
            <div>留言 0 ． 讚 0</div>
        </>
    );
};

export default Post;
