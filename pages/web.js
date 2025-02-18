import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Image from 'next/image';

const Index = () => {
  return (
    <>
      <Head>
        <title>Dundalk Code Club Web</title>
        <meta name="description" content="Home page of the Dundalk Code Club, learn to code for free in a fun environment." />
        <meta name="keywords" content="Scratch, Python  , Web, HTML, CSS, JavaScript, Youth Free, coding" />
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
              <h1 className="font-bold">Web Design</h1>
              <br/>
              <p>Begin learning how to design web pages using HTML, CSS, JavaScript and animations.</p>
            </header>

            <br/>
            <div id="panels" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full mx-auto gap-5">
              <section id="one" className="bg-green-300 px-4 rounded-md mx-2">
                <Image
                  src="/images/web-intro.webp"
                  alt="Web Intro logo"
                  className="mt-3 rounded-md"
                  width={700}
                  height={700}
                />
                <h2 className="font-bold">Introduction to Web</h2>
                <h3 className="font-bold">HTML, CSS and animations</h3>
                <p>In this introduction to Web Design for beginners, you will learn how to add structure and style to webpages with images, lists, fonts, quotes, links and animation.</p>
              </section>

              <section id="two" className="bg-blue-300 px-4 rounded-md mx-2">
               <Image
                  src="/images/more-web.webp"
                  alt="More Web logo"
                  className="mt-3 rounded-md"
                  width={700}
                  height={700}
                />
                <h2 className="font-bold">More Web</h2>
                <h3 class="font-bold">HTML, CSS and JavaScript</h3>
                <p>More Web moves beyond the basics introduced in Introduction to Web. Modern Web Design has turned websites from static and boring walls of information into ways of providing fun and engaging experiences to a user. Take users on a journey and transport them to somewhere completely new!</p>
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