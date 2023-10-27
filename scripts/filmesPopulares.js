import { adicionarCardFilme } from './api.js';

const filmesPopulares =  [
    "The Matrix",
    "Star Wars: Episode IV - A New Hope",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Star Wars: Episode VI - Return of the Jedi",
    "Blade Runner",
    "Blade Runner 2049",
    "2001: A Space Odyssey",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Avengers",
    "Avengers: Age of Ultron",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Guardians of the Galaxy",
    "Guardians of the Galaxy Vol. 2",
    "Iron Man",
    "Thor: Ragnarok",
    "Doctor Strange",
    "Back to the Future",
    "Jurassic Park",
    "E.T. the Extra-Terrestrial",
    "Interstellar"
];

filmesPopulares.forEach(filme => {
    const filmesDiv = document.querySelector('#lista-filmes');
    adicionarCardFilme(filme, filmesDiv);
});