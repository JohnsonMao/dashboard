import { useState, useMemo, createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

import router from './router';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(
        prefersDarkMode ? 'dark' : 'light'
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === 'light' ? 'dark' : 'light'
                );
            }
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                },
                components: {
                    MuiUseMediaQuery: {
                        defaultProps: {
                            noSsr: true
                        }
                    }
                }
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
