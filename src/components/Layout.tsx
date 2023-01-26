import Head from "next/head";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>MPP Law</title>
        <meta name="description" content="MPP Law Firm Iași" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="chrome-proxy-content-security-policy"
          content="object-src 'none';script-src 'self' https://www.google.com https://maps.googleapis.com https://maps.gstatic.com https://mts0.googleapis.com https://mts1.googleapis.com;"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-start bg-white">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
}
