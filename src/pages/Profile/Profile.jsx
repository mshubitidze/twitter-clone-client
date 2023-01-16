import React, { useEffect, useState } from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Tweet from "../../components/Tweet/Tweet";
import EditProfile from "../../components/EditProfile/EditProfile";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { following } from "../../redux/userSlice";
import axios from "axios";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [userTweets, setUserTweets] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userTweets = await axios.get(`/tweets/user/all/${id}`);
        const userProfile = await axios.get(`/users/find/${id}`);

        setUserTweets(userTweets.data);
        setUserProfile(userProfile.data);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, [id, currentUser]);

  const handleFollow = async () => {
    // const followOrUnfollow = !currentUser.following.includes(id) ? "follow" : "unfollow" // works
    if (!currentUser.following.includes(id)) {
      try {
        const follow = await axios.put(`/users/follow/${id}`, {
          id: currentUser._id,
        });
        dispatch(following(id));
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const unfollow = await axios.put(`/users/unfollow/${id}`, {
          id: currentUser._id,
        });
        dispatch(following(id))
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="px-6">
          <LeftSidebar />
        </div>
        <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
          <div className="flex justify-between items-center">
            <img
              src={
                userProfile?.profilePicture ??
                "https://firebasestorage.googleapis.com/v0/b/twitter-clone-9a059.appspot.com/o/default.png?alt=media&token=f0d33d24-dcf6-4588-825d-ec719988bb06"
              }
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            {currentUser._id === id ? (
              <button
                onClick={() => setOpen(true)}
                className="px-4 -y-2 bg-blue-500 rounded-full text-white"
              >
                Edit Profile
              </button>
            ) : currentUser.following.includes(id) ? (
              <button
                onClick={handleFollow}
                className="px-4 -y-2 bg-blue-500 rounded-full text-white"
              >
                Following
              </button>
            ) : (
              <button
                onClick={handleFollow}
                className="px-4 -y-2 bg-blue-500 rounded-full text-white"
              >
                Follow
              </button>
            )}
          </div>
          <div className="mt-6">
            {userTweets &&
              userTweets.map((tweet) => (
                <div key={tweet._id} className="p-2">
                  <Tweet tweet={tweet} setData={setUserTweets} />
                </div>
              ))}
          </div>
        </div>
        <div className="px-6">
          <RightSidebar />
        </div>
      </div>
      {open && <EditProfile setOpen={setOpen} />}
    </>
  );
};

export default Profile;
