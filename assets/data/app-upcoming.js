import {printCard, categoriesFilter, categoriesPrint, mixCheck, categoriesActiveMediaQuery, captureCheckboxCheked, filterCategoriesChecked, filterSearch, carrucelSearch, colorChecked, filterEvents, $} from './module/functions.js'


const events= []
const categories = []
const categoriesChecked = [];
const searchEventCheked = [];
const address = "./"

const url = 'https://mindhub-xj03.onrender.com/api/amazing'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        const eventsFilter = data.events
        const currentDate = data.currentDate

        filterEvents(eventsFilter, events, currentDate , true)
        printCard(events, conteinerCards, address);
        categoriesFilter(events, categories);
        categoriesPrint(categories, categoriesContainer);
        categoriesActiveMediaQuery(categories, categoriesContainer)
        mixCheck()
        captureCheckboxCheked(categoriesChecked, conteinerCards);
        filterCategoriesChecked(events, categoriesChecked, conteinerCards, searchEventCheked, eventsFilter, address)
        filterSearch(events, eventsFilter, categoriesChecked, searchEventCheked, conteinerCards, address)
        carrucelSearch(search)
        colorChecked()
        console.log(events.length)
    }) 
    .catch((error)=> console.log("error", error))


const conteinerCards = $("cards");
const categoriesContainer = $("categories");
const search = $("search");
