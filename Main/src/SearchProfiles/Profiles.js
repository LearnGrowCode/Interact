import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "./";

const Profiles = ({Profiles}) => {
  return Profiles.map(({_id, userName, designation, skill, about, location }) => (
    
    <Link to={`/profile/${_id}?imgNum=${(Math.floor(Math.random() * 100))}`}>
      <ProfileCard
        userName={userName}
        designation={designation}
        skill={skill}
        about={about}
        location={location}
        imgNum ={(Math.floor(Math.random() * 100))}
      />
    </Link>
  ));
};

export default Profiles;
