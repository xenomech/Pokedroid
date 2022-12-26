import Head from "next/head";

type Props = {
  children: JSX.Element;
};
export default function Container({ children }: Props) {
  const meta = {
    title: "Pokédroid",
    name: "Pokédroid",
    description: "Get your pokemon polaroid!",
    keywords: "Pokemon | card | PokeCard | Nintendo 3DS | Pokemon x/y",
    type: "website",
    og_image: "/static/images/og_image.png",
    twitter_image: "/static/images/Twitter_Summary.png",
    twitterHandle: "@justgokulsuresh",
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.og_image} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:creator" content={meta.twitterHandle} />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={meta.twitter_image} />
      </Head>
      {children}
    </div>
  );
}
