import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { getUserName, getUserAvatar } from '../../redux/auth';
import { logOut } from '../../redux/auth';
import Modal from 'components/Modal';

import ButtonBlock from 'components/ButtonBlock';
import './styles.css';
import s from './UserNav.module.css';
import logout from '../../images/logout.svg';

function UserNav() {
  const [isOpen, setIsOpen] = useState(false);
  const username = useSelector(getUserName);
  const avatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();

  return (
    <>
      <div className={s.userAuth}>
        <div className={s.userAvatarWrap}>
          <img
            src={`${avatar}`}
            alt="User avatar"
            className={s.userAvatarImg}
          />
        </div>
        <p className={s.userName}>{username}</p>
        <div className={s.userAuthSlash}></div>
        <button
          type="button"
          className={s.logoutBtn}
          onClick={() => setIsOpen(true)}
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
      <TransitionGroup>
        {isOpen && (
          <CSSTransition classNames="option" timeout={1000}>
            <Modal
              onClose={() => setIsOpen(false)}
              text="Вы уверены, что хотите закрыть приложение?"
            >
              <ButtonBlock
                firstButtonText={'Да'}
                secondButtonText={'Нет'}
                firstButtonHandler={() => dispatch(logOut())}
                secondButtonHandler={() => setIsOpen(false)}
                firstButtonType={'button'}
                secondButtonType={'button'}
              />
            </Modal>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}
export default UserNav;
