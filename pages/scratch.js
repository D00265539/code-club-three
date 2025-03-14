import React from 'react';
import Head from 'next/head'; 
import Image from 'next/image';  
import Nav from '@/components/Nav';
import { db } from '@vercel/postgres';

const Index = ({scratchCards}) => {
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
            {scratchCards.map((card) => (
              <section key={card.id} className={'bg-${card.background_color} px-4 rounded-md mx-2'}>
                <Image
                 src={card.image_url}
                 alt={'${card.title} logo'}
                 className="mt-3 rounded-md"
                 width={500}
                 height={500}
                />
                <h2 className="font-bold">{card.title}</h2>
                <h3 className="font-bold">{card.subtitle}</h3>
                  <p>{card.description}</p>
              </section>
             ))}
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

export async function getServerSideProps() {
  const client = await db.connect();

  const { rows: scratchCards } = await client.sql`
    SELECT * FROM scratch_cards;
  `;

  return {
    props: {
      scratchCards, 
    },
  };
}

export default Index;