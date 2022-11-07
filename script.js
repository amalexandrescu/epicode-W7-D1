const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6854cc0164msh4159ccf5c0a0be8p1bb164jsn502b1f78a7a7",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let container = document.querySelector(".row");
// console.log(container);

const button = document.querySelector("button");
let uniqueSongsArr = [];

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    // container.innerHTML += `<div class="row"></div>`;
    for (let i = 0; i < response.data.length; i++) {
      console.log(response.data[i].title_short);
      // console.log(response.data[i].album.cover);
      container.innerHTML += `
      <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
        <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${response.data[i].title_short}</h5>
        </div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6854cc0164msh4159ccf5c0a0be8p1bb164jsn502b1f78a7a7",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let secondContainer = document.querySelector("body > div:nth-child(2) .row");

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options2)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      secondContainer.innerHTML += `
      <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
        <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${response.data[i].title_short}</h5>
        </div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));

const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6854cc0164msh4159ccf5c0a0be8p1bb164jsn502b1f78a7a7",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let thirdContainer = document.querySelector("body > div:nth-child(3) .row");

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options3)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      thirdContainer.innerHTML += `
      <div class="card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
        <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${response.data[i].title_short}</h5>
        </div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));
