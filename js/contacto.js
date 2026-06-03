// Preguntas frecuentes (acordeón)
const faqs = [
    { pregunta: "¿Duele hacerse un tatuaje?", respuesta: "Depende de la zona y tu tolerancia, pero se puede controlar muy bien con técnicas modernas." },
    { pregunta: "¿Cómo cuido mi tatuaje recién hecho?", respuesta: "Te entregaremos una guía completa con todos los cuidados: hidratación, evitar el sol, lavado suave." },
    { pregunta: "¿Qué materiales usan?", respuesta: "Agujas estériles, tintas de alta calidad y equipos desechables. Todo nuevo para cada cliente." },
    { pregunta: "¿Edad mínima?", respuesta: "Con consentimiento de los padres desde los 16 años. Mayores de 18 sin restricción." },
    { pregunta: "¿Piden depósito?", respuesta: "Sí, para agendar una cita se solicita un depósito que se descuenta del precio final." }
];

function cargarFAQs() {
    const container = document.getElementById('faqs-container');
    if (!container) return;
    container.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-pregunta">
                ${faq.pregunta}
                <i class="bi bi-chevron-down"></i>
            </div>
            <div class="faq-respuesta">
                <p>${faq.respuesta}</p>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.faq-pregunta').forEach(item => {
        item.addEventListener('click', () => {
            const padre = item.closest('.faq-item');
            padre.classList.toggle('activo');
            const icono = item.querySelector('i');
            if (icono) icono.classList.toggle('bi-chevron-up');
        });
    });
}

// Formulario de contacto (solo front-end)
function initFormulario() {
    const form = document.getElementById('contactoForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado (demostración). Pronto te contactará Velvet Studio T.');
            form.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarFAQs();
    initFormulario();
});