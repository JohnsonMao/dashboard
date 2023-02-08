import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts';
import Signin from '../pages/Signin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <div>Home</div>
            },
            {
                path: 'signin',
                element: <Signin />
            }
        ]
    }
]);

export default router;
