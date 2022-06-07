import {container} from "./Container.js";
import {cards} from "../../cards.js";
import {Item} from "./Item.js";
import { Popup } from "./Popup.js";

const closeBtn = document.querySelector('.icon-close');
let lastArray = [];

function checkWindowSize(){
    if(window.innerWidth === 320){
        itemCount = 1;
    }
    if(window.innerWidth === 768){
        itemCount = 2;
    }
    if(window.innerWidth === 1280){
        itemCount = 3;
    }
}

let itemCount = 3;

const carousel = document.querySelector('.carousel'); // должно быть в base view
carousel.innerHTML = container(); // должно быть в main page view

const wrappers = document.querySelectorAll('.item');  // должно быть в main page view
const items = cards.map((obj, index) => ({ name:obj.name, image: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites})); // должно быть в main page model
checkWindowSize();
setWrappers(items); // вызывается из mainPageController
const modal  = document.querySelector('.shadow-wrapper'); 
setPopap()

function fillWrapper(wrapper, items){
    let index=0;
    const array = [];
    for(let i=0; i < itemCount; i++){
        do {
            index = Math.floor(Math.random() * 8);
        }
        while (array.includes(index) || lastArray.includes(index));
        array.push(index);
        wrapper.innerHTML += Item(items[index]);
    };
    lastArray = array.slice();
    return wrapper.innerHTML;
}

function setWrappers(items){  //  должно быть в main page view
    wrappers.forEach(element => {
       element.innerHTML = ''; 
       element.innerHTML = fillWrapper(element, items);
    });
    
    // wrapper.innerHTML = items.map((item) => Item({...item})).join('');
};

function setPopap() {
    const itemsCarousel = document.querySelectorAll('.carousel__item');
    itemsCarousel.forEach(element => {
        element.addEventListener('click', (event) =>{ //обработчик в main page view
            if (event.currentTarget.classList.contains('carousel__item')) {
                modal.classList.toggle("showModal");
                isPopapOpen = !isPopapOpen;
                const object = cards.find(card => card.name === event.currentTarget.dataset.name);
                const popap = document.querySelector('.popup');
                popap.innerHTML = Popup(object);
                popap.classList.toggle("showPopup");
                body.style.overflow = "hidden";
                closeBtn.style.display = "flex";
            }
        })
    }); 
}

const BTN_LEFT = document.querySelector('#prev');
const BTN_RIGHT = document.querySelector('#next');
const CAROUSEL = document.querySelector('#item-container');
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const moveLeft = () =>{
    CAROUSEL.classList.add('transition-left');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () =>{
    CAROUSEL.classList.add('transition-right');
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend',(animationEvent)=>{
    let changedItem;
    let opositeItem;
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove('transition-left');
        changedItem = ITEM_LEFT;
        opositeItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    }else{
        CAROUSEL.classList.remove('transition-right');
        changedItem = ITEM_RIGHT;
        opositeItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    changedItem.innerHTML = fillWrapper(changedItem, items);
    opositeItem.innerHTML = changedItem.innerHTML;
    setPopap();
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});


