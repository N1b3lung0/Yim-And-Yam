import React, { FC, useEffect, useState } from 'react';
import Head from 'next/head';

import { CustomNavbar } from '@/components/ui';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    const [origin, setOrigin] = useState('');

    useEffect(() => setOrigin(window.location.origin), []);
    if (!origin) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{title || 'Yim and Yam: app for training and food'}</title>
                <meta name="author" content="Carlos Martinez Crespo" />
                <meta name="description" content={`Information about gym and nutrition ${title}`} />
                <meta name="keywords" content={`${title}, gym, nutrition, exercises, food4444`} />

                <meta property="og:title" content={`Information about ${title}`} />
                <meta property="og:description" content={`This is the page about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <CustomNavbar />

            <main
                style={{
                    padding: '0px 20px',
                }}
            >
                {children}
            </main>
        </>
    );
};
