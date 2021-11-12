import { useDispatch, useSelector } from 'react-redux';
import { getUserName, getUserAvatar } from '../../redux/auth';
import { logOut } from '../../redux/auth';
import s from './UserNav.module.css';
import logout from '../../images/logout.svg';

function UserNav() {
  const username = useSelector(getUserName);
  const avatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();

  const handleLogOutOnClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.userAuth}>
      <div className={s.userAvatarWrap}>
        <img src={`${avatar}`} alt="User avatar" className={s.userAvatarImg} />
      </div>
      <p className={s.userName}>{username}</p>
      <div className={s.userAuthSlash}></div>
      <button
        type="button"
        className={s.logoutBtn}
        onClick={handleLogOutOnClick}
      >
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
