import React from "react";
import "./CommunityBox.scss";
import { Post } from "./Post";

//import img
const CommunityBox = ({ activitesGroup }) => {
  console.log("Hiiiiiiii", activitesGroup);
  return (
    <div className="box">
      {activitesGroup.map((activity) => {
        return (
          <Post
            key={activity.activites_id}
            profilePic={activity.user_photo}
            activitesPhoto={activity.sport_photo}
            message={activity.captions}
            timestamp={new Date(activity.date_post).toLocaleString()}
            username={activity.username}
            location={activity.location}
          />
        );
      })}
    </div>
  );
};

export default CommunityBox;
