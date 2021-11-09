import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function NavigationPage({ router, children }) {
  return (
    <>
      <NavLink to={`${router}`}>
        <div className={s.navigation}>{children}</div>
      </NavLink>
    </>
  );
}
