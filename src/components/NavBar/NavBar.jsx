// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from '../../redux/auth';
import logo from '../../images/logo.jpg';
import UserNav from 'components/UserNav/UserNav';
import s from './NavBar.module.css';

// заменить <a> на Link

function NavBar() {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <a href="/" aria-label="app logo">
          <img
            className={s.headerLogo}
            src={logo}
            alt="logo"
            width="90"
            height="31"
          />
        </a>

        {isLoggedIn && <UserNav />}
      </div>
    </header>
  );
}

export default NavBar;
