import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import camera from "./assets/images/camera.png";
import discord from "./assets/images/discord.png";
import github from "./assets/images/github.png";
import linkdn from "./assets/images/linkdn.png";
import  './assets/page2.css'
import  './assets/style.css'
import './assets/index'

const CreateProfile = () => {
  const navigate=  useNavigate()
  const [user, setUser] = useState({
    userName: "",
    designation: "",
    about: "",
    location: "",
    skill: "",
    year: "",
    college: "",
    theme: "",
    github:"",
    discord:"",
    linkedin:""

  });
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleChange1 = (e) => {
    name = e.target.name;
    var skill  = e.target.value;
    value = skill.split(/,/);
    console.log(value)
    setUser({ ...user, [name]: value });
  };
  const PostTData = async (e) => {
    e.preventDefault();
    const {
      userName,
      designation,
      about,
      location,
      skill,
      year,
      college,
      theme,
      github,
      linkedin,
      discord
    } = user;

    const UserDatas = await fetch("http://localhost:5000/profiles/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        designation,
        about,
        location,
        skill,
        year,
        college,
        theme,
        github,
        linkedin,
        discord
      }),
    });
    const UserDetail = await UserDatas.json();
    const {UserData} = UserDetail
    navigate(`/profile/${UserData._id}`)

  };
  return (
    <div className="flex justify-center align-middle p-4">
      <div className="w-[80%]">
        <section className="profile_pic p-2">
          <div className="profileImage">
            <div className="profile_circle">
              <img src={camera} className="img-fluid camera" alt="" />
            </div>
          </div>
          <div className="form_area">
            <div className="mb-5">
              <label for="userName" className="form-label ">
                Name
              </label>
              <input
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleChange}
                className="form-control input_area"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-5">
              <label for="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="form-control input_area"
                id="exampleFormControlInput1"
                placeholder="Enter your Location"
              />
            </div>
            <div className="mb-5">
              <label for="about" className="form-label">
                About
              </label>
              <textarea
                type="text"
                name="about"
                value={user.about}
                onChange={handleChange}
                className="form-control input_area"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Few words about yourself"
              ></textarea>
            </div>
            <div className="container">
              <label for="skill" className="form-label">
                Skills
              </label>
              <input
            value={user.skill}
            name = "skill"
            onChange={handleChange1}
              className="form-control input_area"
              placeholder="Type your skill..."
            />

            </div>
            <label for="designation" className="form-label">
              What Describes you best?
            </label>
            <input
            value={user.designation}
            onChange={handleChange}
              className="form-control input_area"
              maxlength="20"
              name="designation"
              placeholder="What you call yourself?."
            />
            <div className="row g-2">
              <div className="col-md">
                <label for="college" className="form-label">
                  College
                </label>
                <div className="form-floating">
                  <input
                    className="form-control  input_area"
                    name="college"
                    value={user.college}
                onChange={handleChange}
                    id="floatingInputGrid"
                    placeholder="Your College"
                  />
                </div>
              </div>
              <div className="col-md">
                <label for="year" className="form-label">
                  College Year
                </label>
                <div className="form-floating">
                  <select
                    name="year"
                    value={user.year}
                onChange={handleChange}
                    className="form-select input_area"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                  >
                    <option selected>
                      <span className="select_color">Select Year</span>
                    </option>
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="2">Fourth</option>
                    <option value="3">Fifth</option>
                  </select>
                </div>
              </div>
            </div>
            <label for="exampleFormControlInput1" className="form-label">
              Preferred Theme
            </label>
            <div className="form-floating ">
              <select
                className="form-select input_area"
                name="theme"
                value={user.theme}
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option selected>
                  <span className="select_color">Theme</span>
                </option>
                <option value="Health">Health</option>
                <option value="AI">AI</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Open Innovation">Open Innovation</option>
              </select>
            </div>
            <div className="row g-4 align-items-center mb-5">
              <label for="exampleFormControlInput1" className="form-label">
                Social Links
              </label>

              <div className="row">
                <div className="col-2 picture_image">
                  <img src={github} className="logo_Pic" alt="" />
                </div>
                <div className="col-11">
                  <input
                    type="url"
                    name="github"
                    onChange={handleChange}
                    value={user.linkdn}
                    className="form-control input_area"
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2 picture_image">
                  <img src={linkdn} className="logo_Pic1" alt="" />
                </div>
                <div className="col-11">
                  <input
                    name="linkedin"
                    value={user.linkedin}
                onChange={handleChange}
                    type="url"
                    className="form-control input_area"
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-2 picture_image">
                  <img src={discord} className="logo_Pic" alt="" />
                </div>
                <div className="col-11">
                  <input
                  name="discord"
                  onChange={handleChange}
                    type="url"
                    className="form-control input_area"
                    id="exampleFormControlInput1"
                  />
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto ">
              <button className="btn btn-light submit" type="button" onClick={PostTData}>
                SUBMIT
              </button>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default CreateProfile;
