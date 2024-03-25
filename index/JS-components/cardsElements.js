const elementsContentCard = [
    {
        img: "src",
        title: "Sites",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus praesentium delectus nulla quo labore, tempora, repudiandae harum molestias autem quibusdam qui consectetur dicta modi sapiente rerum quaerat illum nihil?",
    },
    {
        img: "src",
        title: "Planos",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio doloribus praesentium delectus nulla quo labore, tempora, repudiandae harum molestias autem quibusdam qui consectetur dicta modi sapiente rerum quaerat illum nihil?",
    },
    {
        img: "src",
        title:"Soluções",
        desc: "Sua empresa otimizada nos melhores motores de buscas: Google, Bing...",
    }
];

for (let i = 0; i < elementsContentCard.length; i++) {
    newElementCards(elementsContentCard[i].img, elementsContentCard[i].title, elementsContentCard[i].desc);
}

function newElementCards(imgSrc, titleText, descText) {
    // Criar elementos HTML
    const cardContainer = document.createElement('div');
    const imgElement = document.createElement('img');
    const titleElement = document.createElement('h2');
    const descElement = document.createElement('p');

    // Conteúdo dos elementos
    imgElement.src = imgSrc;
    titleElement.textContent = titleText;
    descElement.textContent = descText;

    // Classes CSS = .content-card
    cardContainer.classList.add('content-card');

    //Elementos ao DOM
    cardContainer.appendChild(imgElement);
    cardContainer.appendChild(titleElement);
    cardContainer.appendChild(descElement);

    const parentElement = document.querySelector('.content-cards .card-content'); //Elemento pai
    parentElement.appendChild(cardContainer);
}