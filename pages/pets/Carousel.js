import {cards} from "../../cards.js";
import {Item} from "./Item.js";
import { Popup } from "./Popup.js";

const body = document.querySelector('body');

const carousel = document.querySelector('.paginate'); // должно быть в base view

const items = cards.map((obj, index) => ({ name:obj.name, image: obj.img, type: obj.type, breed: obj.breed, description:obj.description, age:obj.age, inoculations:obj.inoculations, diseases:obj.diseases, parasites:obj.parasites})); // должно быть в main page model

setItems(items); // вызывается из mainPageController

const itemsCarousel = document.querySelectorAll('.paginate__item ');
const modal  = document.querySelector('.shadow-wrapper'); // должно импортироваться из script.js

function setItems(items){  
    carousel.innerHTML = items.map((item) => Item({...item})).join('');
}

itemsCarousel.forEach(element => {
    element.addEventListener('click', (event) =>{ //обработчик в main page view
        if (event.currentTarget.classList.contains('paginate__item')) {
            modal.classList.toggle("showModal");
            isPopapOpen = !isPopapOpen;
            const object = cards.find(card => card.name === event.currentTarget.dataset.name);
            const popap = document.querySelector('.popup');
            popap.innerHTML = Popup(object);
            popap.classList.toggle("showPopup");
            body.style.overflow = "hidden";
            closeBtn.style.display = "flex";
           // handler(event.target.dataset.word);
        }
    })
});




