import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Eden Chan | Personal Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body
      className="bg-blue-100 w-screen h-screen flex flex-col mx-auto align-middle">

      <header className="bg-red-100">
        <nav aria-labelledby="primary-navigation">
          <h2 id="primary-navigation">Primary navigation</h2>
          {/* <!-- navigation items --> */}

        </nav>
      </header>
      {/* <!-- page content --> */}
      <main className="bg-red-400">
        <section className="flex flex-col justify-center">
          <div className="flex justify-center">

            <Image src='/profile.png' alt="Picture of me" width="176" height="176" className="rounded-full mx-auto" />
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <h1 className="text-3xl font-bold ">
            <span className="hover:animate-wave inline-block">👋🏼</span>I'm Eden Chan  </h1>

        </section>
      </main>
      <footer className="bg-red-800">
        <nav aria-labelledby="footer-navigation">
          <h2 id="footer-navigation">Footer navigation</h2>
          {/* <!-- navigation items --> */}
        </nav>
      </footer>
    </body>
  </>
}

export default Home
