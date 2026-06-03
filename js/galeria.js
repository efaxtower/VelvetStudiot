// Datos de tatuajes
const tatuajes = [
    { imagen: "https://placehold.co/400x400/2C2C2C/FFFFFF?text=Realista+1", estilo: "Realista" },
    { imagen: "https://placehold.co/400x400/2C2C2C/FFFFFF?text=Old+School+1", estilo: "Old School" },
    { imagen: "https://placehold.co/400x400/2C2C2C/FFFFFF?text=Blackwork+1", estilo: "Blackwork" },
    { imagen: "https://placehold.co/400x400/2C2C2C/FFFFFF?text=Color+1", estilo: "Color" },
    { imagen: "https://placehold.co/400x400/2C2C2C/FFFFFF?text=B/N+1", estilo: "B/N" }
];

const estilosUnicos = [...new Set(tatuajes.map(t => t.estilo))];
let filtroActual = 'Todos';

function renderizarGaleria() {
    const grid = document.getElementById('galeria-grid');
    if (!grid) return;
    const filtrados = filtroActual === 'Todos' ? tatuajes : tatuajes.filter(t => t.estilo === filtroActual);
    
    grid.innerHTML = filtrados.map((t, index) => `
        <div class="galeria-item" data-index="${index}" data-imagen="${t.imagen}" data-estilo="${t.estilo}">
            <img src="${t.imagen}" alt="Tatuaje ${t.estilo}" loading="lazy">
            <div class="galeria-info">
                <span>${t.estilo}</span>
            </div>
        </div>
    `).join('');
    
    // Agregar evento clic para Lightbox
    document.querySelectorAll('.galeria-item').forEach(item => {
        item.addEventListener('click', () => {
            const imagen = item.dataset.imagen;
            const estilo = item.dataset.estilo;
            abrirLightbox(imagen, estilo);
        });
    });
}

function crearFiltros() {
    const contenedor = document.getElementById('filtrosGaleria');
    if (!contenedor) return;
    const botones = ['Todos', ...estilosUnicos];
    contenedor.innerHTML = botones.map(estilo => `
        <button class="filtro-btn ${estilo === filtroActual ? 'activo' : ''}" data-estilo="${estilo}">
            ${estilo}
        </button>
    `).join('');
    
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filtroActual = btn.dataset.estilo;
            crearFiltros();
            renderizarGaleria();
        });
    });
}

// Lightbox
function abrirLightbox(imagen, estilo) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-imagen');
    const waLink = document.getElementById('lightbox-wa');
    
    lightboxImg.src = imagen;
    waLink.href = `https://wa.me/?text=Hola, me interesa cotizar un tatuaje estilo ${estilo} que vi en su galería.`;
    lightbox.style.display = 'flex';
}

function cerrarLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    crearFiltros();
    renderizarGaleria();
    
    const lightbox = document.getElementById('lightbox');
    const cerrar = document.querySelector('.lightbox-cerrar');
    if (cerrar) cerrar.addEventListener('click', cerrarLightbox);
    if (lightbox) lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) cerrarLightbox();
    });
});