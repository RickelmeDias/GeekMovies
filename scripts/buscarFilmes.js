import { adicionarCardFilme } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const filmeFormulario = document.getElementById('form-filmes');
    const filmeResultados = document.getElementById('res-filmes');

    filmeFormulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        const tituloInput = document.getElementById('titulo-filme');
        const titulo = tituloInput.value;

        if (titulo) {
            filmeResultados.innerHTML = '';
            await adicionarCardFilme(titulo, filmeResultados);
            tituloInput.value = '';
        }
    });
});