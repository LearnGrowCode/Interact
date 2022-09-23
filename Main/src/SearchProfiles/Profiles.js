import React from "react";
import { Link } from "react-router-dom";
import { ProfileCard } from "./";

const Profiles = ({Profiles}) => {
  return Profiles.map(({_id, userName, designation, skill, about, location }) => (

    <Link to={`/profile/${_id}`}>
      <ProfileCard
        userName={userName}
        designation={designation}
        skill={skill}
        about={about}
        location={location}
      />
    </Link>
  ));
};

export default Profiles;
