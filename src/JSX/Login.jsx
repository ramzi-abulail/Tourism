import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Login.css';
import axios from 'axios';

const backgroundImageUrl = 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80&w=1774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const loginStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        alert('Login successful!');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="h-screen flex items-center" style={loginStyle}>
      <div className="container mx-80 p-4 formlogin bg-white bg-opacity-50 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Login</h1>

        <form onSubmit={handleLogin} className="md:w-1/2 lg:w-1/3 mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 fig" htmlFor="email">
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
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline btnlog"
            type="submit" onSubmit={handleLogin}
          >
            Login
          </button>
          <p className="text-red-600 mt-2">{error}</p>
          <Link to="/sing" className="block text-gray-700 text-sm font-bold mt-2">
            Don't have an account?<p className='rem'>Sign up</p> 
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;