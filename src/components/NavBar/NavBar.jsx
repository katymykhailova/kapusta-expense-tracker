// import { Link } from 'react-router-dom';
import s from './NavBar.module.css';
import logo from '../../images/logo.jpg';
import UserNav from 'components/UserNav/UserNav';

// заменить <a> на Link

function NavBar() {
  // const isLoggedIn = если пользователь залогинен;

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

        {/* {isLoggenIn && } */}
        <UserNav></UserNav>
      </div>
    </header>
  );
}

export default NavBar;
