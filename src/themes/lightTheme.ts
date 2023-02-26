import { createTheme } from '@nextui-org/react';
import { sharedTheme } from '@/themes';

export const lightTheme = createTheme({
    ...sharedTheme,
    type: 'light',
    theme: {
        colors: {}, // optional
    },
});
