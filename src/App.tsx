import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './AuthContext';

const LazyLogin = lazy(() => import('./Pages/Login'));
const LazyHeader = lazy(() => import('./Components/Header'));

function App() {
  const authContext = useAuth();
  console.log(authContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLogin />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            {authContext.isAuthenticated ? <LazyHeader /> : <Navigate to="/login" replace={true} />}
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
