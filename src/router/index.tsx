import { createBrowserRouter } from 'react-router-dom';

import Root from '../layouts/Root';
import Topics from '../layouts/Topics';

import Signin from '../pages/Signin';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import NewPost from '../pages/newPost';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Topics />,
                children: [
                    {
                        path: '/',
                        element: <Posts />
                    },
                    {
                        path: 'posts/:postId',
                        element: <Post />
                    }
                ]
            },
            {
                path: 'signin',
                element: <Signin />
            },
            {
                path: 'newPost',
                element: <NewPost />
            },
            {
                path: '*',
                element: <></>
            }
        ]
    }
]);

export default router;
