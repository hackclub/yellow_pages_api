import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>YellowPages API</title>
        <meta name="description" content="For https://github.com/hackclub/yellow_pages" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Hello! 👋</h1>
      </div>
    </>
  );
}
