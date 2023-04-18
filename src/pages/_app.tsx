import type { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import Layout from "@/component/layout/Index";
import { useTitleGenerator } from "shared/hook/useTitleGenerator";
import { IRANSansX } from "@/theme/fonts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

import "../shared/a.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const pageTitle = useTitleGenerator();

  return (
    <AnimatePresence mode="sync">
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.4 }}
        className={IRANSansX.className}
      >
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </motion.main>
    </AnimatePresence>
  );
}
