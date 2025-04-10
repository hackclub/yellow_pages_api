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
      <div class="container" style={{
        marginTop: "100px",
      }}>
        <h1>YellowPages API</h1>
        <ul>
          <li><strong><code>/data</code></strong>: All merchants</li>
          <li><strong><code>/search?network_id=xxxx</code></strong>: Find a merchant by its network ID</li>
          <li><strong><code>/search?name=xxxx</code></strong>: Find a merchant by its name (returns multiple network IDs)</li>
          <li><strong><code>/icons/xxxx</code></strong>: Get the icon for a merchant (all lowercase, no special characters)</li>
        </ul>
      </div>
    </>
  );
}
