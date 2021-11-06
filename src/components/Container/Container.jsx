import s from 'components/Container/Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
