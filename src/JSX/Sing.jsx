import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
//import '../CSS/Sing.css'; // Make sure to import your CSS file

const backgroundImageUrl = 'https://images.unsplash.com/photo-1673581209559-fd5f75a08664?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const signupStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Signup() {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/add-user', {
        fullname,
        email,
        password,
      });

      if (response.status === 200) {
        alert('Signup successful!'); // You can replace this with actual navigation.
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError('Email is already taken. Please use a different email.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="h-screen flex items-center" style={signupStyle}>
      <div className=" container mx-80 p-4 formlogin bg-white bg-opacity-50 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Sign up</h1>

        <form onSubmit={handleSignup} className="md:w-1/2 lg:w-1/3 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="Full Name"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btnlog"
            type="submit" onSubmit={handleSignup}
          >
            Sign up
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;