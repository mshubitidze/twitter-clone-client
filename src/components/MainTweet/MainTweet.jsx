import React from "react";

const MainTweet = () => {
  return (
    <div className="">
      <p className="font-bold pl-2 my-2">Username</p>
      <form action="" className="border-b-2 pb-6">
        <textarea
          typeof="text"
          placeholder="What's happening"
          maxLength={280}
          className="bg-slate-200 rounded-lg w-full p-2"
        ></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto">Tweet</button>
      </form>
      MainTweet
    </div>
  );
};

export default MainTweet;
