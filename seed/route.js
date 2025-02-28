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
