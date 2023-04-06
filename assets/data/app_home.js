const data={
    "fechaActual": "2022-01-01",
    "eventos": [
        {
        "image":"https://i.postimg.cc/kXWrBjXC/collectivities-party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
        },
        {
        "image":"https://i.postimg.cc/bvzmYgdm/korean.jpg",
        "name":"Korean style",
        "date":"2021-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
        },
        {
        "image":"https://i.postimg.cc/nrQkSwwh/jurassic-park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
        },
        {
        "image":"https://i.postimg.cc/nr6dHtQm/paris.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
        },
        {
        "image":"https://i.postimg.cc/Gph6gdP3/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
        },
        {
            "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            "name":"Halloween Night",
            "date":"2022-02-12",
            "description":"Come with your scariest costume and win incredible prizes.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":12000,
            "estimate":9000,
            "price":12
        },
        {
            "image":"https://i.postimg.cc/XvQQr5C4/metallica-concert.jpg",
            "name":"Metallica in concert",
            "date":"2022-01-22",
            "description":"The only concert of the most emblematic band in the world.",
            "category":"Music Concert",
            "place":"Room A"
            ,"capacity":138000,
            "estimate":138000,
            "price":150
        },
        {
        "image":"https://i.postimg.cc/FRY8mpn2/electronic.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
        {
            "image":"https://i.postimg.cc/2V3FvcvY/10k-4life.jpg",
            "name":"10K for life",
            "date":"2021-03-01",
            "description":"Come and exercise, improve your health and lifestyle.",
            "category":"Race",
            "place":"Campo de FutbÃ³l",
            "capacity":30000,
            "assistance":25698,
            "price":3
        },
        {
        "image":"https://i.postimg.cc/LYR31mkQ/15kny.jpg",
        "name":"15K NY",
        "date":"2021-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
        {
            "image":"https://i.postimg.cc/34BWbTsq/school-bookfair.jpg",
            "name":"School's book fair",
            "date":"2022-10-15",
            "description":"Bring your unused school book and take the one you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":150000,
            "estimate":123286,
            "price":1
        },
        {
        "image":"https://i.postimg.cc/PxJKYqWZ/just4-kitchen.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
        },
        {
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
        },
        {
            "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
            "name":"Avengers",
            "date":"2022-10-15",
            "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":9000,
            "estimate":9000,
            "price":250
        }
    ]
    };

const events = data.eventos;
const categories = [];
const categoriesChecked = [];
const eventsFilter = [];

const $ = id => document.getElementById(id)
const conteinerCards = $("cards");
const conteinerCategories = document.querySelector('.categories');
const categoryCanvas = $("categoryCanvas");
const categoriesContainer = $("categories");
const search = $("search");
console.log(events, eventsFilter)

printCard(events, conteinerCards);
filterCategories(events, categories);
printCategories(categories, conteinerCategories);
captureCheckboxCheked(categoriesChecked);
filterCategoriesChecked(events, categoriesChecked, conteinerCards)
filterSearch(events, eventsFilter, categoriesChecked)

function printCard(events, conteinerCards) {
    const fragment = document.createDocumentFragment()
        for(const event of events) {
            //console.log(event)
            fragment.appendChild(createCard(event));
    }
    conteinerCards.appendChild(fragment);
}
function createCard(event){
    const divCard = document.createElement("div") 
    divCard.classList.add("card")
    divCard.classList.add("bg-dark")

    const imgCard = document.createElement("img")
    imgCard.src = event.image
    imgCard.classList.add("card-img-top")
    imgCard.alt = "alt de prueba"

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
    detailsCard.setAttribute("href", "./assets/pages/Details.html")

    const buttonCard = document.createElement("button")
    buttonCard.textContent = "More information"
    buttonCard.type = "button"
    buttonCard.classList.add("btn")
    buttonCard.classList.add("btn-secondary")

    detailsCard.appendChild(buttonCard)
    footerCard.append(pFooter, detailsCard)
    divCardBody.append(h3, p)
    divCard.append(imgCard, divCardBody, footerCard)
    
    return divCard
}
function filterCategories(events, arrayCategories){
    for(let event of events){
        if(arrayCategories.indexOf(event.category) === -1){
            arrayCategories.push(event.category)
        }
    }
}
function printCategories(categories){
    for(const category of categories){
        //console.log(category)
        conteinerCategories.appendChild(createCategories(category))
        categoryCanvas.appendChild(createCategories(category))
    }
}
function createCategories(categories){
    const div = document.createElement('div');
    div.className = 'form-check'
    div.className = 'form-check-inline'

    const input = document.createElement('input');
    input.className = 'form-check-input'
    input.type = 'checkbox'
    input.id = categories.replace(/\s/g,'')
    input.value = `category${categories.replace(/\s/g,'')}`

    const label = document.createElement('label');
    label.className = 'form-check-label'
    label.setAttribute('for', categories.replace(/\s/g,''))
    label.textContent = categories

    div.append(input, label)
    //console.log(div)
    return div
}
function captureCheckboxCheked(arrayCategoriesChecked){
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
                const indice = arrayCategoriesChecked.indexOf(checkbox.id);
                //console.log(indice);
                arrayCategoriesChecked.splice(indice, 1)
                conteinerCards.textContent = ``
                printCard(events, conteinerCards)
            }
        })
    });
}
function filterCategoriesChecked(events, arrayCategoriesChecked, conteinerCards){
    categoriesContainer.addEventListener('change', e =>{
        eventsFilter.length = 0;
        if(arrayCategoriesChecked.length > 0){
            arrayCategoriesChecked.forEach(category => {
                events.filter(event => {
                    if(event.category.replace(/\s/g,'').indexOf(category) !== -1){
                        eventsFilter.push(event)
                    }
                })
                conteinerCards.textContent = ``
                printCard(eventsFilter, conteinerCards)
                //console.log(eventsFilter)
            });
        }else{
            printCard(events, conteinerCards)
        }
    })
    //console.log(events)
}
function filterSearch(events, eventsFilter, categoriesChecked){
    search.addEventListener('keyup', e =>{
        if(categoriesChecked.length === 0){
            e.preventDefault();
            const searchEvent = [];
            console.log(categoriesChecked)
                events.filter(event => {
                    if(event.name.toLowerCase().indexOf(search.value.toLowerCase()) !== -1){
                        searchEvent.push(event)
                    }
                })
                conteinerCards.textContent = ``
                printCard(searchEvent, conteinerCards)
        }else{
            e.preventDefault();
            const searchEventCheked = [];
                eventsFilter.filter(event => {
                    if(event.name.toLowerCase().indexOf(search.value.toLowerCase()) !== -1){
                        searchEventCheked.push(event)
                    }
                })
            conteinerCards.textContent = ``
            printCard(searchEventCheked, conteinerCards)
        }
    })
}