import { useLocation } from 'react-router';
import s from '../MainContainer/MainContainer.module.css';

export default function MainContainer({ children }) {
  const location = useLocation();
  const isPublicPage =
    location.pathname === '/signup' || location.pathname === '/login';
  return (
    <div className={isPublicPage ? `${s.bgPublic}` : `${s.bgPrivate}`}>
      {children}
    </div>
  );
}
