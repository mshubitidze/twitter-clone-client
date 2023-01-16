import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Tweet from "../Tweet/Tweet";

const TimelineTweet = () => {
  const [timeline, setTimeline] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineTweet = await axios.get(`/tweets/timeline/${currentUser._id}`);
        setTimeline(timelineTweet.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser._id]);

  return (
    <div className="mt-6">
      {timeline &&
        timeline.map((tweet) => (
          <div key={tweet._id} className="p-2">
            <Tweet tweet={tweet} setData={setTimeline} />
          </div>
        ))}
    </div>
  );
};

export default TimelineTweet;
