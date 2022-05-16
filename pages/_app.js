import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Henflix</title>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
