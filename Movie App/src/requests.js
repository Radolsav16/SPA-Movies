import { createFilmPreview } from "./dom.js";



async function getMovies(){
    const url = 'http://localhost:3030/jsonstore/collections/data/movies';
 
    const res = await fetch(url);
    const data = await res.json();

    const ul = document.querySelector('#movies-list');
    ul.innerHTML = '';

  
    
    Object.values(data)
        .forEach((film)=>{
            createFilmPreview(film)
        })
    
    
}

async function addMovies(e) {
    e.preventDefault();
    const form = e.target;
   
    const formData = Object.fromEntries(new FormData(form).entries());

    for(let keys in formData){
        if(formData[keys] === ''){
            return;
        }
    }

    
    

    const url = 'http://localhost:3030/jsonstore/collections/data/movies';
    const res = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })    
    const data  = await res.json();
    
    

    form.reset();


    const sectionAddMovie = form.parentElement;
    sectionAddMovie.style.display = 'none';

    const sectionHomePage = document.querySelector("#home-page");
    sectionHomePage.style.display = 'block';


    location.href = '/';

    
    
  
    
}   


export {
    getMovies,
    addMovies,
}