const prompt = require('prompt-sync')();

function getRandomCard() {
    const cards = ['Eau', 'Feu', 'Plante'];
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function getResult(playerCard, robotCard) {
    if ((playerCard === 'Eau' && robotCard === 'Feu') ||
        (playerCard === 'Feu' && robotCard === 'Plante') ||
        (playerCard === 'Plante' && robotCard === 'Eau')) {
        return 'Victoire';
    } else if (playerCard === robotCard) {
        return 'Égalité';
    } else {
        return 'Défaite';
    }
}

function playGame() {
    console.log('Bienvenue dans le jeu de cartes !');
    const pseudo = prompt('Veuillez saisir votre pseudo : ');

    let playerScore = 0;
    let robotScore = 0;

    for (let i = 1; i <= 3; i++) {
        console.log(`\nManche ${i}`);
        const playerCard = prompt('Veuillez choisir une carte (Eau, Feu, Plante) : ');

        const robotCard = getRandomCard();

        console.log('Le robot a choisi : ' + robotCard);

        const result = getResult(playerCard, robotCard);
        console.log('Résultat de la manche : ' + result);

        if (result === 'Victoire') {
            playerScore++;
        } else if (result === 'Défaite') {
            robotScore++;
        }
    }

    console.log('\nRésultat final :');
    console.log(pseudo + ' : ' + playerScore + ' - Robot : ' + robotScore);

    if (playerScore === robotScore) {
        const replay = prompt('Égalité ! Voulez-vous rejouer ? (Oui/Non) : ');
        if (replay.toLowerCase() === 'oui') {
            playGame();
        } else {
            console.log('Merci d\'avoir joué !');
        }
    }
}

playGame();