export function navigationBar(){
    const guest = document.querySelectorAll('li.guest > a');
    const user = document.querySelectorAll('li.user > a');
    const aWelcomeMessage = document.querySelector('#welcome-msg');

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    
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
  
      if(email && password){
        aWelcomeMessage.textContent = `Welcome, ${email}`;
        aGuestEl.style.display = 'none';
      }else{
        aUserEl.style.display = 'none';
      }
  
    
      
  
    }

    
  
   
  
}