import { db } from '@vercel/postgres';  

const client = await db.connect();

async function seedTechCards() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS technology_cards (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      image_url VARCHAR(50) NOT NULL,
      title VARCHAR(20) NOT NULL,
      description TEXT NOT NULL,
      link VARCHAR(50) NOT NULL,
      background_color VARCHAR(7) NOT NULL
    );
  `;

  const technologyCards = [
    {
      image_url: "/images/scratch.png",
      title: "Scratch",
      description: "Create animations, apps, and interactive stories by adding code, costumes, and sounds.",
      link: "/scratch",
      background_color: "#F0F8FF"
    },
    {
      image_url: "/images/python.png",
      title: "Python",
      description: "Make digital art, games, and more while exploring one of the world's most popular programming languages.",
      link: "/python",
      background_color: "#FFEBEE"
    },
    {
      image_url: "/images/web.png",
      title: "Web design",
      description: "Build websites and apps by learning HTML, CSS, and JavaScript.",
      link: "/web",
      background_color: "#FFECB3"
    }
  ];

  await Promise.all(
    technologyCards.map((card) =>
      client.sql`
        INSERT INTO technology_cards (image_url, title, description, link, background_color)
        VALUES (${card.image_url}, ${card.title}, ${card.description}, ${card.link}, ${card.background_color})
        ON CONFLICT (title) DO NOTHING;`
    )
  );

  return technologyCards;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    const cards = await seedTechCards();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Technology cards seeded successfully', cards });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}

async function seedScratchCards() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS scratch_cards (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      image_url VARCHAR(50) NOT NULL,
      title VARCHAR(20) NOT NULL,
      subtitle VARCHAR(20) NOT NULL,
      description TEXT NOT NULL,
      background_color VARCHAR(7) NOT NULL
    );
  `;

  const scratchCards = [
    {
      image_url: "/images/scratch-intro.webp",
      title: "Introduction to Scratch",
      subtitle: "Sprites, scripts and loops",
      description: "In this introduction to coding in Scratch for beginners, you will learn how to add code, costumes and sound to sprites as you make animations, a game, and app and a book.",
      background_color: "#F0F8FF"
    },
    {
      image_url: "/images/more-scratch.webp",
      title: "More Scratch",
      subtitle: "Broadcasts, decisions and variables",
      description: "More Scratch moves beyond the basics introduced in Introduction to Scratch. You will make apps, games and simluations using messages, broadcasting, if...then, and if...then..else decisions and variables.",
      background_color: "#FFEBEE"
    },
    {
      image_url: "/images/further-scratch.webp",
      title: "Further Scratch",
      subtitle: "Clones, my blocks and Boolean logic",
      description: "Further Scratch moves beyond the skills introduced in introductions to Scratch and More Scratch. You will make apps, games, computer generated art and simulations using Boolean Logic, functions, clones and more.",
      background_color: "#FFECB3"
    }
  ];

  await Promise.all(
    scratchCards.map((card) =>
      client.sql`
        INSERT INTO scratch_cards (image_url, title, subtitle, description, background_color)
        VALUES (${card.image_url}, ${card.title}, ${card.subtitle}, ${card.description}, ${card.background_color})
        ON CONFLICT (title) DO NOTHING;`
    )
  );

  return scratchCards;
}

async function seedPythonCards() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS python_cards (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      image_url VARCHAR(50) NOT NULL,
      title VARCHAR(20) NOT NULL,
      subtitle VARCHAR(20) NOT NULL,
      description TEXT,
      background_color VARCHAR(7) NOT NULL
    );
  `;

  const pythonCards = [
    {
      image_url: "/images/python-intro.webp",
      title: "Introduction to Python",
      subtitle: "Variables, functions and loops",
      description: " ",
      background_color: "#F0F8FF"
    },
    {
      image_url: "/images/more-python.webp",
      title: "More Python",
      subtitle: "Lists, dictionaries and data",
      description: "More Python moves beyond the basics introduced in introduction to Python. You will learn how to use lists, dictionaries and files to create charts, models and artwork.",
      background_color: "#FFEBEE"
    },
  ];

  await Promise.all(
    pythonCards.map((card) =>
      client.sql`
        INSERT INTO python_cards (image_url, title, subtitle, description, background_color)
        VALUES (${card.image_url}, ${card.title}, ${card.subtitle}, ${card.description}, ${card.background_color})
        ON CONFLICT (title) DO NOTHING;`
    )
  );

  return pythonCards;
}

async function seedWebCards() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS web_cards (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      image_url VARCHAR(50) NOT NULL,
      title VARCHAR(20) NOT NULL,
      subtitle VARCHAR(20) NOT NULL,
      description TEXT,
      background_color VARCHAR(7) NOT NULL
    );
  `;

  const webCards = [
    {
      image_url: "/images/web-intro.webp",
      title: "Introduction to Web",
      subtitle: "HTML, CSS and animations",
      description: "In this introduction to Web Design for beginners, you will learn how to add structure and style to webpages with images, lists, fonts, quotes, links and animation.",
      background_color: "#F0F8FF"
    },
    {
      image_url: "/images/more-web.webp",
      title: "More Web",
      subtitle: "HTML, CSS and JavaScript",
      description: "More Web moves beyond the basics introduced in Introduction to Web. Modern Web Design has turned websites from static and boring walls of information into ways of providing fun and engaging experiences to a user. Take users on a journey and transport them to somewhere completely new!",
      background_color: "#FFEBEE"
    },
  ];

  await Promise.all(
    webCards.map((card) =>
      client.sql`
        INSERT INTO web_cards (image_url, title, subtitle, description, background_color)
        VALUES (${card.image_url}, ${card.title}, ${card.subtitle}, ${card.description}, ${card.background_color})
        ON CONFLICT (title) DO NOTHING;`
    )
  );

  return webCards;
}