import React from 'react'
import camera from './assets/images/camera.png'
import discord from './assets/images/discord.png'
import github from './assets/images/github.png'
import linkdn from './assets/images/linkdn.png'
import p1 from './assets/images/p1.jpg'
import p2 from './assets/images/p2.jpg'
import p3 from './assets/images/p3.jpg'
import p4 from './assets/images/p4.jpg'
import p5 from './assets/images/p5.jpg'
import p6 from './assets/images/p6.png'


const ProfileCard = (profile) => {
    const {profileData} = profile
  return (
    
    <section className="profile_pic">
    <div className='profileImage'>
    <div className="profile_circle">
    <img src={camera} className="img-fluid camera" alt=""/>
    </div>
</div>
<div className="profile_name ">
  <h3>{ profileData.userName}</h3>
  <h4>{ profileData.designation }</h4>
</div>
<div className="container pics">
  <div className="row row-cols-3 row-cols-sm-6  g-sm-2">
    <div className="col">
      <div className="p-2">
<img className="img-fluid fotu" src={discord} alt=""/>
      </div>
    </div>
    <div className="col ">
      <div className="p-2">
      <img className="img-fluid fotu" src={github} alt=""/></div>
    </div>
    <div className="col">
      <div className="p-2">
      <img className="img-fluid fotu" src={linkdn} alt=""/>
    </div>
    </div>
  </div>
</div>
<div className="d-grid col-4 mx-auto ">
  <button className="btn btn-lg btn-light submit" type="button">Message</button>
</div>

<div >
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">About</label>
  <textarea type="text" className="form-control input_area" id="exampleFormControlTextarea1"value={profileData.about} disabled>
   </textarea>
</div>
</div>
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">Skill</label>
  <div className="row  row-cols-lg-6 g-3 g-lg-4">
      <div className="col">
        <div className="p-3 skill">HTML</div>
      </div>
      <div className="col">
        <div className="p-3 skill">CSS</div>
      </div>
      <div className="col  col-md-3">
        <div className="p-3 skill">Flutter</div>
      </div>
      <div className="col  col-md-3">
        <div className="p-3 skill">Firebase</div>
      </div>
      <div className="col">
        <div className="p-3 skill">React</div>
      </div>
      <div className="col col-md-4">
        <div className="p-3 skill ">NodeJs</div>
      </div>
      <div className="col">
        <div className="p-3 skill">JAVA</div>
      </div>
      <div className="col  col-sm-4  ">
        <div className="skill p-3 ">MongoDB</div>
      </div>
      <div className="col col-md-5 ">
        <div className="p-3 skill">Full Stack Development</div>
      </div>
      <div className="col col-md-2 ">
        <div className="p-3 skill">Swift</div>
      </div>
    </div>
</div>
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">Education</label>
<p>{profileData.college} - {profileData.year} Year </p>
</div>
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">Recomendation</label>
  <div className="container">
  <div className="row">
    <div className="col-4">
    Skills
    </div>
    <div className="col-8">
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
      </div>
    </div>
  </div>
    <div className="row">
      <div className="col-4">
      Time-Management
      </div>
      <div className="col-8">
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}></div>
        </div>
      </div>
  </div>
  <div className="row">
    <div className="col-4">
      Team-Work
    </div>
    <div className="col-8">
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
      </div>
    </div>
</div>
<div className="row">
  <div className="col-4">
    Brain-Storming
  </div>
      <div className="col-8">
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}></div>
    </div></div></div>
    <div className="row">
      <div className="col-4">
        Interaction
      </div>
          <div className="col-8">
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: "35%"}}></div>
</div>
    </div>
  </div>
</div>
</div>
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">Theme</label>
  <div className="row  row-cols-lg-2 g-3 g-lg-6">
    <div className="col ">
      <div className="p-3 skill">Artificial Intelligence</div>
    </div><div className="col">

        <div className="p-3 skill">Health</div>
      </div>
      <div className="col">
        <div className="p-3 skill">Agriculture</div>
      </div>

      <div className="col ">
        <div className="p-3 skill">FinTech</div>
      </div>
    </div>
</div>
<div className="mb-5">
  <label for="exampleFormControlTextarea1" className="form-label">Projects</label>
  <div className="container">
    <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
      <div className="col">
<img className=" project" src={p1} alt=""/>
      </div>
      <div className="col">
        <img className=" project" src={p2} alt=""/>
      </div>
      <div className="col">
<img className=" project" src={p3} alt=""/>
      </div>
      <div className="col">
<img className=" project" src={p4} alt=""/>
      </div>
      <div className="col">
<img className=" project" src={p5} alt=""/>
      </div>
      <div className="col">
<img className=" project" src={p6} alt=""/>
      </div>
    </div>
  </div>
  </div>
</section>

  )
}

export default ProfileCard