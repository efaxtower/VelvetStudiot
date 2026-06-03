// Preguntas frecuentes (acordeón)
const faqs = [
    { pregunta: "¿Duele hacerse un tatuaje?", respuesta: "Depende de la zona y tu tolerancia, pero usamos técnicas modernas para minimizar las molestias." },
    { pregunta: "¿Cómo cuido mi tatuaje recién hecho?", respuesta: "Te entregamos una guía completa con cuidados: hidratación, evitar el sol, limpieza suave." },
    { pregunta: "¿Qué materiales usan?", respuesta: "Agujas estériles, tintas de alta calidad y equipos desechables. Todo nuevo para cada cliente." },
    { pregunta: "¿Edad mínima?", respuesta: "Desde 16 años con consentimiento de los padres. Mayores de 18 sin restricción." },
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

// Formulario de contacto con validación
function initFormulario() {
    const form = document.getElementById('contactoForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = form.querySelector('input[placeholder="Tu nombre"]');
            const email = form.querySelector('input[placeholder="Tu correo"]');
            const mensaje = form.querySelector('textarea');
            
            if (!nombre.value.trim()) {
                alert('Por favor, ingresa tu nombre.');
                nombre.focus();
                return;
            }
            if (!email.value.trim() || !email.value.includes('@')) {
                alert('Por favor, ingresa un correo válido.');
                email.focus();
                return;
            }
            if (!mensaje.value.trim()) {
                alert('Por favor, escribe tu mensaje.');
                mensaje.focus();
                return;
            }
            
            alert('✅ Mensaje enviado. Pronto nos pondremos en contacto contigo.');
            form.reset();
        });
    }
}

// WhatsApp flotante con mensaje personalizado
function initWhatsApp() {
    const waLink = document.querySelector('.whatsapp-flotante');
    if (waLink) {
        waLink.href = "https://wa.me/?text=Hola Velvet Studio T, vengo de la página web y me gustaría cotizar un tatuaje";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarFAQs();
    initFormulario();
    initWhatsApp();
});