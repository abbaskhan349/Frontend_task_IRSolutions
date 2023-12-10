// // HomePage.tsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// const HomePage: React.FC = () => {
//   const authContext = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Perform logout logic, clear token, etc.
//     authContext.updateAuthState({
//       isAuthenticated: false,
//       token: null,
//     });

//     // Redirect to the login page
//     navigate('/login');
//   };

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-semibold mb-4">Welcome to the Home Page!</h1>
//       <p>This is a basic home page. Customize it based on your project requirements.</p>
      
//       {/* Logout button */}
//       <button
//         onClick={handleLogout}
//         className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default HomePage;


// HomePage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const HomePage: React.FC = () => {
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, clear token, etc.
    authContext.updateAuthState({
      isAuthenticated: false,
      token: null,
    });

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">Welcome to the Home Page!</h1>
        <p className="text-gray-600 mb-6">This is a modern and stylish home page. Impress the recruiters with your skills!</p>
        
        {/* Placeholder content, replace it with your actual content */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Featured Content</h2>
          <p className="text-gray-600">Some exciting content goes here...</p>
        </div>
        
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
