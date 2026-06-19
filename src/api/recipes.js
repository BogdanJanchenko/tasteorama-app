import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const searchRecipes = async ({ query, filters }) => {
  const params = new URLSearchParams();

  params.append('search', query);

  if (filters?.category) {
    params.append('category', filters.category);
  }
  //   Object.entries(filters || {}).forEach(([key, value]) => {
  //     params.append(key, value);
  //   });

  //   const params = {
  //     q: query,
  //     ...filters,
  //   };
  const res = await axios.get(`${BASE_URL}/api/recipes`, {
    params: {
      search: query,
      ...filters,
    },
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
  //   const res = await axios.get('/api/recipes', { params });
  //   return res.data;
};
