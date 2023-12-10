// import rightColumn from '../assets/RightColumn.png'
// import logo from '../assets/logo.png'

// function Login() {
//     return (
//         <div className=' p-3'>
//             <div className=' w-[1280px] h-[832px] border flex  '>
//                 <div className=' w-[549px] border bg-white'>
//                     <div className='w-[421px] mx-auto flex flex-col gap-8'>
//                         <img className='w-[170px] h-[44px]' src={logo} />
//                         <div className='flex flex-col gap-3'>
//                             <h1 className='text-[64px] font-semibold leading-none'>Welcome back</h1>
//                             <p>You need to be signed in to access the project dashboard.</p>
//                             <div>
//                                 <label className="block ">Email Address</label>
//                                 <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-sm   border-2 focus:border-blue-500 focus:bg-white focus:outline-none" required />
//                             </div>

//                             <div className="mt-4">
//                                 <label className="block ">Password</label>
//                                 <input type="password" name="" id="" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-sm border-2 focus:border-blue-500 focus:bg-white focus:outline-none" required />
//                             </div>

//                             <div className="flex flex-row justify-between mb-8">
//                                 <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
//                                     <input type="checkbox" checked value="" className="sr-only peer" />
//                                     <div
//                                         className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer peer-checked:border-0 peer-checked:bg-purple-blue-500">
//                                         <img className="" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png" alt="tick" />
//                                     </div>
//                                     <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
//                                 </label>
//                                 <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
//                             </div>

//                             <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
//                             <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
//                                 <div className="flex items-center justify-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
//                                     <span className="ml-4">
//                                         Log in
//                                         with
//                                         Google</span>
//                                 </div>
//                             </button>

//                             <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
//                                 account</a></p>
//                         </div>
//                     </div>

//                 </div>
//                 <div className='h-[832px] w-[731px]' style={{
//                     backgroundImage: `url(${rightColumn})`,
//                 }}></div>
//             </div>
//         </div>
//     )
// }

// export default Login

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import rightColumn from '../assets/RightColumn.png';
import logo from '../assets/logo.png';
import { useAuth } from '../AuthContext';
import InputField from '../Components/InputField';
import Button from '../Components/Button';

interface ResponseData {
  token: string;
}

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post<ResponseData>('https://dummyjson.com/auth/login', {
        username: email,
        password: password,
      });

      const token = response.data.token;

      authContext.updateAuthState({
        isAuthenticated: true,
        token: token,
      });

      navigate('/home');
    } catch (error: any) {
      // Check if the error is a network error or if there is a response from the server
      if (axios.isAxiosError(error)) {
        // Axios error (network or server error)
        if (error.response) {
          // Server responded with a status other than 2xx
          console.error('Server responded with an error:', (error as AxiosError).response?.data);
        } else if (error.request) {
          // No response received
          console.error('No response received from the server.');
        } else {
          // Something went wrong while setting up the request
          console.error('Error setting up the request:', error.message);
        }
      } else {
        // Non-Axios error
        console.error('An unexpected error occurred:', error.message);
      }
    }
  };


  return (
    <div className=''>
      <div className='w-[100%] h-[100%] border  flex'>
        <div className='w-[42%] h-] border bg-white'>
          <div className=' mx-auto flex flex-col px-24 py-7'>
            <img className='w-32 h-8 mb-6' src={logo} alt='Logo' />
            <div className='flex flex-col '>
              <h1 className='text-[54px] font-semibold leading-none'>Welcome back</h1>
              <p className='opacity-70 mb-2'>You need to be signed in to access the project dashboard.</p>

              <div className='my-4 space-y-2'>
                <InputField label="Email or Username" type="email" value={email} onChange={setEmail} />
                <InputField label="Password" type="password" value={password} onChange={setPassword} />
              </div>


              <div className="flex flex-row justify-between my-1">
                <label className="relative inline-flex gap-2 items-center mr cursor-pointer select-none">
                  <input type="checkbox" value="" className="h-4 w-4" />

                  <span className=" text-sm font-normal text-grey-900">Keep me logged in</span>
                </label>
                <a href="javascript:void(0)" className=" text-sm font-semibold underline text-purple-blue-500">Forget password?</a>
              </div>

              <div className='my-4 space-y-2'>
                <Button
                  onClick={handleLogin}
                >
                  Sign In
                </Button>

                <Button
                  variant='secondary'
                  onClick={() => { }}
                >
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>

                    <span className="ml-4">
                      Sign in with Google
                    </span>
                  </div>
                </Button>
              </div>

              <p className="mt-2 text-center">Haven't join yet? <a href="#" className="underline font-semibold">Sign in</a></p>            </div>
          </div>
        </div>
        <img className='h-[100vh] w-[58%] objec' src={rightColumn} alt="Description" />
      </div>
    </div>
  );
}

export default Login;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios, { AxiosError } from 'axios';
// import rightColumn from '../assets/RightColumn.png';
// import logo from '../assets/logo.png';
// import { useAuth } from '../AuthContext';
// import InputField from '../Components/InputField';
// import Button from '../Components/Button';

// interface ResponseData {
//   token: string;
// }

// function Login(): JSX.Element {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const authContext = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (): Promise<void> => {
//     try {
//       const response = await axios.post<ResponseData>('https://dummyjson.com/auth/login', {
//         username: email,
//         password: password,
//       });
//       const token = response.data.token;
//       authContext.updateAuthState({
//         isAuthenticated: true,
//         token: token,
//       });
//       navigate('/home');
//     } catch (error: any) {
//       if (axios.isAxiosError(error)) {
//         if (error.response) {
//           console.error('Server responded with an error:', (error as AxiosError).response?.data);
//         } else if (error.request) {
//           console.error('No response received from the server.');
//         } else {
//           console.error('Error setting up the request:', error.message);
//         }
//       } else {
//         console.error('An unexpected error occurred:', error.message);
//       }
//     }
//   };

//   return (
//     // <div className=''>
//     //   <div className='w-[100%] h-[100%] border  flex'>
//     //     <div className='w-[42%] border bg-white'>
//     //       <div className=' mx-auto flex flex-col py-7 px-24'>
//     //         <img className='w-32 h-8 mb-8' src={logo} alt='Logo' />
//     //         <form className='flex flex-col'>
//     //           <h1 className='text-[52px] font-semibold leading-none'>Welcome back</h1>
//     //           <p className='opacity-70 text-sm'>You need to be signed in to access the project dashboard.</p>

//     //           <div className='my-4 space-y-2'>
//     //             <InputField label="Email or Username" type="email" value={email} onChange={setEmail} />
//     //             <InputField label="Password" type="password" value={password} onChange={setPassword} />
//     //           </div>

//     //           <div className="flex flex-row justify-between mb-1">
//     //             <label className="relative inline-flex gap-2 items-center cursor-pointer select-none">
//     //               <input type="checkbox" value="" className="h-4 w-4" />

//     //               <span className=" text-xs font-normal text-grey-900">Keep me logged in</span>
//     //             </label>
//     //             <a href="javascript:void(0)" className=" text-xs font-semibold underline text-purple-blue-500">Forget password?</a>
//     //           </div>
//     //           <div className='my-3 space-y-2'>
//     //             <Button
//     //               onClick={handleLogin}
//     //               type='submit'
//     //             >
//     //               Sign In
//     //             </Button>

//     //             <Button
//     //               onClick={() => { }}
//     //               variant="secondary"
//     //             >
//     //               <div className="flex items-center justify-center">
//     //                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>

//     //                 <span className="ml-4">
//     //                   Sign in with Google
//     //                 </span>
//     //               </div>
//     //             </Button>
//     //           </div>
//     //           <p className="mt-2 text-center text-sm">Haven't join yet? <a href="#" className="underline font-semibold">Sign in</a></p>            </form>
//     //       </div>
//     //     </div>
//     //     <img className='h-[100vh] w-[58%] objec' src={rightColumn} alt="Description" />

//     //   </div>
//     // </div>
//     <div className=''>
//       <div className='w-full h-screen border flex flex-col lg:flex-row'>
//         {/* Left Column */}
//         <div className='lg:w-[42%] border bg-white'>
//           <div className='mx-auto flex flex-col py-7 px-4 lg:px-24'>
//             <img className='w-32 h-8 mb-8' src={logo} alt='Logo' />
//             <form className='flex flex-col'>
//               <h1 className='text-[52px] font-semibold leading-none'>Welcome back</h1>
//               <p className='opacity-70 text-sm'>You need to be signed in to access the project dashboard.</p>

//               <div className='my-4 space-y-2'>
//                 <InputField label="Email or Username" type="email" value={email} onChange={setEmail} />
//                 <InputField label="Password" type="password" value={password} onChange={setPassword} />
//               </div>

//               <div className="flex flex-row justify-between mb-1">
//                 <label className="relative inline-flex gap-2 items-center cursor-pointer select-none">
//                   <input type="checkbox" value="" className="h-4 w-4" />
//                   <span className="text-xs font-normal text-gray-900">Keep me logged in</span>
//                 </label>
//                 <a href="javascript:void(0)" className="text-xs font-semibold underline text-purple-blue-500">Forgot password?</a>
//               </div>

//               <div className='my-3 space-y-2'>
//                 <Button onClick={handleLogin} type='submit'>
//                   Sign In
//                 </Button>

//                 <Button onClick={() => { }} variant="secondary">
//                   <div className="flex items-center justify-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible" /></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
//                     <span className="ml-4">Sign in with Google</span>
//                   </div>
//                 </Button>
//               </div>

//               <p className="mt-2 text-center text-sm">Haven't joined yet? <a href="#" className="underline font-semibold">Sign up</a></p>
//             </form>
//           </div>
//         </div>

//         {/* Right Column */}
//         <img className='lg:h-screen lg:w-[58%] object-cover hidden lg:block' src={rightColumn} alt="Description" />
//       </div>
//     </div>

//   );
// }

// export default Login;
