import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
export default function Navigation(params) {
  return (
    <nav className={styles.mainnav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.navitem
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.navitem
        }
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
