/* =========================================================
   Portafolio — comportamiento
   1. Tema claro/oscuro con localStorage
   2. Menú responsive
   3. Filtro de proyectos por tecnología
   4. Modal de detalle de proyecto
   5. Validación del formulario de contacto
   6. Botón "volver arriba" + enlace activo en el menú
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- 1. Tema claro / oscuro ---------- */
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
        themeLabel.textContent = theme === 'light' ? 'Tema oscuro' : 'Tema claro';
    };

    const savedTheme = localStorage.getItem('portafolio-tema') || 'dark';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('portafolio-tema', next);
    });

    /* ---------- 2. Menú responsive ---------- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    navMenu.querySelectorAll('.nav__link').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    /* ---------- 3. Filtro de proyectos ---------- */
    const chips = document.querySelectorAll('.filters .chip');
    const cards = document.querySelectorAll('#projectGrid .card');
    const emptyMessage = document.getElementById('projectsEmpty');

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const filter = chip.dataset.filter;
            let visibles = 0;

            chips.forEach((c) => {
                c.classList.toggle('is-active', c === chip);
                c.setAttribute('aria-pressed', String(c === chip));
            });

            cards.forEach((card) => {
                const techs = card.dataset.tech.split(' ');
                const show = filter === 'todos' || techs.includes(filter);
                card.hidden = !show;
                if (show) visibles++;
            });

            emptyMessage.hidden = visibles > 0;
        });
    });

    
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    let lastFocused = null;

    // Detalle ampliado de cada proyecto (edita estos textos con tu información real).
    const detalles = {
        'proyecto-1': {
            titulo: 'Cartas de Memoria',
            texto: 'Juego de memoria por parejas de cartas, jugable hasta 2 personas. Incluye contador de movimientos y cronómetro. ' +
                    'Construido con HTML, CSS y JavaScript.'   
        },
        'proyecto-2': {
            titulo: 'Sistema de gestión de un gimnasio',
            texto:'Modelo de base de datos con tablas de clientes, membresías, pagos, clases, empleados ' +
                  'e instructores. Incluye procedimientos con cursores para generar pagos con fechas y montos ' +
                  'aleatorios, y tablas de auditoría para registrar cambios en los datos.'
        },
        'proyecto-3': {
            titulo: 'Clasificación de Banano con IA',
            texto: 'Modelo de deep learning entrenado con InceptionV3 que clasifica bananos según su estado ' +
                   'de madurez y los etiqueta como Premium o Rechazo. La interfaz web permite subir una foto ' +
                   'y ver la confianza de la predicción para cada categoria, construida con Flask.'
        }
    };

    const openModal = (key, trigger) => {
        const data = detalles[key];
        if (!data) return;
        lastFocused = trigger;
        modalTitle.textContent = data.titulo;
        modalText.textContent = data.texto;
        modal.hidden = false;
        modal.querySelector('[data-close-modal].btn').focus();
    };

    const closeModal = () => {
        modal.hidden = true;
        if (lastFocused) lastFocused.focus();
    };

    document.querySelectorAll('[data-modal]').forEach((btn) => {
        btn.addEventListener('click', () => openModal(btn.dataset.modal, btn));
    });

    modal.querySelectorAll('[data-close-modal]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    /* ---------- 5. Validación del formulario ---------- */
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    const reglas = {
        nombre: (v) => v.trim().length >= 3 || 'Escribe tu nombre (mínimo 3 caracteres).',
        email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Escribe un correo válido, por ejemplo nombre@dominio.com.',
        mensaje: (v) => v.trim().length >= 10 || 'El mensaje necesita al menos 10 caracteres.'
    };

    const validarCampo = (campo) => {
        const resultado = reglas[campo.name](campo.value);
        const error = document.getElementById('error' + campo.name.charAt(0).toUpperCase() + campo.name.slice(1));
        const valido = resultado === true;
        campo.classList.toggle('is-invalid', !valido);
        error.textContent = valido ? '' : resultado;
        return valido;
    };

    form.querySelectorAll('.field__control').forEach((campo) => {
        campo.addEventListener('blur', () => validarCampo(campo));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const campos = [...form.querySelectorAll('.field__control')];
        const todosValidos = campos.map(validarCampo).every(Boolean);

        if (!todosValidos) {
            status.style.color = 'var(--color-danger)';
            status.textContent = 'Revisa los campos marcados antes de enviar.';
            campos.find((c) => c.classList.contains('is-invalid')).focus();
            return;
        }

        status.style.color = 'var(--color-success)';
        status.textContent = 'Mensaje listo. Te responderé al correo que dejaste.';
        form.reset();
    });

    /* ---------- 6. Volver arriba y enlace activo ---------- */
    const toTop = document.getElementById('toTop');

    toTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        toTop.hidden = window.scrollY < 400;
    });

    const secciones = document.querySelectorAll('main section[id]');
    const enlaces = document.querySelectorAll('.nav__link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            enlaces.forEach((link) => {
                link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
            });
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    secciones.forEach((s) => observer.observe(s));

    /* ---------- Año actual en el footer ---------- */
    document.getElementById('year').textContent = new Date().getFullYear();
});