import { useState, useMemo, createContext, useContext } from 'react';
import {
    createTheme,
    ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext({
    mode: 'light',
    toggleColorMode: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider(props: React.PropsWithChildren) {
    const { children } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(
        prefersDarkMode ? 'dark' : 'light'
    );

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
            }
        }),
        [mode]
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === 'light' ? blueGrey[800] : blue[300]
                    }
                },
                typography: {
                    fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        '"Noto Sans TC"',
                        'Roboto',
                        'sans-serif'
                    ].join(','),
                    button: {
                        textTransform: 'none'
                    }
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
        <ThemeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}
