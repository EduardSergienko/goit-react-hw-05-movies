import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
export const App = () => {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
      </Routes>
    </>
  );
};
