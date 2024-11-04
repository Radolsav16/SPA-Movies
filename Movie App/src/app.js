
import {getMovies,addMovies} from './requests.js';
import { userLogin } from './login.js';
import { userRegister } from './register.js';
import { logout } from './logout.js';


const sectionAddMovie = document.querySelector("#add-movie");
const movieExample = document.querySelector("#movie-example");
const editMovieSection = document.querySelector("#edit-movie");
const sectionLogin = document.querySelector("#form-login");
const sectionSighUp = document.querySelector("#form-sign-up");
const addMovieBtn = document.querySelector('.btn-warning');


const currentUrl = new URL(location.href);
const pathname = currentUrl.pathname;


let isRegister = false;

hideSections();

navigationBar();

const navigation = {
  '/':()=>console.log('home'),
  "/login": userLogin,
  "/register": userRegister,
  "/logout":logout,
};

navigation[pathname]();


function navigationBar(){
  const guest = document.querySelectorAll('li.guest > a');
  const user = document.querySelectorAll('li.user > a');
  
  for(let i = 0; i < 2;i++){
    const aGuestEl = guest[i];
    const aUserEl = user[i];

    if(aUserEl.textContent === 'Logout'){
      aUserEl.href = '/logout';
     
    }

    if(aGuestEl.textContent === 'Register'){
      aGuestEl.href = '/register';
      
    }

    if(aGuestEl.textContent === 'Login'){
      aGuestEl.href = '/login';
    
    }
    
    
    

    if(isRegister){
      aGuestEl.style.display = 'none';
    }else{
      aUserEl.style.display = 'none';
    }
  }


 

}

getMovies();

addMovieBtn.addEventListener('click',addMovie);


function hideSections() {
  sectionAddMovie.style.display = "none";
  movieExample.style.display = "none";
  editMovieSection.style.display = "none";
  sectionLogin.style.display = "none";
  sectionSighUp.style.display = "none";
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
