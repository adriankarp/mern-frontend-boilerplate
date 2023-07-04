import Head from 'next/head';
import Header from '../components/organisms/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>App Name Here</title>
        <meta name="description" content="App description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Hello from React!</h1>
      </main>
    </>
  );
}
