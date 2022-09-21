import React from "react";
import { ProfileCard } from "./";

const Profiles = ({Profiles}) => {
  return Profiles.map(({ userName, designation, skill, about, location }) => (

    <a href="./viewProfile.html">
      <ProfileCard
        userName={userName}
        designation={designation}
        skill={skill}
        about={about}
        location={location}
      />
    </a>
  ));
};

export default Profiles;
