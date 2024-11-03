
import {getMovies,addMovies} from './requests.js';
const sectionAddMovie = document.querySelector("#add-movie");
const movieExample = document.querySelector("#movie-example");
const editMovieSection = document.querySelector("#edit-movie");
const sectionLogin = document.querySelector("#form-login");
const sectionSighUp = document.querySelector("#form-sign-up");

const sectionHomePage = document.querySelector("#home-page");
const addMovieBtn = document.querySelector('.btn-warning');
addMovieBtn.href = '/';

getMovies();

addMovieBtn.addEventListener('click',addMovie);

setHrefOfAnchors()

const navigation = {
  "/": () => {
    console.log("HomePage");
  },
  "/login": () => {
    console.log("Login");
  },
  "/register": () => {
    console.log("Register");
  },
  "/logout": () => {
    console.log("logout");
  },
};



function hideSections() {
  sectionAddMovie.style.display = "none";
  movieExample.style.display = "none";
  editMovieSection.style.display = "none";
  sectionLogin.style.display = "none";
  sectionSighUp.style.display = "none";
}

hideSections();

function setHrefOfAnchors() {
  const navAnchors = document.querySelectorAll('.nav-link[href="#"]');
  const aWelcome = document.querySelector('#welcome-msg');

  aWelcome.href = '/';
  
  navAnchors.forEach((a) => {
    a.href = "/" + a.textContent.toLowerCase();
  });


}


function addMovie(e){
  e.preventDefault();
  const buttonAdd = e.target;
  buttonAdd.href = '/';

  sectionAddMovie.style.display = 'block';
  const form = sectionAddMovie.querySelector('form');
  sectionHomePage.style.display = 'none';

  form.addEventListener('submit',addMovies);
}
