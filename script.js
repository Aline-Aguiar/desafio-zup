const maxCharacters = 671;
var container = document.getElementById("allCards");
var tagP = container.getElementsByTagName("p");

randomNumber = () => {
    return Math.floor(Math.random() * maxCharacters);
}

getCharacter = (id, index) => {

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        document.images[index].src = data.image;
        document.images[index].alt = data.name;
        tagP[index].innerHTML = data.name;
    });
}

fillCard = () => {
    for (var i = 0; i < document.images.length; i++) {
        const id = randomNumber();
        getCharacter(id, i);
    }
}

window.onload = fillCard();
