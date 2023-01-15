import React from "react";

const Signin = () => {
  return (
    <form className="bg-gray-200 flex flex-col  py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign In</h2>
      <input type="username" placeholder="username" className="text-xl py-2 rounded-full px-4" />
      <input type="password" placeholder="password" className="text-xl py-2 rounded-full px-4" />
      <button className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white">Sign In</button>
      <p className="text-center text-xl">Don't have an account?</p>
      <input type="username" placeholder="username" className="text-xl py-2 rounded-full px-4" />
      <input type="email" placeholder="email" className="text-xl py-2 rounded-full px-4" />
      <input type="password" placeholder="password" className="text-xl py-2 rounded-full px-4" />
      <button type="submit" className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white">Sign Up</button>
    </form>
  );
};

export default Signin;
