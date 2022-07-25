import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
// const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';

export async function fetchTrandingFilms() {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(`${BASE_URL}?${API_KEY}`);
}

export async function movieSearching(searchQuery) {
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';
  return await axios.get(
    `${BASE_URL}?${API_KEY}&query=${searchQuery}&language=en-US`
  );
}
