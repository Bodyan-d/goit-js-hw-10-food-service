import cardsSet from './menu.json'
import cardsTpl from './food-cards.hbs'

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const cardsMurkup = createCardMurkup(cardsSet)

function createCardMurkup(cards) {
    return cards.map(cardsTpl).join('');
}

console.log(cardsMurkup);