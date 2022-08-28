// fetch("127.0.0.1:8000/")
//   .then((res) => {
//     return res.json();
//   })
//   .then((result) => console.log(result));

// import fetch from "node-fetch";
// const fetch = require("node-fetch");

// let fetch = require("cross-fetch");

// fetch(`http://127.0.0.1:8000/`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "shiva" }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// import fetch from "node-fetch";

// const fetch = require("node-fetch");
// const fetch = require("node-fetch");

// fetch("http://127.0.0.1:3000/")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// import fetch from "node-fetch";

// const fetch = require("node-fetch");

// const fetchData = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it

//   const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

//   console.log(country); // Columbia's data will be logged to the dev console
// };

// fetchData();

const getData = () => {
  fetch(`http://127.0.0.1:3000/`).then((res) => console.log(res));
};
getData();
