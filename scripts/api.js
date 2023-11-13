const key = 'ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaGRXUWlPaUk0T1RkbU9XUTBaRGt5WVdKaE9HUm1ZMk14T1RobU9URmlNV1poTjJZME9DSXNJbk4xWWlJNklqWTFNalE1WWpneVptUTJNekF3TURFek9XVTBaV1kxWWlJc0luTmpiM0JsY3lJNld5SmhjR2xmY21WaFpDSmRMQ0oyWlhKemFXOXVJam94ZlEuRDF3S2xGWWZ5aEU2ak1nS2FiVzhNZlA4ZzgtRy04YmEzSGFDRlh3clY0Zw==';

export async function adicionarCardFilme(titulo, elementoPai) {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${titulo.replace(' ', '%20')}&include_adult=false&language=en-US&page=1`;
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + atob(key),
              },
        });
        if (response.ok) {
            const data = await response.json();
            if (data !== undefined && data !== null && data.results.length > 0) {
                const titulo = data.results[0].title;
                const genero = listaDeGeneros[data.results[0].genre_ids[0]];
                const anoLancamento = data.results[0].release_date.substring(0,4);
                const sobreFilme = data.results[0].overview;
                const caminhoImagem = `https://image.tmdb.org/t/p/original${data.results[0].poster_path}`;

                const movieInfo = `
                <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
                    <div class="card h-100 w-100">
                        <img class="img-fluid card-img-top" src="${caminhoImagem}" alt="${titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${titulo} - ${anoLancamento}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${genero===undefined?"":genero}</h6>
                            <p class="card-text">${sobreFilme}</p>
                        </div>
                    </div>
                </div>
                `;
                elementoPai.insertAdjacentHTML('beforeend', movieInfo);
            } else {
                const notFoundModal = `
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Filme não encontrado</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Nenhum filme correspondente foi encontrado. Tente digitar o nome em inglês.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                    elementoPai.insertAdjacentHTML('beforeend', notFoundModal);
                const modal = elementoPai.querySelector('.modal');
                $(modal).modal('show');
            }
        } else {
            console.error(`Error fetching data for ${titulo}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const listaDeGeneros = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};