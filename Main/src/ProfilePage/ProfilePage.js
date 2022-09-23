import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

  const [profile, setProfile] = useState({
    userName:"Hero",
    location:"Comedy"
  })
  console.log()
  let {id} = useParams()
  useEffect(() => {
    async function getUserData() {
      const UserData = await fetch(`http://localhost:5000/profiles/${id}`);
      console.log('USerDAta',UserData)
      if (!UserData.ok) {
        const message = `An error occured: ${UserData.status.Text}`;
        window.alert(message);
        return;
      }

      const UsersData = await UserData.json();
      setProfile(UsersData)
      console.log("profile",profile)
    }
    getUserData();
    console.log("profile data is",profile)
    return;
  },[]);
  return (
    <div>ProfilePage
    {profile.userName}
    {profile.location}
    
    
    </div>
    
  )
}

export default ProfilePage