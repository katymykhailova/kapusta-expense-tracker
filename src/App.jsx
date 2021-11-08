import { /*lazy,*/ Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRout';

import './App.css';

// const SignUpPage = lazy(() => import('' /* webpackChunkName: "signup" */));
// const LoginPage = lazy(() => import('' /* webpackChunkName: "login" */));
// const ReportPage = lazy(() => import('' /* webpackChunkName: "report" */));

/**
 * 1. добавить BrowserRouter в index.js
 * 2. продумать редиректы
 *
 * 3. реристрация path="/signup"
 * 4. логин path="/login"
 * 5. кабинет пользователя path="/report"
 */

export default function App() {
  return (
    <>
      {/* </NavBar> */}

      <Suspense fallback={<div>loading</div>}>
        <Container>
          <Switch>
            <PublicRoute path="/signup" exact restricted>
              {/* <СТРАНИЦА РЕГИСТРАЦИИ /> */}
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/report" restricted>
              {/* <СТРАНИЦА ЛОГИНИЗАЦИИ /> */}
            </PublicRoute>

            <PrivateRoute path="/report">
              {/* <КАБИНЕТ ПОЛЬЗОВАТЕЛЯ /> */}
            </PrivateRoute>

            {/* <Redirect to="/" /> */}
          </Switch>
        </Container>
      </Suspense>
    </>
  );
}
