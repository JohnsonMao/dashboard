import { useState, useMemo, createContext, useContext } from 'react';
import {
    createTheme,
    ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext({ toggleColorMode: () => {} });

export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);

    return ctx;
};

export const ThemeProvider: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState<'light' | 'dark'>(
        prefersDarkMode ? 'dark' : 'light'
    );

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
            }
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: blueGrey[900]
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
};
