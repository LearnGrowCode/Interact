import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProfileCard from './ProfileCard';
const ProfilePage = () => {

  const [profile, setProfile] = useState({
    userName:"Hero",
    location:"Comedy",
    skill:["Html","CSS"]
  })
  console.log()
  let {id} = useParams()
  useEffect(() => {
    async function getUserData() {
      const UserData = await fetch(`http://localhost:5000/profiles/${id}`);
      console.log('USerDAta is',UserData)
      if (!UserData.ok) {
        const message = `An error occured: ${UserData.status.Text}`;
        window.alert(message);
        return;
      }

      const UsersData = await UserData.json();
      console.log("UsersData is ",UsersData)
      const {profileData} =  UsersData
      setProfile(UsersData)
      console.log("profile value is new Profiles ",profile)
    }
    getUserData();
    console.log("profile data is outer",profile)
    return;
  },[]);
  return (
    <div className='flex justify-center align-middle '>
    <div className='w-[80%]'>
    
    <ProfileCard 
    profileData ={profile}
    />
    </div>
    </div>
    
  )
}

export default ProfilePage