import logo from './logo.svg';
import './App.css';
import Advertisement from './component/Advertisement';
import Search from './component/Search';
import Filter from './component/Filter';
import FilterProfile from './component/Profile';
import ProfileBlock from './component/ProfileBlock';
import SideAdvR from './component/SideAdvR';
import SideAdvL from './component/SideAdvL';
// import Navbar from './component/navbar';
const axios = require('axios').default;
function App() {

const ApiReqProfile= axios.get(`/api/v1/TeamList`)
console.log(ApiReqProfile)
console.log("hi")
  const ProfileElem = ProfileBlock.map(({name,title,skill,about,location})=>{
    return(
      <a href='./viewProfile.html'>
      <FilterProfile
      name = {name}
      title = {title}
      skill = {skill}
      about = {about}
      location = {location}
      />
      </a>
    )
  })
  const filterList = 
  console.log(Filter)
  return (
    <div>
      {/* <Navbar/> */}
      <Advertisement />
      <Search />
      <div className="  flex gap-2 px-2 pb-3 w-full flex-wrap justify-center md:gap-5 lg:gap-8 xl:gap-12">
      <Filter
      skills ="Skill"
      />
      <Filter
      skills ="Location"
      />
      <Filter
      skills ="Title"
      />
      <Filter
      skills ="College"
      />
      <Filter
      skills ="Name"
      />
      </div>
      <div className='flex flex-col items-center align-middle gap-4  w-full sm:grid sm:grid-cols-2 sm:px-8 md:grid-cols-3 lg:px-12 lg:grid-cols-3 xl:grid-cols-4 '>
      {ProfileElem}
      {ProfileElem}
      {ProfileElem}
      {ProfileElem}
      {ProfileElem}
      </div>
      <SideAdvR 
      Position = "30vh"
      HackName = "HackRain"
      SDate = "25-June-2025"
      EDate = "25-June-2025"
      Location= "Bhopal"
      HLink= "ak123123"

      />
      <SideAdvL 
      Position = "60vh"
      HackName = "HackRain"
      SDate = "25-June-2025"
      EDate = "25-June-2025"
      Location= "Bhopal"
      HLink= "www.google.com"

      />
    </div>
    
  );
}

export default App;
