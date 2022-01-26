import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({children, pageTitle = 'Home', titleNav = 'Dashboard'}) {
  
  return (
    <>
      <Head>
        <title>{pageTitle} | Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        title={titleNav}
      />

      <Sidebar />

      <main className="mainContent">
        {children}
      </main>

    </>
  )
}