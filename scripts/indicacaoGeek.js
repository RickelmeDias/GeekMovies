import { adicionarCardFilme } from './api.js';

const indicacoesAnimacoes = [
    "Toy Story",
    "The Lion King",
    "Finding Nemo",
    "Frozen",
    "Shrek",
    "Despicable Me",
    "Zootopia",
    "Coco",
    "Moana",
    "The Incredibles",
    "Spirited Away",
    "My Neighbor Totoro",
    "Grave of the Fireflies",
    "Akira",
    "Nausicaä of the Valley of the Wind",
    "Neon Genesis Evangelion",
    "Cowboy Bebop",
    "Attack on Titan",
    "One Piece",
    "Dragon Ball Z",
    "SpongeBob SquarePants",
    "Rick and Morty",
    "The Simpsons"
];
  

indicacoesAnimacoes.forEach(animacao => {
    const animacoesDiv = document.querySelector('#lista-animacoes');
    adicionarCardFilme(animacao, animacoesDiv);
});