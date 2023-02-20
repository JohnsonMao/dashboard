import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import { MenuProvider } from './contexts/MenuContext';
import router from './router';

import './assets/styles/index.scss';

const App = () => (
    <ThemeProvider>
        <MenuProvider>
            <RouterProvider router={router} />
        </MenuProvider>
    </ThemeProvider>
);

export default App;
