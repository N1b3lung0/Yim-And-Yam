import React from 'react';
import type { AppProps } from 'next/app';
import { globalCss, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import useDarkMode from 'use-dark-mode';
import { SSRProvider } from 'react-aria';

import { darkTheme, lightTheme } from '@/themes';

const globalStyles = globalCss({
    body: { margin: 0 },
});

const App = ({ Component, pageProps }: AppProps) => {
    globalStyles();

    const darkMode = useDarkMode(false);

    return (
        <SSRProvider>
            <NextThemesProvider
                defaultTheme="system"
                attribute="class"
                value={{
                    light: lightTheme.className,
                    dark: darkTheme.className,
                }}
            >
                <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
                    <Component {...pageProps} />
                </NextUIProvider>
            </NextThemesProvider>
        </SSRProvider>
    );
};

export default App;
