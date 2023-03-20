import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rainbow Kit Tour</title>
        <meta name="description" content="rainbow kit tour by jamie-jungah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Rainbow Kit Tour</h1>
        <ConnectButton />
      </main>
    </>
  )
}
