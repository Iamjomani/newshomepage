let openBtn = document.getElementById('toggle-open-btn');
let closeBtn = document.getElementById('toggle-close-btn');
let menu = document.getElementById('nav-list');

openBtn.addEventListener('click', function(){
 openBtn.style.display='none';
 closeBtn.style.display='block';
 menu.classList.add('nav-list-show');
});

closeBtn.addEventListener('click', function(){
    closeBtn.style.display='none';
    openBtn.style.display='block';
    menu.classList.remove('nav-list-show');
   })

