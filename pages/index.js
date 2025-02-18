import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Head>
        <title>Dundalk Code Club Home</title>
        <meta name="description" content="Home page of the Dundalk Code Club, learn to code for free in a fun environment." />
        <meta name="keywords" content="Scratch, Python, Web, HTML, CSS, JavaScript, Youth Free, coding" />
        <meta name="author" content="Elliot Delaney" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/images/code_club_logo.ico" type="image/x-icon" />
        <link rel="preload" href="/css/output.css" as="stylesheet" />
      </Head>
    
    <div className="bg-blue-500 p-4 min-h-screen text-black">
      <div id="wrapper" className="bg-green-400 rounded-xl pb-4 mx-auto px-4 flex flex-col min-h-screen pt-2">
        
        <header id="Nav" className="container mx-auto rounded-xl">
          <Nav/>
        </header>

        <main className="flex-1">
          <article className="container clear-both bg-green-600 mx-auto px-4 pt-4 rounded-xl h-full pb-3">
            <header id="intro" className="container bg-gray-200 mx-auto p-4 rounded-xl w-full border-solid border-2 border-black">
              <h1 className="font-bold">Learn to code with Code Club</h1>
              <br/>
              <p>Our projects have step-by-step instructions to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30 languages.</p>
            </header>

            <br/>
            <div id="panels" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5">
              <section id="one" className="bg-green-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/scratch.png"
                  alt="Scratch logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">Scratch</h2>
                <p>Create animations, apps, and interactive stories by adding code, costumes, and sounds.</p>
                <Link href="/scratch"><button className="border-solid border-2 px-3 my-2 rounded-md mr-3 border-black">Explore Scratch Projects</button></Link>
              </section>

              <section id="two" className="bg-blue-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/python.png"
                  alt="Python logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">Python</h2>
                <p>Make digital art, games, and more while exploring one of the world's most popular programming languages.</p>
                <Link href="/python"><button className="border-solid border-2 px-3 my-2 rounded-md mr-3 border-black">Explore Python Projects</button></Link>
              </section>

              <section id="three" className="bg-orange-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/web.png"
                  alt="Web logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">Web design</h2>
                <p>Build websites and apps by learning HTML, CSS, and JavaScript.</p>
                <Link href="/web"><button className="border-solid border-2 px-3 my-2 rounded-md mr-3 border-black">Explore Web Projects</button></Link>
              </section>
            </div>
          </article>
        </main>
      </div>
      
      <footer>
        <address>Dublin Road, Dundalk</address>
      </footer>
    </div>
    </>
  );
};

export default Index;