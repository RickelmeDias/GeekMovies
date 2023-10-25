const apiKey = '323df4f6';

const indicacoesAnimacoes = [
    'Spirited Away',
    'The Lion King',
    'Toy Story',
    'The Lord of the Rings: The Fellowship of the Ring',
    'How to Train Your Dragon',
    'Shrek',
    'Coco',
    'The Incredibles',
    'Princess Mononoke',
    'The Little Mermaid',
    'Beauty and the Beast',
    'Aladdin',
    'Monsters, Inc.',
    'Finding Nemo',
    'Ratatouille',
    'Up',
    'Frozen',
    'Moana',
    'Zootopia',
    'Kung Fu Panda',
    'Shrek 2',
    'The Nightmare Before Christmas',
    'Pokemon',
    'Dragon Ball'
];

async function adicionarCardFilme(titulo, elementoPai) {
    const apiUrl = `http://www.omdbapi.com/?t=${titulo}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const movieInfo = `
            <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                <div class="card h-100 w-100">
                    <img class="img-fluid card-img-top" src="${data.Poster}" alt="${data.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${data.Title} - ${data.Year}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${data.Genre}</h6>
                        <p class="card-text">${data.Plot}</p>
                    </div>
                </div>
            </div>
            `;
            elementoPai.insertAdjacentHTML('beforeend', movieInfo);
        } else {
            console.error(`Error fetching data for ${movieTitle}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

indicacoesAnimacoes.forEach(tituloDaAnimacao => {
    const animationsDiv = document.querySelector('#lista-animacoes');
    adicionarCardFilme(tituloDaAnimacao, animationsDiv);
});