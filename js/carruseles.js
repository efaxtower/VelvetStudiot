// Datos de ejemplo para trabajos destacados
const trabajosDestacados = [
    { img: "https://placehold.co/400x300/2C2C2C/FFFFFF?text=Realista", descripcion: "Tatuaje Realista - 8 horas" },
    { img: "https://placehold.co/400x300/2C2C2C/FFFFFF?text=Old+School", descripcion: "Old School - Neotradicional" },
    { img: "https://placehold.co/400x300/2C2C2C/FFFFFF?text=Blackwork", descripcion: "Blackwork Geométrico" },
    { img: "https://placehold.co/400x300/2C2C2C/FFFFFF?text=Color", descripcion: "Full Color - Estilo Acuarela" }
];

// Testimonios de ejemplo
const testimonios = [
    { texto: "Excelente atención y calidad. Súper profesionales, volveré.", nombre: "María G." },
    { texto: "Mi primer tatuaje y la experiencia fue increíble. Muy recomendados.", nombre: "Carlos R." },
    { texto: "El estudio es impecable y el artista entendió justo lo que quería.", nombre: "Sofía M." }
];

// Cargar trabajos destacados con Swiper
function initSwiperDestacados() {
    const container = document.getElementById('swiper-wrapper-destacados');
    if (!container) return;
    
    container.innerHTML = trabajosDestacados.map(item => `
        <div class="swiper-slide">
            <img src="${item.img}" alt="Trabajo destacado">
            <div class="card-content">
                <p>${item.descripcion}</p>
            </div>
        </div>
    `).join('');
    
    new Swiper('#swiperDestacados', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// Cargar testimonios con Swiper
function initSwiperTestimonios() {
    const container = document.getElementById('swiper-wrapper-testimonios');
    if (!container) return;
    
    container.innerHTML = testimonios.map(item => `
        <div class="swiper-slide">
            <div class="card-content" style="padding: 1.5rem; text-align: center;">
                <p style="font-style: italic;">"${item.texto}"</p>
                <p style="color: var(--color-acento); font-weight: bold; margin-top: 1rem;">- ${item.nombre}</p>
            </div>
        </div>
    `).join('');
    
    new Swiper('#swiperTestimonios', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSwiperDestacados();
    initSwiperTestimonios();
});