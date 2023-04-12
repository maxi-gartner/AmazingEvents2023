import {data} from './module/data.js'
import {printCard, categoriesFilter, categoriesPrint, mixCheck, categoriesActiveMediaQuery, captureCheckboxCheked, filterCategoriesChecked, filterSearch, carrucelSearch, colorChecked, filterEvents, $} from './module/functions.js'

const eventsFilter = data.eventos
const currentDate = data.fechaActual
const events= []
const categories = []
const categoriesChecked = [];
const searchEventCheked = [];

const conteinerCards = $("cards");
const categoriesContainer = $("categories");
const search = $("search");

filterEvents(eventsFilter, events, currentDate , true)
printCard(events, conteinerCards);
categoriesFilter(events, categories);
categoriesPrint(categories, categoriesContainer);
categoriesActiveMediaQuery(categories, categoriesContainer)
mixCheck()
captureCheckboxCheked(categoriesChecked, conteinerCards);
filterCategoriesChecked(events, categoriesChecked, conteinerCards, searchEventCheked, eventsFilter)
filterSearch(events, eventsFilter, categoriesChecked, searchEventCheked ,conteinerCards)
carrucelSearch(search)
colorChecked(categoriesContainer)