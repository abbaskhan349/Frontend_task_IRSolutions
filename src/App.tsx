// // import {
// //   Route,
// //   Routes,
// // } from 'react-router-dom';

// // import './App.css';
// // import Login from './Pages/Login';
// // import { Header } from './Components/Header';

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Login />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/home" element={<Header />} />
// //     </Routes>
// //   );
// // }

// // export default App;


// import { Route, Routes, Navigate } from 'react-router-dom';
// import './App.css';
// import Login from './Pages/Login';
// import { Header } from './Components/Header';
// import { useAuth } from './AuthContext';

// function App() {
//   const authContext = useAuth();
//   console.log(authContext)

//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/login" element={<Login />} />
//       <Route
//         path="/home"
//         element={authContext.isAuthenticated ? <Header /> : <Navigate to="/login" replace={true} />}
//       />
//     </Routes>
//   );
// }

// export default App;


import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useAuth } from './AuthContext';

// Use React.lazy to lazily load the Login and Header components
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
