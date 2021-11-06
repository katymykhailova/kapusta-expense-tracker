import s from '../MainContainer/MainContainer.module.css';

export default function MainContainer({ children }) {
  return <div className={s.bgContainer}>{children}</div>;
}
