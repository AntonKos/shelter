let isPopapOpen = false;

const burger = document.querySelector('.hamburger-pets');
const body = document.querySelector('body');
const modal  = document.querySelector('.shadow-wrapper');
const popap = document.querySelector('.popup');
const closeBtn = document.querySelector('.icon-close');

burger.addEventListener('click', ()=>{
    body.classList.toggle("change");
    modal.classList.toggle("showModal");
    body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', ()=>{
    modal.classList.toggle("showModal");
    isPopapOpen = !isPopapOpen;
    popap.classList.toggle("showPopup");
    body.style.overflow = "visible";
    closeBtn.style.display = "none";
})

window.addEventListener('click', clickOutside);

function clickOutside(e){
    if(e.target == modal && !isPopapOpen){
        modal.classList.toggle("showModal");
        body.classList.toggle("change");
        body.style.overflow = "visible";
    }
    if(e.target == modal && isPopapOpen){
        modal.classList.toggle("showModal");
        isPopapOpen = !isPopapOpen;
        popap.classList.toggle("showPopup");
        body.style.overflow = "visible";
        closeBtn.style.display = "none";
    } 
}
