

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchAllCategoriesWithBiais() {
  const categories = await prisma.category.findMany({
    include: {
      biais: true,
    },
  });

  return categories;
}
