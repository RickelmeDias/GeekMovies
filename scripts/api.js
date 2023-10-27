const apiKey = '323df4f6';

export async function adicionarCardFilme(titulo, elementoPai) {
    const apiUrl = `http://www.omdbapi.com/?t=${titulo}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            if (data.Response === 'True') {
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
