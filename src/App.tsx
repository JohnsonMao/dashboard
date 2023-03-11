import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import router from './router';

import './assets/styles/index.scss';

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
