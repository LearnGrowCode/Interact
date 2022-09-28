import axios from "axios";

export const BASE_URL = 'https://initials-avatar.p.rapidapi.com/';
const options = {
  method: 'GET',

//   params: {
//     name: 'john doe',
//     rounded: 'true',
//     uppercase: 'true',
//     'font-size': '0.5',
//     length: '2',
//     size: '128',
//     background: '000000',
//     color: 'ffffff'
//   },
  headers: {
    'X-RapidAPI-Key': '483f6a8bf9msh9838a63838bb0dbp19c7c2jsn89d8763c8209',
    'X-RapidAPI-Host': 'initials-avatar.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });