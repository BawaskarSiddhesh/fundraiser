import React, { useState } from 'react';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="flex rounded-b-lg h-full items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-[28rem]">
        <h2 className="text-3xl font-bold text-center text-[#1882f2]">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h2>
        <form className="mt-8">
          {!isSignIn && (
            <div>
              <label className="block text-gray-700 text-lg">Full Name</label>
              <input 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                value={name} 
                className="w-full p-3 border rounded mt-2 text-lg" 
                placeholder="John Doe" 
              />
            </div>
          )}
          <div className="mt-5">
            <label className="block text-gray-700 text-lg">Email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              value={email} 
              className="w-full p-3 border rounded mt-2 text-lg" 
              placeholder="example@mail.com" 
            />
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 text-lg">Password</label>
            <input 
              type="password" 
              onChange={(e) => setPass(e.target.value)} 
              value={pass} 
              className="w-full p-3 border rounded mt-2 text-lg" 
              placeholder="••••••" 
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-[#1882f2] text-white py-3 rounded-lg hover:bg-[#1668c0] transition text-lg"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-5 text-center text-gray-600 text-lg">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-[#1882f2] font-semibold hover:underline"
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;