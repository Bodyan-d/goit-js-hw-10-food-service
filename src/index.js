import cardsTpl from './templates/food-cards.hbs'
import cardsSettings from './menu.json'

const menuRef = document.querySelector('.js-menu');
const themeSwitchToggleRef = document.querySelector('.theme-switch__toggle')
const cardsMurkupRefs = cardsTpl(cardsSettings);

themeSwitchToggleRef.addEventListener('click', themeToggle)

function themeToggle(a) {
    if (themeSwitchToggleRef.checked) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        return;
    };

    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

}
themeSwitchToggleRef.checked = false

menuRef.insertAdjacentHTML('beforeend', cardsMurkupRefs);