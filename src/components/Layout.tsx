import Head from "next/head";
// import Footer from "./Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>MPP Law</title>
        <meta name="description" content="MPP Law Firm Iași" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-start bg-white">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer className="mt-auto">{/* <Footer /> */}</footer>
      </div>
    </>
  );
}
