import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation({ router, children }) {
  return (
    <>
      <NavLink to={`${router}`} exact>
        <div className={s.navigation}>{children}</div>
      </NavLink>
    </>
  );
}