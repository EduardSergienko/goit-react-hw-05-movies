import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';

export function Movies() {
  const [formQuery, setFormQuery] = useState('');

  useEffect(() => {
    async function searchMovie() {
      if (formQuery === '') {
        return;
      }
      const { data } = await movieSearching(formQuery);
      console.log(data);
    }
    searchMovie();
  }, [formQuery]);

  const formData = data => {
    console.log(data);
    setFormQuery(data);
  };

  return <SearchBar onSubmit={formData} />;
}
