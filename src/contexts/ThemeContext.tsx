import { useState, useMemo, createContext, useContext } from 'react';

/* Mui */
import {
    createTheme,
    ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';

/* Icon */
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeContext = createContext({
    mode: 'light',
    toggleColorMode: () => {}
});

export function ToggleThemeButton() {
    const { mode, toggleColorMode } = useContext(ThemeContext);

    return (
        <IconButton onClick={toggleColorMode} color="inherit" size="large">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}

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
                    button: {
                        textTransform: 'none'
                    },
                    fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        '"Noto Sans TC"',
                        'Roboto',
                        'sans-serif'
                    ].join(',')
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
                <CssBaseline enableColorScheme />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}
