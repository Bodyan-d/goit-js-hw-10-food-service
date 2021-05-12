import cardsTpl from './templates/food-cards.hbs'
import cardsSettings from './menu.json'

const menuRef = document.querySelector('.js-menu');
const cardsMurkupRefs = cardsTpl(cardsSettings);


menuRef.insertAdjacentHTML('beforeend', cardsMurkupRefs);