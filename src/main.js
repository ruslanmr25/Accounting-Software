import './style.css'


const btn= document.getElementById("menu-btn");

const menu=document.getElementById("nav-menu");

btn.addEventListener('click',()=>{
     menu.classList.toggle('hidden');

     menu.classList.toggle('flex');
    

});
