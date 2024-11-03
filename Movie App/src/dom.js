export function createFilmPreview(obj){
    const ul = document.querySelector('#movies-list');
   

    const li = document.createElement('li');
    li.className = 'card mb-4';

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = obj.img;

    const divCardBody = document.createElement('card-body');
    divCardBody.className = 'card-body';

    const h4 = document.createElement('h4');
    h4.className = 'card-title';
    h4.textContent = obj.title;

    const a = document.createElement('a');
    a.href = '/';

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';

    const buttonDetails = document.createElement('button');
    buttonDetails.type = 'button';
    buttonDetails.classList.add('btn','btn-info');
    buttonDetails.textContent = 'Details'


    cardFooter.appendChild(buttonDetails);
    divCardBody.appendChild(h4);
    divCardBody.appendChild(a);
    
    li.appendChild(img);
    li.appendChild(divCardBody);
    li.appendChild(cardFooter);

    ul.appendChild(li);

   

   



}