import { /*lazy,*/ Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRout';
import MainContainer from './components/MainContainer/MainContainer';
import Container from './components/Container/Container';
import NavBar from 'components/NavBar/NavBar';
import RegisterPage from './views/RegisterPage/RegisterPage';
import LoginPage from './views/LoginPage/LoginPage';
import ReportPage from './views/ReportPage/ReportPage';
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
      <NavBar />

      <Suspense fallback={<div>loading</div>}>
        <MainContainer>
          <Container>
            <Switch>
              <PublicRoute path="/signup" exact restricted>
                <RegisterPage />
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/report" restricted>
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/report">
                <ReportPage />
              </PrivateRoute>

              {/* <Redirect to="/" /> */}
            </Switch>
          </Container>
        </MainContainer>
      </Suspense>
    </>
  );
}
