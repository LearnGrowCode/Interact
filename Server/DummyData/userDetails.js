require("dotenv").config("../");
const connectDB = require("../db/connect");
const userData = require("../models/userDetails");
const userProfileData = [
  {
    userName: "Akshay Kalekar",
    location: "GGN, India ",
    about:
      "I like to watch anime in my free time and love to read books related to real-world perspectives and personal growth. Right now, reading 'The Psychology of money' by Morgan Housel.",
    skill: ["React JS", "Figma", "Node JS,Express JS"],
    designation: "Frontend DEVELOPER",
    college: "VIT",
    year: "2",
    theme: "Open Innovation",
    linkedin: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
    discord: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
    github: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
  },
  {
    userName: "Udita Vishnoi",
    location: "Bengal, India ",
    about:
      "This is Udita Vishnoi a CS student and a web developer who used to get intrigued looking at stunning websites until now that I can develop them.",
    skill: ["Html", "Bootstrap", "JavaScript", "C++"],
    designation: "Full Sstack Developer",
    college: "VIT",
    year: "2",
    theme: "AI ML",
    linkedin: "https://www.linkedin.com/in/udita-vishnoi/",
    discord: "https://www.linkedin.com/in/udita-vishnoi//",
    github: "https://www.linkedin.com/in/udita-vishnoi/",
  },
  {
    userName: "Vidushi Pandey",
    location: "Kanpur, India ",
    about:
      "I like to watch anime in my free time and love to read books related to real-world perspectives and personal growth. Right now, reading 'The Psychology of money' by Morgan Housel.",
    skill: ["JAVA","React JS","MONGO DB"],
    designation: "Backend Developer",
    college: "VIT",
    year: "2",
    theme: "Open Innovation",
    linkedin: "https://www.linkedin.com/in/vidushi-pandey-964a51221/",
    discord: "https://www.linkedin.com/in/vidushi-pandey-964a51221//",
    github: "https://www.linkedin.com/in/vidushi-pandey-964a51221/",
  },
  {
    userName: "Arnav Tiwari",
    location: "Noida, India ",
    about:
      "I like to watch anime in my free time and love to read books related to real-world perspectives and personal growth. Right now, reading 'The Psychology of money' by Morgan Housel.",
    skill: ["Bootstrap","CSS","MongoDB"],
    designation: "FULL STACK DEVELOPER",
    college: "VIT",
    year: "2",
    theme: "Health",
    linkedin: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
    discord: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
    github: "https://www.linkedin.com/in/akshay-ajay-kalekar/",
  },
  {
    userName: "Jerry Thomas",
    location: "420,Jodhpur, India ",
    about:
      "A Final Year Undergrad Student of Computer Science at Symbiosis Institute of Technology Aspiring to work as a Blockchain Developer",
    skill: ["Solidity", "Blockchain", "NExpress JS"],
    designation: "Blockchain Developer",
    college: "VIT",
    year: "2",
    theme: "Open Innovation",
    linkedin: "https://www.linkedin.com/in/hitanshu-samantaray/",
    discord: "https://www.linkedin.com/in/hitanshu-samantaray/",
    github: "https://www.linkedin.com/in/hitanshu-samantaray/",
  },
];

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://aksh:1234@nodeexpressproject.hhaxhly.mongodb.net/?retryWrites=true&w=majority"
    );
    await userData.insertMany(userProfileData, (error, docs) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
