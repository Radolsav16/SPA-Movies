
import {getMovies,addMovies} from './requests.js';
import { userLogin } from './login.js';
import { userRegister } from './register.js';
import { logout } from './logout.js';
import { navigationBar } from './navigationbar.js';


const sectionAddMovie = document.querySelector("#add-movie");
const movieExample = document.querySelector("#movie-example");
const editMovieSection = document.querySelector("#edit-movie");
const sectionLogin = document.querySelector("#form-login");
const sectionSighUp = document.querySelector("#form-sign-up");
const addMovieBtn = document.querySelector('.btn-warning');
const sectionHomePage = document.querySelector('#home-page')

hideSections();



const navigation = {
  '/':home,
  "/login": userLogin,
  "/register": userRegister,
  "/logout":logout,
};

const currentUrl = new URL(location.href);
const pathname = currentUrl.pathname;
navigation[pathname]();


function home(){
hideSections();
navigationBar();
getMovies();
addMovieBtn.addEventListener('click',addMovie);

function addMovie(e){
  e.preventDefault();
  const buttonAdd = e.target;
  buttonAdd.href = '/';

  sectionAddMovie.style.display = 'block';
  const form = sectionAddMovie.querySelector('form');
  sectionHomePage.style.display = 'none';

  form.addEventListener('submit',addMovies);
}


}


function hideSections() {
  sectionAddMovie.style.display = "none";
  movieExample.style.display = "none";
  editMovieSection.style.display = "none";
  sectionLogin.style.display = "none";
  sectionSighUp.style.display = "none";
}
