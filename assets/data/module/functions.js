export const $ = id => document.getElementById(id)
export function printCard(events, conteinerCards, address) {
    const fragment = document.createDocumentFragment()
        for(const event of events){
            fragment.appendChild(createCard(event, address));
    }
    conteinerCards.textContent = ``
    conteinerCards.appendChild(fragment);
}
export function createCard(event , address){
    const divCard = document.createElement("div") 
    divCard.classList.add("card")
    divCard.classList.add("bg-dark")
    
    //cambiar el id
    const detailsCardLinkImg = document.createElement("a")
    detailsCardLinkImg.setAttribute("href", `${address}Details.html?event=${event._id}`)

    const imgCard = document.createElement("img")
    imgCard.src = event.image
    imgCard.classList.add("card-img-top")
    imgCard.alt = `img ${event.name}`

    const divCardBody = document.createElement("div")
    divCardBody.classList.add("card-body")

    const h3 = document.createElement("h3")
    h3.textContent = event.name
    h3.classList.add("text-center")

    const p = document.createElement("p")
    p.textContent = event.description
    h3.classList.add("card-text")
    
    const footerCard = document.createElement("div")
    footerCard.classList.add("footer-card")

    const pFooter = document.createElement("p")
    pFooter.textContent = `Price: $${event.price}`

    const detailsCard = document.createElement("a")
    detailsCard.setAttribute("href", `${address}Details.html?event=${event._id}`)

    const buttonCard = document.createElement("button")
    buttonCard.textContent = "More information"
    buttonCard.type = "button"
    buttonCard.classList.add("btn")
    buttonCard.classList.add("btn-secondary")

    detailsCardLinkImg.appendChild(imgCard)
    detailsCard.appendChild(buttonCard)
    footerCard.append(pFooter, detailsCard)
    divCardBody.append(h3, p)
    divCard.append(detailsCardLinkImg, divCardBody, footerCard)
    
    return divCard
}
export function createCardWithoutResults(conteinerCards){
    const fragment = document.createDocumentFragment()

    const divCard = document.createElement("div") 
    divCard.classList.add("card")
    divCard.classList.add("card-without-results")
    divCard.classList.add("bg-dark")

    const imgCard = document.createElement("img")
    imgCard.src = "https://www.tecnozero.com/wp-content/uploads/2019/10/que-es-edr-en-informatica.png"
    imgCard.classList.add("card-img-top-without")
    imgCard.alt = `img without results`

    const divCardBody = document.createElement("div")
    divCardBody.classList.add("card-body")

    const h3 = document.createElement("h3")
    h3.textContent = "Without results😣"
    h3.classList.add("text-center")

    const p = document.createElement("p")
    p.textContent = "We have no results for this search"
    h3.classList.add("card-text")
    
    const footerCard = document.createElement("div")
    footerCard.classList.add("footer-card")

    divCardBody.append(h3, p)
    divCard.append(imgCard, divCardBody)
    
    fragment.appendChild(divCard);
    conteinerCards.textContent = ``
    conteinerCards.appendChild(fragment);
}
export function categoriesFilter(events, arrayCategories){
    for(let event of events){
        if(arrayCategories.indexOf(event.category) === -1){
            arrayCategories.push(event.category)
        }
    }
}
export function categoriesPrint(categories, categoriesContainer){
    const fragment = document.createDocumentFragment()
        categories.forEach(category => fragment.appendChild(categoriesCreate(category)))
            categoriesContainer.appendChild(fragment)
            categoryCanvas.appendChild(fragment)
}
export function mixCheck(){
    const allCheckbox = document.querySelectorAll('.form-check-input')
    allCheckbox.forEach(checkbox => {
        checkbox.addEventListener('click', e =>{
            //console.log(e.target.checked)
            if(checkbox.checked){
                //console.log(e.target.id)
                allCheckbox.forEach(function(checkElement) {
                    //console.log(checkElement.id)
                    if(checkElement.id === e.target.id){
                        checkElement.checked = true;
                    }
                });
            }else{
                //console.log(e.target.id)
                allCheckbox.forEach(function(checkElement) {
                    //console.log(checkElement.id)
                    if(checkElement.id === e.target.id){
                        checkElement.checked = false;
                    }
                });
            }
        })
    })
}
export function categoriesCreate(categories){
    const categoryReplace = categories.replace(/\s/g,'')
    const div = document.createElement('div');
    div.className = 'form-check'
    div.className = 'form-check-inline'
    div.classList.add(categoryReplace)

    const input = document.createElement('input');
    input.className = 'form-check-input'
    input.type = 'checkbox'
    input.id = categoryReplace
    input.value = `category${categories.replace(/\s/g,'')}`

    const label = document.createElement('label');
    label.className = 'form-check-label'
    label.classList.add(categoryReplace)
    label.setAttribute('for', categoryReplace)
    label.textContent = categories

    label.appendChild(input)
    div.appendChild(label)
    //console.log(div)
    return div
}
export function categoriesActiveMediaQuery(categories, categoriesContainer){
    const fragment = document.createDocumentFragment()
            categories.forEach(category => fragment.appendChild(categoriesCreate(category)))
            categoryCanvas.appendChild(fragment)
            categoriesContainer.appendChild(fragment)
}
export function captureCheckboxCheked(arrayCategoriesChecked, conteinerCards){
    const checkboxs = document.querySelectorAll('.form-check-input')
    //console.log(checkboxs)
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('click', e =>{
            //console.log(e.target.checked)
            if(checkbox.checked){
                //console.log(e.target.id)
                arrayCategoriesChecked.push(checkbox.id)
            }else{
                //console.log(`input ${checkbox.id} no esta chekeado   `);
                const indice = arrayCategoriesChecked.indexOf(checkbox.id);// se busca la posicion en la que se encuentra el checkbox deschecked
                //console.log(indice);
                arrayCategoriesChecked.splice(indice, 1)// una vez encontrado se borra
                conteinerCards.textContent = ``
            }
        })
    });
}
export function filterCategoriesChecked(events, arrayCategoriesChecked, conteinerCards, searchEventCheked, eventsFilter, address){
    const checkboxs = document.querySelectorAll('.form-check-input')
    //console.log(checkboxs)
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('click', () =>{
        if(searchEventCheked.length === 0){ // si no hay nada en search
            //console.log("trabajando SINNN datos en search")
            eventsFilter.length = 0;
            if(arrayCategoriesChecked.length > 0){
                arrayCategoriesChecked.forEach(category => {
                    events.filter(event => {
                        if(event.category.replace(/\s/g,'').indexOf(category) !== -1){
                            eventsFilter.push(event)
                        }
                    })
                    conteinerCards.textContent = ``
                    printCard(eventsFilter, conteinerCards, address)
                    //console.log(eventsFilter)
                });
            }else{
                printCard(events, conteinerCards, address)
            }
        }else{ //si hay algo en search
            console.log("trabajando con datos en search")
            eventsFilter.length = 0;
            if(arrayCategoriesChecked.length !== 0){
                arrayCategoriesChecked.forEach(category => {
                    searchEventCheked.filter(event => {
                        if(event.category.replace(/\s/g,'').indexOf(category) !== -1){
                            eventsFilter.push(event)
                        }
                    })
                    if(eventsFilter.length > 0){
                        conteinerCards.textContent = ``
                        printCard(eventsFilter, conteinerCards, address)
                    }else{
                        createCardWithoutResults(conteinerCards)
                    }
                    //console.log(eventsFilter)
                });
            }else{
                    printCard(searchEventCheked, conteinerCards, address)
                }
            }
    })
    //console.log(events)
})
}
export function filterSearch(events, eventsFilter, categoriesChecked, searchEventCheked, conteinerCards, address){
    search.addEventListener('keyup', e =>{
        if(search.value.length > 0){// si hay ALGUN valor ingresado en el search
            if(categoriesChecked.length === 0){//ninguna categoria checkeada
                searchEventCheked.length = 0
                e.preventDefault();
                    events.filter(event => {
                        if(event.name.toLowerCase().includes(search.value.toLowerCase())){
                            searchEventCheked.push(event)
                        }
                    })
                    if(searchEventCheked.length > 0){
                        console.log("resultados encontrados")
                        printCard(searchEventCheked, conteinerCards, address)
                    }else{
                        console.log("ningun resultado encontrado")
                        createCardWithoutResults(conteinerCards)
                    }
            }else{ // con categorias checked
                searchEventCheked.length = 0
                e.preventDefault();
                    eventsFilter.filter(event => {
                        if(event.name.toLowerCase().includes(search.value.toLowerCase())){
                            searchEventCheked.push(event)
                        }
                    })
                    if(searchEventCheked.length > 0){
                        printCard(searchEventCheked, conteinerCards, address)
                    }else{
                        console.log("ningun resultado encontrado")
                        createCardWithoutResults(conteinerCards)
                    }
                    
            }
            console.log(events)
            console.log(searchEventCheked)
        }else{// NINGUN valor ingresado en el search
            searchEventCheked.length = 0
            if(categoriesChecked.length > 0){
                console.log("hay categorias chekeadas")
                printCard(eventsFilter, conteinerCards, address)
            }else{
                searchEventCheked.length = 0
                printCard(events, conteinerCards, address)
            }
        }
        console.log(search.value.length)
    })
}
/** 
 * 
 * @param id
 * @ si la pagina esta en mobile el carrucel al usar el buscador desaparece
 * 
**/
export function carrucelSearch(search){
    const carrucel = $("carrucel-pages")
    search.addEventListener("click", () => {
        carrucel.classList.remove("carousel-inner")
        carrucel.classList.add("carousel-inner-click")
    })
}
export function colorChecked(){
    //console.log(categoriesContainer)
    const inputs = document.querySelectorAll(".form-check-input")
    const labels = document.querySelectorAll(".form-check-label")
        inputs.forEach(input => {
            input.addEventListener("input", ()=> {
            console.log(input.checked)
            if(input.checked){
                console.log(input.id)
                labels.forEach(label => {
                    console.log(label.className )
                    if(label.className.includes(input.id)){
                        //console.log(label)
                        label.classList.add("change-border")
                    }
                })
            }else{
                labels.forEach(label => {
                    //console.log(label.className)
                    if(label.className.includes(input.id)){
                        //console.log(label)
                        label.classList.remove("change-border")
                    }
                })
            }
        })
        //console.log(inputs)
    })
}
export function filterEvents(eventsFilter, events, currentDate, upcoming){
    //console.log(currentDate)
const currentDate_split = currentDate.split("-") // split separa la fecha en formato de array
    //console.log(currentDate_split)
const currentDate_parsed = new Date(currentDate_split[0],currentDate_split[1]-1,currentDate_split[2]) // arma la fecha correctamente
    //console.log(currentDate_parsed)
const currentDate_getTime = currentDate_parsed.getTime(); // devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.
    //console.log(currentDate_getTime)

    for(const event of eventsFilter){
        const date_event = event.date
        const date_event_split = date_event.split("-")
        const date_event_parsed = new Date(date_event_split[0],date_event_split[1]-1,date_event_split[2])
        const date_event_getTime = date_event_parsed.getTime()
        //console.log(date_event_getTime)

        if(upcoming){
            if(currentDate_getTime < date_event_getTime){
                events.push(event)
            }
        }else{
            if(currentDate_getTime > date_event_getTime){
                events.push(event)
            }
        }
    }
}
export function calculationsEventsTable(events, eventsPast, allCapacity, arrayAttendancesPast){
    //calculo de mayor porcentaje de asistencia
    eventsPast.forEach(event=> {
        let resAtt = (event.assistance * 100)/event.capacity
        //console.log(resultado)
        arrayAttendancesPast.push({name: event.name, percentage: resAtt})
    })
    //calculo de mayor capacidad
    events.forEach(event=> {
        let resCap = event.capacity
        allCapacity.push(resCap)
    })
}
/** 
 * 
 * @param array array a recorrer(upcoming o past)
 * @param boolean si el array es upcoming es true si es past es false
 * 
**/
export function calculationsByCategory(pastOrUpcoming, isUpcoming){
    let categories = []
    let dataTable = []
    categoriesFilter(pastOrUpcoming, categories)

        categories.forEach((category) => {
            let revenues = 0;
            let attendance = 0
            let estimate = 0
            let assistance = 0
            let capacity = 0
            pastOrUpcoming.forEach((event) => {
                if ((event.category == category)){
                    //console.log(Number(data.assistance));
                    if(isUpcoming){
                        revenues = revenues + (event.estimate * event.price)
                        estimate = estimate + event.estimate
                        capacity = capacity + event.capacity
                    }else{
                        revenues = revenues + (event.assistance * event.price)
                        assistance = assistance + event.assistance
                        capacity = capacity + event.capacity
                    }
                }
            });
            if(isUpcoming){
                attendance = attendance + ((estimate * 100)/capacity)
                //console.log("revenues", revenues)
            }else{
                attendance = attendance + ((assistance * 100)/capacity)
            }
            dataTable.push({name: category, revenues: revenues, attendance: attendance})
        });
        return dataTable
}
/** 
 * 
 * @param array array a recorrer
 * @param boolean si es maximo true o minimo false
 * @returns el maximo o el minimo del array 
 * 
**/
export function minOrMax(array, ismax){
        let max = 0;
        let min = Infinity;
            for ( let numero of array ) {
                    if (max < numero)
                        max = numero
                    if (min > numero)
                        min = numero
                    }
                if(ismax){
                    return max
                }else{
                    return min
                }
}
export function printTableStatic(arrayAttendancesPast, events, allCapacity){
    const attendancesPast = arrayAttendancesPast.map(function(event){return event.percentage});
    const highestAtt = []
    const lowestAtt = []
    const largerCapacity = []
    //console.log(largerCapacity)

    arrayAttendancesPast.forEach(event=>{
        if(event.percentage === minOrMax(attendancesPast, true)){highestAtt.push(event)}
        if(event.percentage === minOrMax(attendancesPast, false)){lowestAtt.push(event)}
    });
        events.forEach(event=>{
            if(event.capacity === minOrMax(allCapacity, true)){largerCapacity.push(event)}
    });
    
    //console.log(minOrMax(attendancesPast, true))
    const tableStatic = $("table-Static")
    //console.log(tableStatic)
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    td1.textContent = `${highestAtt[0].name} ${(highestAtt[0].percentage).toFixed(1)} %`
    td2.textContent = `${lowestAtt[0].name} ${(lowestAtt[0].percentage).toFixed(1)} %`
    td3.textContent = `${largerCapacity[0].name} ${(largerCapacity[0].capacity)}`
    tr.append(td1, td2, td3)
    tableStatic.appendChild(tr)
}
export function printTable(eventsUpcoming, eventsPast){
    const tableUpcoming = $("table-upcoming")
    const tablePast = $("table-past")
    
    const dataUpcoming = calculationsByCategory(eventsUpcoming, true)
    const dataPast = calculationsByCategory(eventsPast, false)

    dataUpcoming.forEach(event =>{
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        td.textContent = event.name
        const td2 = document.createElement("td")
        td2.textContent = "US$" + " " + event.revenues
        const td3 = document.createElement("td")
        td3.textContent = event.attendance.toFixed(2) + "%"
        tr.append(td, td2, td3)
        tableUpcoming.appendChild(tr)
    })
    dataPast.forEach(event =>{
        const tr = document.createElement("tr")
        const td = document.createElement("td")
        td.textContent = event.name
        const td2 = document.createElement("td")
        td2.textContent = "US$" + " " + event.revenues
        const td3 = document.createElement("td")
        td3.textContent = event.attendance.toFixed(2) + "%"
        tr.append(td, td2, td3)
        tablePast.appendChild(tr)
    })
}
export function createCardDetails(event){
    const divCard = document.createElement("div");
    divCard.classList.add("card-details")
    divCard.classList.add("bg-dark")

        const imgCard = document.createElement("img")
        imgCard.src = event.image
        imgCard.classList.add("card-img-details")
        imgCard.alt = `img ${event.name}`

    const divCardBody = document.createElement("div")
    divCardBody.classList.add("description")

        const h1 = document.createElement("h1")
        h1.textContent = event.name
        h1.classList.add("text-center")

        const h3 = document.createElement("h3")
        h3.textContent = event.date
        h3.classList.add("card-text")

        const pCategory = document.createElement("p")
        pCategory.textContent = `Category: ${event.category}`
        
        const p = document.createElement("p")
        p.textContent = event.description
        h3.classList.add("card-text")

        const pFooter = document.createElement("p")
        pFooter.textContent = `Price: $${event.price}`
        
        const link = document.createElement("a")
        link.setAttribute("href", "../../index.html")

    const buttonCard = document.createElement("button")
    buttonCard.textContent = "Go back to start"
    buttonCard.type = "button"
    buttonCard.classList.add("btn")
    buttonCard.classList.add("btn-secondary")

    link.appendChild(buttonCard)
    divCardBody.append(h1, h3, pCategory, p, pFooter, link)
    divCard.append(imgCard, divCardBody)
    
    return divCard
}
export function printCardDetails(events, conteinerCards, id) {
    const fragment = document.createDocumentFragment()
    const eventFilter = events.find(element => element._id == id)
    console.log(eventFilter)
            fragment.appendChild(createCardDetails(eventFilter));
    conteinerCards.appendChild(fragment);
}