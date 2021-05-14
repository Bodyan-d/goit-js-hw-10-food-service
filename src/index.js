import cardsTpl from './templates/food-cards.hbs'
import cardsSettings from './menu.json'

const menuRef = document.querySelector('.js-menu');
const themeSwitchToggleRef = document.querySelector('.theme-switch__toggle')
const cardsMurkupRefs = cardsTpl(cardsSettings);
menuRef.insertAdjacentHTML('beforeend', cardsMurkupRefs);

themeSwitchToggleRef.addEventListener('input', themeToggle)

function themeToggle(e) {
    if (localStorage.getItem('theme')) {
        console.log(e.currentTarget.checked);
        if (themeSwitchToggleRef.checked) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStoreSetitem(e);
            return;
        };

        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStoreSetitem(e);
        return;
    };

}

function localStoreSetitem(e) {
    if (!e.currentTarget.checked) {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'light-theme')
        console.log(localStorage.getItem('theme'));
        return;
    };
    localStorage.removeItem('theme')
    localStorage.setItem('theme', 'dark-theme')
    console.log(localStorage.getItem('theme'));

}

function localStoreGetitem(e) {
    if (localStorage.getItem('theme') === 'dark-theme') {
        themeSwitchToggleRef.checked = true;
    }
    document.body.classList.add(localStorage.getItem('theme'));

}

localStoreGetitem()