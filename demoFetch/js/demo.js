console.log('OK, montres-nous Jamy !');

fetchPosts = async function () {
    try {
        // Récupérer les data
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(response.ok) {
            const dataPosts = await response.json();
            console.log(dataPosts);
            // Traiter les data
            for(const dataPost of dataPosts) {
                createCard(dataPost.title, dataPost.body)
            }
        }
    } catch(error) {
        console.log(error);
    }
}

fetchThenPosts = function() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        // premier bloc (resolve)
        console.log(response);
        return response.json(); // la deuxième promesse doit être récupérée dans le bloc suivant
    }).then((dataPosts) => {
        console.log(dataPosts)
        for(const dataPost of dataPosts) {
            createCard(dataPost.title, dataPost.body)
        }
    }).catch((error) => {
        // catch permet de capturer l'évènement reject (perte de réseau, etc.)
        console.log(`[THEN] - Erreur déclenchée suite au then`)
        console.log(error);
    });
}

function createCard(pTitle, pContent) {
    // je clone le contenu du template pour créer directement une card
    const templateCardElement = document.getElementById('card-template');
    const cloneCard = document.importNode(templateCardElement.content, true);
    console.log(cloneCard);

    // je veux personnaliser le texte
    cloneCard.querySelector('.card-title').textContent = pTitle;
    cloneCard.querySelector('.card-text').textContent = pContent;

    // je récupère l'élement sur lequel je veux rajouter le nouvel élément construit
    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(cloneCard);
}

// Appel à mon fetch
fetchThenPosts();