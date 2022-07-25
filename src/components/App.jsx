import { Route, Routes } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import { Home } from 'pages/Home';
export const App = () => {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};
