import { Route } from 'react-router-dom';

function PrivateRoute({ children, ...routeProps }) {
  // const isLoggedIn  = если пользователь  залогинен
  return (
    <Route {...routeProps}>
      {children}
      {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
    </Route>
  );
}

export default PrivateRoute;
