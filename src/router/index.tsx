import { createBrowserRouter } from 'react-router-dom';

import Root from '../layouts/Root';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Announce from '../pages/Announce';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'announce',
                element: <Announce />
            },
            {
                path: '*',
                element: <>尚未完成</>
            }
        ]
    }
]);

export default router;
