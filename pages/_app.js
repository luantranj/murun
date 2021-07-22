import Head from 'next/head';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp;
