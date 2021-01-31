import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import logo from '../logo.svg';
import MyTextField from '../Components/MyTextField';
import * as yup from 'yup';
const LoginPage = () => {
  const fieldValidationSchema = yup.object({
    username: yup.string().required('Required!'),
    password: yup.string().required('Required!'),
  });
  return (
    <>
      <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full bg-gray-50 p-6 space-y-8'>
          <div>
            <img className='mx-auto h-12 w-auto' src={logo} alt='Workflow' />
            <h2 className='mt-4 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or
              <Link
                to='/registration'
                className='ml-1 font-medium text-indigo-600 hover:text-indigo-500'
              >
                Not registered yet?
              </Link>
            </p>
          </div>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(data) => console.log(data)}
            validationSchema={fieldValidationSchema}
          >
            {({ handleSubmit }) => (
              <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                <input type='hidden' name='remember' value='true' />
                <div className='rounded-md -space-y-px'>
                  <MyTextField
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Email or username'
                  />

                  <MyTextField
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                  />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <input
                      id='remember_me'
                      name='remember_me'
                      type='checkbox'
                      className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                    />
                    <label
                      htmlFor='remember_me'
                      className='ml-2 block text-sm text-gray-900'
                    >
                      Remember me
                    </label>
                  </div>

                  <div className='text-sm'>
                    <Link
                      to='/forgot-password'
                      className='font-medium text-indigo-600 hover:text-indigo-500'
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    {3 === 37 && (
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                    )}
                    <Link to='/h/forum'>
                      {3 == 63 ? 'Signing in...' : 'Sign in'}
                    </Link>
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
