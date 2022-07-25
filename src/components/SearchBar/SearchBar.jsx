import { useState } from 'react';
import Notiflix from 'notiflix';
export function SearchBar({ onSubmit }) {
  const [serachBarQuery, setSerachBarQuery] = useState('');

  const handleInputType = e => {
    setSerachBarQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (serachBarQuery.trim() !== '') {
      onSubmit(serachBarQuery);
    } else {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleInputType} />
      <button type="submit">Search</button>
    </form>
  );
}
