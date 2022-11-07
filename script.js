const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6854cc0164msh4159ccf5c0a0be8p1bb164jsn502b1f78a7a7",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let container = document.querySelector(".row");
const songListButton = document.getElementById("song-list");
let arrOfSongs = [];

const countUniqueButton = document.querySelector("#count-unique");
let uniqueSongsArr = [];

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      if (!arrOfSongs.includes(response.data[i].title_short))
        arrOfSongs.push(response.data[i].title_short);
      if (!uniqueSongsArr.includes(response.data[i].album.title))
        uniqueSongsArr.push(response.data[i].album.title);
      container.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
        <div class="card">
          <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-text text-center">${response.data[i].title_short}</h5>
          </div>
        </div>
       </div>
       `;
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
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      if (!arrOfSongs.includes(response.data[i].title_short))
        arrOfSongs.push(response.data[i].title_short);
      if (!uniqueSongsArr.includes(response.data[i].album.title))
        uniqueSongsArr.push(response.data[i].album.title);
      secondContainer.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
      <div class="card">
        <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${response.data[i].title_short}</h5>
        </div>
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
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      if (!arrOfSongs.includes(response.data[i].title_short))
        arrOfSongs.push(response.data[i].title_short);
      if (!uniqueSongsArr.includes(response.data[i].album.title))
        uniqueSongsArr.push(response.data[i].album.title);
      thirdContainer.innerHTML += `
      <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-auto mb-3">
      <div class="card"> 
        <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-text text-center">${response.data[i].title_short}</h5>
        </div>
      </div>
      </div>`;
    }
  })
  .catch((err) => console.error(err));

const modalContent = document.querySelector(".modal-body ol");

const modal = document.getElementById("song-list");

modal.addEventListener("click", () => {
  modalContent.innerHTML = "";
  for (let i = 0; i < arrOfSongs.length; i++) {
    let currentSong = arrOfSongs[i];
    if (arrOfIndexes[i] != "") {
      let counter = arrOfIndexes[i];
      modalContent.innerHTML += `<li>${currentSong}</li>`;
    } else modalContent.innerHTML += `<li>${currentSong}</li>`;
  }
});

countUniqueButton.addEventListener("click", () => {
  console.log(`There are ${uniqueSongsArr.length} unique albums.`);
});
