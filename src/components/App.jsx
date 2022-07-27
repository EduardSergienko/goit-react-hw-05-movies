import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';

const Home = lazy(() => {
  return import('../pages/Home').then(module => {
    return { default: module.Home };
  });
});
const Movies = lazy(() => {
  return import('../pages/Movies').then(module => {
    return { default: module.Movies };
  });
});
const MovieDetails = lazy(() => {
  return import('../pages/MovieDetails').then(module => {
    return { default: module.MovieDetails };
  });
});
const Cast = lazy(() => {
  return import('./Cast/Cast').then(module => {
    return { default: module.Cast };
  });
});
const Reviews = lazy(() => {
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
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
