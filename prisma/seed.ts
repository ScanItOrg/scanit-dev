import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const company = await prisma.company.create({
    data: {
      name: "LG",
      website: "https://www.lg.com",
      logoUrl: "https://cdn.lg.com/logo.png",
      products: {
        create: [
          {
            name: "Kettle Basic 1.5L",
            modelNo: "LG-KET-1500",
            imageUrl: "https://cdn.lg.com/kettle-basic.jpg",
            manuals: {
              create: {
                language: "en",
                version: "1.0",
                publishedAt: new Date("2023-01-01"),
                sections: {
                  create: [
                    {
                      title: "How to Use",
                      content: "Step 1: Fill with water. Step 2: Plug in. Step 3: Press start.",
                      orderIndex: 1,
                      media: {
                        create: [
                          {
                            type: "image",
                            url: "https://cdn.lg.com/manuals/kettle/how-to-use.jpg",
                            caption: "Fill water"
                          }
                        ]
                      }
                    },
                    {
                      title: "Safety",
                      content: "Always unplug after use. Keep away from children.",
                      orderIndex: 2
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  });

  console.log("Seeded company and data:", company);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
