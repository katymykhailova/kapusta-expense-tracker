import s from './Navigation.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function Navigation({ router, handleClick, children }) {
  const location = useLocation();
  return (
    <>
      <Link
        to={{ pathname: `${router}`, state: { from: location } }}
        onClick={handleClick}
      >
        <div className={s.navigation}>{children}</div>
      </Link>
    </>
  );
}
