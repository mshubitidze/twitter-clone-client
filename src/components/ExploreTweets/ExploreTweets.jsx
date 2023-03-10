import React, { useEffect, useState } from "react";
import Tweet from "../Tweet/Tweet";
import { useSelector } from "react-redux";
import axios from "axios";

const Explore = () => {
  const [explore, setExplore] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const exploreTweet = await axios.get("/tweets/explore");
        setExplore(exploreTweet.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser._id]);

  return (
    <div className="mt-6">
      {explore &&
        explore.map((tweet) => (
          <div key={tweet._id} className="p-2">
            <Tweet tweet={tweet} setData={setExplore} />
          </div>
        ))}
    </div>
  );
};

export default Explore;
