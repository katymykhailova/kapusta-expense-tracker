import { Route } from 'react-router-dom';

function PrivateRoute({ children, ...routeProps }) {
  // const isLoggedIn  = если пользователь  залогинен
  return (
    <Route {...routeProps}>
      {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
    </Route>
  );
}

export default PrivateRoute;
