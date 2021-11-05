import { Route } from 'react-router-dom';

function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  // const isLoggedIn  = если пользователь  залогинен
  // const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {/* {shouldRedirect ? <Redirect to={redirectTo} /> : children} */}
    </Route>
  );
}

export default PublicRoute;
