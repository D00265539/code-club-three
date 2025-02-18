import React from 'react';
import Head from 'next/head'; 
import Image from 'next/image';  
import Nav from '@/components/Nav';

const Index = () => {
  return (
    <>
      <Head>
        <title>Dundalk Code Club Scratch</title>
        <meta name="description" content="Home page of the Dundalk Code Club, learn to code for free in a fun environment." />
        <meta name="keywords" content="Scratch, Python, Web, HTML, CSS, JavaScript, Youth Free, coding" />
        <meta name="author" content="Elliot Delaney" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/images/code_club_logo.ico" type="image/x-icon" />
        <link href="/css/output.css" rel="stylesheet" />
      </Head>
    
    <div className="bg-blue-500 p-4 min-h-screen text-black">
      <div id="wrapper" className="bg-green-400 rounded-xl pb-4 mx-auto px-4 flex flex-col min-h-screen pt-2">  
        
        <header id="logo" className="container bg-green-400 mx-auto rounded-xl">
          <Nav/>
        </header>

        <main className="flex-1">
          <article className="container clear-both bg-green-600 mx-auto px-4 pt-4 rounded-xl h-full pb-3">
            <header id="intro" className="container bg-gray-200 mx-auto p-4 rounded-xl w-full border-solid border-2 border-black">
              <h1 className="font-bold">Scratch</h1>
              <br/>
              <p>Begin your adventure in digital making, by learning to code animations, stories and games on Scratch</p>
            </header>

            <br/>
            <div id="panels" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5">
              <section id="one" className="bg-green-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/scratch-intro.webp"
                  alt="Scratch Intro logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">Introduction to Scratch</h2>
                <h3 class="font-bold">Sprites, scripts and loops</h3>
                <p>In this introduction to coding in Scratch for beginners, you will learn how to add code, costumes and sound to sprites as you make animations, a game, and app and a book.</p>
              </section>

              <section id="two" className="bg-blue-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/more-scratch.webp"
                  alt="More Scratch logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">More Scratch</h2>
                <h3 class="font-bold">Broadcasts, decisions and variables</h3>
                <p>More Scratch moves beyond the basics introduced in Introduction to Scratch. You will make apps, games and simluations using messages, broadcasting, if...then, and if...then..else decisions and variables.</p>
              </section>

              <section id="three" className="bg-orange-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/further-scratch.webp"
                  alt="Web logo"
                  className="mt-3 rounded-md"
                  width={500}
                  height={500}
                />
                <h2 className="font-bold">Further Scratch</h2>
                <h3 class="font-bold">Clones, my blocks and Boolean logic</h3>
                <p>Further Scratch moves beyond the skills introduced in introductions to Scratch and More Scratch. You will make apps, games, computer generated art and simulations using Boolean Logic, functions, clones and more.</p>
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