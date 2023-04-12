import {printCard, categoriesFilter, categoriesPrint, mixCheck, categoriesActiveMediaQuery, captureCheckboxCheked, filterCategoriesChecked, filterSearch, carrucelSearch, colorChecked, $} from './module/functions.js'

const categories = [];
const categoriesChecked = [];
const eventsFilter = [];
const searchEventCheked = [];
const address = "./assets/pages/"


const url = 'https://mindhub-xj03.onrender.com/api/amazing'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const {events} = data
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
    }) 
    .catch((error)=> console.log("error", error))



const conteinerCards = $("cards");
const categoriesContainer = $("categories");
const search = $("search");

//console.log(events, eventsFilter)
