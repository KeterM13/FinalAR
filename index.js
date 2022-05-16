let loading=document.querySelector('#loading');
const audio  = new Audio('menu.mp3');


window.addEventListener('markerFound', (event)=>
{
    audio.play();
})
audio.pause();