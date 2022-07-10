import "@/styles/globals.css";
import splitbee from "@splitbee/web";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}
