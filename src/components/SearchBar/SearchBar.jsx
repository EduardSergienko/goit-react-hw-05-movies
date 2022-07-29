import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
export function SearchBar({ onSubmit, value }) {
  const [serachBarQuery, setSerachBarQuery] = useState(value);

  const handleInputType = e => {
    setSerachBarQuery(e.currentTarget.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (serachBarQuery.trim() !== '') {
      onSubmit(serachBarQuery);
    } else {
      return Notiflix.Notify.failure(
        'Sorry, there are no movies matching your search query. Please try again.'
      );
    }
  };
  return (
    <form className={styles.searchbar} onSubmit={handleFormSubmit}>
      <input value={serachBarQuery} type="text" onChange={handleInputType} />
      <button type="submit">Search</button>
    </form>
  );
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
