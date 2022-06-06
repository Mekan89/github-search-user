import Head from "next/head";

export default function CustomHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Github clone with Nextjs and Tailwind" />
      <link rel="icon" href="/img/github.svg" />
    </Head>
  );
}
