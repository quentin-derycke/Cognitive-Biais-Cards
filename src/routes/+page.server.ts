// src/routes/categories.ts
import type { Load } from '@sveltejs/kit';
import { fetchAllCategoriesWithBiais } from '../db/biaisByCat';




export const load: Load = async () => {
  const categories = await fetchAllCategoriesWithBiais();
  return {
    status: 200,
    body: categories,
  };
};
