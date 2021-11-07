import { /*lazy,*/ Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
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

export default function App() {
  return (
    <>
      <NavBar />

      <Suspense fallback={<div>loading</div>}>
        <MainContainer>
          <Container>
            <Switch>
              <PublicRoute path="/" exact>
                <Redirect to="/signup" />
              </PublicRoute>

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
