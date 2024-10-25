// Función para cargar las noticias y la galería desde localStorage
function cargarContenido() {
    // Cargar noticias
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const noticiasContenido = document.getElementById('noticias-contenido');
    if (noticiasContenido) {
        noticiasContenido.innerHTML = '';
        noticias.forEach(noticia => {
            const div = document.createElement('div');
            div.classList.add('noticia');
            div.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.contenido}</p>
            `;
            noticiasContenido.appendChild(div);
        });
    }

    // Cargar galería
    const galeria = JSON.parse(localStorage.getItem('galeria')) || [];
    const galeriaContenido = document.getElementById('galeria-contenido');
    if (galeriaContenido) {
        galeriaContenido.innerHTML = '';
        galeria.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('imagen');
            div.innerHTML = `
                <img src="${item.url}" alt="${item.descripcion}" width="300">
                <p>${item.descripcion}</p>
            `;
            galeriaContenido.appendChild(div);
        });
    }
}

// Cargar el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarContenido();
});
