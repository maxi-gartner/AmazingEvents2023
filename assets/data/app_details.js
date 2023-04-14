import {printCardDetails} from './module/functions.js'

let urlParams = location.search
let params = new URLSearchParams(urlParams)
let id = params.get("event")

const url = 'https://mindhub-xj03.onrender.com/api/amazing'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const {events} = data
        console.log(events)
        const conteinerCards = document.getElementById("card");
        printCardDetails(events, conteinerCards, id);
    }) 
    .catch((error)=> console.log("error", error))
