// Función para cargar las noticias y la galería desde localStorage
function cargarContenido() {
    // Cargar noticias
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    const noticiasContenido = document.getElementById('noticias-contenido');
    if (noticiasContenido) {
        noticiasContenido.innerHTML = '';
        noticias.forEach((noticia, index) => {
            const div = document.createElement('div');
            div.classList.add('noticia');
            div.innerHTML = `
                <h3>${noticia.titulo}</h3>
                <p>${noticia.contenido}</p>
                <button onclick="eliminarNoticia(${index})">Eliminar</button>
            `;
            noticiasContenido.appendChild(div);
        });
    }

    // Cargar galería
    const galeria = JSON.parse(localStorage.getItem('galeria')) || [];
    const galeriaContenido = document.getElementById('galeria-contenido');
    if (galeriaContenido) {
        galeriaContenido.innerHTML = '';
        galeria.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('imagen');
            div.innerHTML = `
                <img src="${item.url}" alt="${item.descripcion}" width="300">
                <p>${item.descripcion}</p>
                <button onclick="eliminarImagen(${index})">Eliminar</button>
            `;
            galeriaContenido.appendChild(div);
        });
    }
}

// Función para agregar una noticia
function agregarNoticia(event) {
    event.preventDefault();
    const titulo = document.getElementById('tituloNoticia').value;
    const contenido = document.getElementById('contenidoNoticia').value;
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    noticias.push({ titulo, contenido });
    localStorage.setItem('noticias', JSON.stringify(noticias));
    document.getElementById('formNoticias').reset();
    alert('Noticia agregada con éxito');
    cargarContenido(); // Recargar el contenido para mostrar la nueva noticia
}

// Función para eliminar una noticia
function eliminarNoticia(index) {
    const noticias = JSON.parse(localStorage.getItem('noticias')) || [];
    noticias.splice(index, 1); // Eliminar la noticia en la posición index
    localStorage.setItem('noticias', JSON.stringify(noticias));
    alert('Noticia eliminada con éxito');
    cargarContenido(); // Recargar el contenido
}

// Función para agregar una imagen a la galería
function agregarImagen(event) {
    event.preventDefault();
    const descripcion = document.getElementById('descripcionImagen').value;
    const imagenInput = document.getElementById('imagenInput');
    const archivo = imagenInput.files[0];

    if (archivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const url = e.target.result;
            const galeria = JSON.parse(localStorage.getItem('galeria')) || [];
            galeria.push({ descripcion, url });
            localStorage.setItem('galeria', JSON.stringify(galeria));
            document.getElementById('formGaleria').reset();
            alert('Imagen agregada con éxito');
            cargarContenido(); // Recargar el contenido para mostrar la nueva imagen
        };
        reader.readAsDataURL(archivo);
    }
}

// Función para eliminar una imagen de la galería
function eliminarImagen(index) {
    const galeria = JSON.parse(localStorage.getItem('galeria')) || [];
    galeria.splice(index, 1); // Eliminar la imagen en la posición index
    localStorage.setItem('galeria', JSON.stringify(galeria));
    alert('Imagen eliminada con éxito');
    cargarContenido(); // Recargar el contenido
}

// Configurar los eventos del formulario en la página agregar.html
document.addEventListener('DOMContentLoaded', () => {
    cargarContenido(); // Cargar el contenido en la página agregar.html si existe
    const formNoticias = document.getElementById('formNoticias');
    const formGaleria = document.getElementById('formGaleria');

    if (formNoticias) formNoticias.addEventListener('submit', agregarNoticia);
    if (formGaleria) formGaleria.addEventListener('submit', agregarImagen);
});
