import Typed from 'typed.js'

import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {

  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLElement>(null);
  // Create reference to store the Typed instance itself
  const typed = useRef<Typed>(null);

  useEffect(() => {
    const options = {
      strings: [
        'to build things on the web',
        'to write about things',
        'to create music, or at least I hope it&apos;s music',
        'to build things on the web',
        'to write about things',
        'to create music, or at least I hope it&apos;s music'
      ],
      typeSpeed: 50,
      backSpeed: 25,
    };

    // elRef refers to the <span> rendered below
    // @ts-ignore: typed.current is mutable
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed?.current?.destroy();
    }
  }, [])


  return <>
    <Head>
      <title>Eden Chan | Personal Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <body
      className="bg-blue-100 w-screen h-screen flex flex-col mx-auto align-middle">

      <header className="bg-red-100">
        <nav aria-labelledby="primary-navigation" className='flex flex-row justify-center '>
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

          <h1 className="text-3xl font-bold ">
            <span className="animate-wave inline-block">👋🏼</span>Hi, I'm Eden</h1>
          <h2>I like <span style={{ whiteSpace: 'pre' }} ref={el} />
          </h2>



        </section>
      </main>
      <footer className="bg-red-800">
        <nav aria-labelledby="footer-navigation" className='flex flex-row justify-center '>
          <h2 id="footer-navigation">Footer navigation</h2>
          {/* <!-- navigation items --> */}
        </nav>
      </footer>
    </body>
  </>
}

export default Home
