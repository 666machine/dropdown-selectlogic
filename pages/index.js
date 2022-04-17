import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Quiz2 from './Quiz2';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Quiz2 />
    </div>
  );
}
