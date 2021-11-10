import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserIsLoggedIn, getUserIsSignedUp } from './../redux/auth';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/home',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  const isSignedUp = useSelector(getUserIsSignedUp);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {isSignedUp && <Redirect to="/login" />}
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

export default PublicRoute;
