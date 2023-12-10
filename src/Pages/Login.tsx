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

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleLogin = async (): Promise<void> => {

    try {
      const response = await axios.post<ResponseData>('https://dummyjson.com/auth/login', {
        username: email,
        password: password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token)
      authContext.updateAuthState({
        isAuthenticated: true,
        token: token,
      });

      navigate('/home');
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error('Server responded with an error:', (error as AxiosError).response?.data);
        } else if (error.request) {
          console.error('No response received from the server.');
        } else {
          console.error('Error setting up the request:', error.message);
        }
      } else {
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

              <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className='my-4 space-y-2'>
                  <InputField label="Email or Username" type="string" value={email} onChange={setEmail} error={!email ? "required" : null} />
                  <InputField label="Password" type="password" value={password} onChange={setPassword} error={!password ? "required" : null} />
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
                    disabled={!email || !password}
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

              </form>

              <p className="mt-2 text-center">Haven't join yet? <a href="#" className="underline font-semibold">Sign in</a></p>            </div>
          </div>
        </div>
        {/* <img className='h-[100vh] w-[58%] objec' src={rightColumn} alt="Description" /> */}
        <div className='relative h-[100vh] w-[58%]'>
          {!imageLoaded && (
            <div className="animate-pulse bg-gray-300 w-full h-full"></div>
          )}

          <img
            className={`object-cover w-full h-full ${imageLoaded ? 'visible' : 'invisible'}`}
            src={rightColumn}
            alt="Description"
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;