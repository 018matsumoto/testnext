import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>世界初ポスト</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>これが世界初の投稿！</h1>
      <h2>
        <Link href="/">🔙 一旦戻ろう</Link>
      </h2>
    </Layout>
  );
}
