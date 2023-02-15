import { createBrowserRouter } from 'react-router-dom';

import Root from '../layouts/Root';
import Example from '../pages/Example';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Example />
            }
        ]
    }
]);

export default router;
