import { createTheme } from '@nextui-org/react';
import { sharedTheme } from '@/themes';

export const darkTheme = createTheme({
    ...sharedTheme,
    type: 'dark',
    theme: {
        colors: {}, // optional
    },
});
