import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  meta = {
    title: "Poké card ",
    name: "Poké Card",
    description: "Get your pokemon!",
    keywords: "Pokemon | card | PokeCard | Nintendo 3DS | Pokemon x/y",
    type: "website",
    image: "https://gokuls.dev/static/images/PreviewImage.png",
    twitterHandle: "@justgokulsuresh",
  };
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{this.meta.title}</title>
          <meta content={this.meta.description} name="description" />
          <meta property="og:type" content={this.meta.type} />
          <meta property="og:site_name" content={this.meta.name} />
          <meta property="og:description" content={this.meta.description} />
          <meta property="og:keywords" content={this.meta.keywords} />
          <meta property="og:title" content={this.meta.title} />
          <meta property="og:image" content={this.meta.image} />
          <meta name="twitter:title" content={this.meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:author" content={this.meta.twitterHandle} />
          <meta name="twitter:site" content={this.meta.twitterHandle} />
          <meta name="twitter:description" content={this.meta.description} />
          <meta name="twitter:image" content={this.meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
