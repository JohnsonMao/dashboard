import { createBrowserRouter } from 'react-router-dom';

import Root from '../layouts/Root';
import Example from '../pages/Example';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Example />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: '*',
                element: <>尚未完成</>
            }
        ]
    }
]);

export default router;
