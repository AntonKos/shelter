let isPopapOpen = false;
let isBurgerOpen = false;

//SPINNER
window.onload = () =>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display');
    }, 1000);
};

window.addEventListener('hashchange', ()=>{
    if(isBurgerOpen){
        body.classList.toggle("change");
        modal.classList.toggle("showModal");
        isBurgerOpen = !isBurgerOpen;
    }
});

// BURGER
const burger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const modal  = document.querySelector('.shadow-wrapper');
const popap = document.querySelector('.popup');
const closeBtn = document.querySelector('.icon-close');

closeBtn.addEventListener('click', ()=>{
    modal.classList.toggle("showModal");
    isPopapOpen = !isPopapOpen;
    popap.classList.toggle("showPopup");
    body.style.overflow = "visible";
    closeBtn.style.display = "none";
})

burger.addEventListener('click', ()=>{
    body.classList.toggle("change");
    modal.classList.toggle("showModal");
    isBurgerOpen?body.style.overflow = "visible": body.style.overflow = "hidden";
    isBurgerOpen = !isBurgerOpen;
});

window.addEventListener('click', clickOutside);

function clickOutside(e){
    if(e.target == modal && !isPopapOpen){
        modal.classList.toggle("showModal");
        body.classList.toggle("change");
        isBurgerOpen = !isBurgerOpen;
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











