import type { AppProps } from "next/app";
import { JetBrains_Mono } from "@next/font/google";
import "../../styles/globals.css";
import { Toaster } from "react-hot-toast";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jetBrainsMono.className}>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          className: "neubrutal-borders",
          style: {
            boxShadow: "6px 6px 0px #1f1f1f",
          },
        }}
      />
    </main>
  );
}
