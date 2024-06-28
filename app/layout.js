import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from 'next/head';
import Footer from "./components/Footer";
import BackToTopButton from './components/BackToTop'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team Folks",
  description: "Place to groom better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
      <body className={inter.className}>
      <Navbar/>
      <main className='px-8 py-20 max-w-6xl mx-auto '>{children}</main>
      <Footer/>
      <BackToTopButton/>
      </body>
    </html>
  );
}
