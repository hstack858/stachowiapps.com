import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Henflix</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" 
            rel="stylesheet" 
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Henflix - Henry Stachowiak's Portfolio" />
        </Head>
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
