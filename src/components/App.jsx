import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const AsyncHome = lazy(() => {
  return import('../pages/Home').then(module => {
    return { default: module.Home };
  });
});
const AsyncMovies = lazy(() => {
  return import('../pages/Movies').then(module => {
    return { default: module.Movies };
  });
});
const AsyncMovieDetails = lazy(() => {
  return import('../pages/MovieDetails').then(module => {
    return { default: module.MovieDetails };
  });
});
const AsyncMovieCast = lazy(() => {
  return import('./Cast/Cast').then(module => {
    return { default: module.Cast };
  });
});
const AsyncMovieReviews = lazy(() => {
  return import('./Reviews/Reviews').then(module => {
    return { default: module.Reviews };
  });
});
export const App = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<AsyncHome />} />
          <Route path="/movies" element={<AsyncMovies />} />
          <Route path="/movies/:movieId" element={<AsyncMovieDetails />}>
            <Route path="cast" element={<AsyncMovieCast />} />
            <Route path="reviews" element={<AsyncMovieReviews />} />
          </Route>
          <Route path="*" element={<AsyncHome />} />
        </Routes>
      </Suspense>
    </>
  );
};
