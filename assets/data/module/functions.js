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
    
    const detailsCardLinkImg = document.createElement("a")
    detailsCardLinkImg.setAttribute("href", `${address}Details.html?event=${event.name.replace(/\s/g,'')}`)

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
    detailsCard.setAttribute("href", `${address}Details.html?event=${event.name.replace(/\s/g,'')}`)

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