import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';

const Home = lazy(() => import('../pages/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "Movies" */)
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails' /* webpackChunkName: "MovieDetails" */)
);
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "Reviews" */)
);

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
