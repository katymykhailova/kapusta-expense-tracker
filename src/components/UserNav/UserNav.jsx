import s from './UserNav.module.css';
import logout from '../../images/logout.svg';

function UserNav() {
  return (
    <div className={s.userAuth}>
      <div className={s.userAvatarWrap}>
        {/* <img src="" alt="User avatar" className={s.userAvatarImg} /> */}
      </div>
      <p className={s.userName}>User Name</p>
      <div className={s.userAuthSlash}></div>
      <button type="button" className={s.logoutBtn}>
        <img
          src={logout}
          alt="logout button"
          width="16px"
          height="16px"
          className={s.logoutIcon}
        />

        <p className={s.logoutText}>Выйти</p>
      </button>
    </div>
  );
}
export default UserNav;
