import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
