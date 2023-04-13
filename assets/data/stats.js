import {filterEvents, $, categoriesFilter, calculationsEventsTable, calculationsByCategory, minOrMax, printTableStatic, printTable} from './module/functions.js'

const eventsUpcoming= []
const eventsPast= []
const allCapacity = []
const arrayAttendancesPast = []

const url = 'https://mindhub-xj03.onrender.com/api/amazing'
    fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        const {events} = data
        const currentDate = data.currentDate

        filterEvents(events, eventsUpcoming, currentDate , true)
        filterEvents(events, eventsPast, currentDate , false)
        calculationsEventsTable(events, eventsPast, allCapacity, arrayAttendancesPast)
        //printTableStatic(events)
        printTableStatic(arrayAttendancesPast, events, allCapacity)
        printTable(eventsUpcoming, eventsPast)
    })
    .catch((error)=> console.log("error", error))
