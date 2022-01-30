
import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {

  // Create reference to store the DOM element containing the animation
  const el = useRef<HTMLElement>(null);
  const [listedText, setListedText] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0)
  // Create reference to store the Typed instance itself

  const typedStrings = [
    'to build things on the web',
    'to write about things',
    'to organize events',
  ]




  return <>
    <Head>
      <title>Eden Chan | Personal Website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div
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
          <h2>I like <span style={{ whiteSpace: 'pre' }} ref={el} />  </h2>
          <div>
          </div>
        </section>
      </main>
      <footer className="bg-red-800">
        <nav aria-labelledby="footer-navigation" className='flex flex-row justify-center '>
          <h2 id="footer-navigation">Footer navigation</h2>
          {/* <!-- navigation items --> */}
        </nav>
      </footer>
    </div>
  </>
}

export default Home
