import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import router from './router';

import './assets/styles/index.scss';

function App() {
    return (
        <ThemeProvider>
            <SidebarProvider>
                <RouterProvider router={router} />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
