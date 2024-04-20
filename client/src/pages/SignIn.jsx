import React, { useState, useDispatch, useSelector } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'; // Assuming a Redux slice

function SignIn() {
  const [formData, setFormData] = useState({}); // State for form data
  const { loading, error } = useSelector((state) => state.user); // Access loading and error states from Redux store

  const dispatch = useDispatch(); // Function to dispatch Redux actions
  const navigate = useNavigate(); // Function for programmatic navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value }); // Update form data on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart()); // Dispatch sign-in start action

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data in request body
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data)); // Dispatch sign-in failure action with error data
        return;
      }

      dispatch(signInSuccess(data)); // Dispatch sign-in success action with user data
      navigate('/'); // Navigate to home page after successful sign-in
    } catch (error) {
      dispatch(signInFailure(error)); // Dispatch sign-in failure action with error
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't Have an account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>
    </div>
  );
}

export default SignIn;
