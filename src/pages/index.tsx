import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Layout } from '@/components/layouts';
import { Grid } from '@nextui-org/react';

const Home = () => {
    return (
        <Layout title="Listado de cartas de Marvel Snap">
            <Grid.Container gap={2} justify="flex-start"></Grid.Container>
        </Layout>
    );
};

export default Home;
