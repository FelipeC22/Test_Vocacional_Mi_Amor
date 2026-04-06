/**
 * Test Vocacional RIASEC - Lógica Core
 * Proyecto de Grado - Ingeniería de Sistemas
 */

// 1. Base de Conocimiento (Preguntas validadas RIASEC)
// R: Realista, I: Investigativo, A: Artístico, S: Social, E: Emprendedor, C: Convencional
const preguntas = [
    { id: 1, texto: "Me gusta desarmar y arreglar aparatos electrónicos o mecánicos.", categoria: "R" },
    { id: 2, texto: "Prefiero trabajar al aire libre o con mis propias manos.", categoria: "R" },
    { id: 3, texto: "Se me facilita usar herramientas, máquinas o equipos técnicos.", categoria: "R" },
    { id: 4, texto: "Disfruto construyendo cosas desde cero (muebles, circuitos, estructuras).", categoria: "R" },
    { id: 5, texto: "Me interesa la agricultura, el manejo de tierras o animales.", categoria: "R" },
    
    { id: 6, texto: "Disfruto resolviendo problemas matemáticos o lógicos complejos.", categoria: "I" },
    { id: 7, texto: "Me gusta investigar en internet o en libros hasta entender cómo funciona el mundo.", categoria: "I" },
    { id: 8, texto: "Me interesan los avances científicos, la tecnología y la programación.", categoria: "I" },
    { id: 9, texto: "Soy muy analítico y me gusta basarme en datos y evidencias.", categoria: "I" },
    { id: 10, texto: "Disfruto los documentales de ciencia, biología o física.", categoria: "I" },
    
    { id: 11, texto: "Me expreso mejor a través del dibujo, el diseño, la pintura o la música.", categoria: "A" },
    { id: 12, texto: "Tengo mucha imaginación y me gusta crear cosas originales.", categoria: "A" },
    { id: 13, texto: "Presto mucha atención a la estética, los colores y cómo se ven las cosas.", categoria: "A" },
    { id: 14, texto: "Me gusta escribir historias, guiones o crear contenido para redes sociales.", categoria: "A" },
    { id: 15, texto: "Prefiero ambientes de trabajo donde no haya reglas estrictas y pueda ser creativo.", categoria: "A" },
    
    { id: 16, texto: "Mis amigos suelen buscarme para pedirme consejos personales.", categoria: "S" },
    { id: 17, texto: "Siento mucha satisfacción cuando ayudo a alguien a aprender algo nuevo.", categoria: "S" },
    { id: 18, texto: "Me interesa el bienestar de mi comunidad y participar en obras sociales.", categoria: "S" },
    { id: 19, texto: "Tengo facilidad para escuchar y comprender las emociones de los demás.", categoria: "S" },
    { id: 20, texto: "Me veo trabajando en áreas de la salud (enfermería, medicina) o educación.", categoria: "S" },
    
    { id: 21, texto: "Me resulta fácil convencer a otros sobre mis ideas o proyectos.", categoria: "E" },
    { id: 22, texto: "Me gustaría tener mi propio negocio o liderar un equipo de trabajo.", categoria: "E" },
    { id: 23, texto: "Soy competitivo y me gusta alcanzar metas ambiciosas.", categoria: "E" },
    { id: 24, texto: "Me interesan las ventas, el marketing y cómo generar dinero.", categoria: "E" },
    { id: 25, texto: "Tomo la iniciativa rápidamente cuando hay que organizar un evento o proyecto.", categoria: "E" },
    
    { id: 26, texto: "Soy una persona muy ordenada, me gusta tener todo clasificado y limpio.", categoria: "C" },
    { id: 27, texto: "Soy bueno manejando presupuestos, cuentas y organizando el dinero.", categoria: "C" },
    { id: 28, texto: "Prefiero tener instrucciones claras y reglas definidas antes de empezar una tarea.", categoria: "C" },
    { id: 29, texto: "Me gusta trabajar con archivos, bases de datos o software de oficina (Excel).", categoria: "C" },
    { id: 30, texto: "Presto mucha atención a los pequeños detalles para no cometer errores.", categoria: "C" }
];

// 2. Base de Datos de Carreras (Contexto Colombia / SENA / Univ. Públicas)
const catalogoCarreras = {
    R: [
        { nombre: "Tecnólogo en Mecatrónica / Mantenimiento (SENA)", desc: "Ideal para el manejo de maquinaria, automatización y reparación." },
        { nombre: "Técnico en Producción Agrícola", desc: "Enfocado en el agro colombiano, manejo de cultivos y tierras." }
    ],
    I: [
        { nombre: "Ingeniería de Sistemas / Tecnólogo en Análisis y Desarrollo de Software (ADSO - SENA)", desc: "Alta demanda laboral en Colombia. Requiere lógica e investigación." },
        { nombre: "Ciencias Básicas (Biología, Química, Física)", desc: "Investigación profunda en universidades." }
    ],
    A: [
        { nombre: "Tecnólogo en Producción Multimedia o Diseño Gráfico", desc: "Creación de contenido audiovisual, diseño web y publicidad." },
        { nombre: "Artes Plásticas / Comunicación Audiovisual", desc: "Expresión creativa, fotografía y medios de comunicación." }
    ],
    S: [
        { nombre: "Licenciatura en Educación / Trabajo Social", desc: "Impacto directo en comunidades vulnerables y formación de jóvenes." },
        { nombre: "Enfermería / Psicología", desc: "Cuidado de la salud física y mental de las personas." }
    ],
    E: [
        { nombre: "Administración de Empresas / Gestión de Negocios", desc: "Liderazgo corporativo, creación de PYMES y finanzas." },
        { nombre: "Tecnólogo en Gestión de Mercados (SENA)", desc: "Estrategias de venta, marketing digital y estudios de mercado." }
    ],
    C: [
        { nombre: "Tecnólogo en Contabilidad y Finanzas (SENA)", desc: "Manejo riguroso de libros contables, impuestos y auditoría." },
        { nombre: "Asistencia Administrativa / Gestión Logística", desc: "Organización de inventarios, bases de datos y administración de oficinas." }
    ]
};

// Descripciones de perfiles para el resultado
const descripcionesPerfil = {
    R: "Tu perfil es REALISTA. Eres una persona práctica, orientada a la acción. Prefieres ver resultados tangibles y trabajar con herramientas, tecnología o la naturaleza.",
    I: "Tu perfil es INVESTIGATIVO. Eres analítico y curioso. Destacas resolviendo problemas complejos, usando la lógica y te apasiona descubrir cómo funciona todo.",
    A: "Tu perfil es ARTÍSTICO. Tienes una gran sensibilidad, imaginación y creatividad. Valoras la originalidad y buscas espacios para expresarte libremente.",
    S: "Tu perfil es SOCIAL. Tu mayor fortaleza es la empatía. Tienes una vocación natural para ayudar, enseñar, curar y comunicarte con los demás.",
    E: "Tu perfil es EMPRENDEDOR. Tienes madera de líder. Eres persuasivo, te gustan los retos, los negocios y tienes habilidad para movilizar a otros hacia un objetivo.",
    C: "Tu perfil es CONVENCIONAL. Eres altamente organizado, metódico y detallista. Eres excelente manejando datos, presupuestos y garantizando que todo funcione en orden."
};

// 3. Variables de Estado
let preguntaActual = 0;
let puntajes = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
let radarChartInstance = null; // Para destruir el gráfico si se reinicia

// 4. Elementos del DOM
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaTest = document.getElementById('pantalla-test');
const pantallaResultados = document.getElementById('pantalla-resultados');

const btnComenzar = document.getElementById('btn-comenzar');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnsOpcion = document.querySelectorAll('.btn-opcion');

const tituloPregunta = document.getElementById('pregunta-texto');
const textoProgreso = document.getElementById('texto-progreso');
const barraProgreso = document.getElementById('progreso');
const listaCarrerasDOM = document.getElementById('lista-carreras');
const analisisPerfilDOM = document.getElementById('analisis-perfil');

// Mezclar preguntas (Algoritmo de Fisher-Yates para aleatorizar el test)
function mezclarPreguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 5. Lógica de Flujo
btnComenzar.addEventListener('click', () => {
    mezclarPreguntas(preguntas); // Hacemos el test dinámico
    pantallaInicio.classList.remove('active');
    pantallaInicio.classList.add('hidden');
    pantallaTest.classList.remove('hidden');
    pantallaTest.classList.add('active');
    cargarPregunta();
});

function cargarPregunta() {
    if (preguntaActual < preguntas.length) {
        // Animación de entrada
        tituloPregunta.classList.remove('fade-in');
        tituloPregunta.classList.add('fade-out');
        
        setTimeout(() => {
            tituloPregunta.innerText = preguntas[preguntaActual].texto;
            tituloPregunta.classList.remove('fade-out');
            tituloPregunta.classList.add('fade-in');
        }, 200); // Tiempo de la transición CSS

        // Actualizar progreso
        const numeroPregunta = preguntaActual + 1;
        textoProgreso.innerText = `Pregunta ${numeroPregunta} de ${preguntas.length}`;
        const porcentaje = (numeroPregunta / preguntas.length) * 100;
        barraProgreso.style.width = `${porcentaje}%`;
    } else {
        finalizarTest();
    }
}

// Evento para los botones de respuesta
btnsOpcion.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const valor = parseInt(e.target.getAttribute('data-valor'));
        const categoriaActual = preguntas[preguntaActual].categoria;
        
        // Sumar al estado
        puntajes[categoriaActual] += valor;
        
        // Avanzar
        preguntaActual++;
        cargarPregunta();
    });
});

function finalizarTest() {
    pantallaTest.classList.remove('active');
    pantallaTest.classList.add('hidden');
    pantallaResultados.classList.remove('hidden');
    pantallaResultados.classList.add('active');
    
    procesarResultados();
}

function procesarResultados() {
    // 1. Obtener las dos categorías con mayor puntaje (Rasgo Dominante y Subdominante)
    const puntajesArray = Object.entries(puntajes); // [['R', 4], ['I', 8], ...]
    puntajesArray.sort((a, b) => b[1] - a[1]); // Ordenar de mayor a menor
    
    const dominante = puntajesArray[0][0];
    const subdominante = puntajesArray[1][0];

    // 2. Imprimir el análisis psicológico
    analisisPerfilDOM.innerHTML = `
        <p><strong>Tu Rasgo Principal:</strong> ${descripcionesPerfil[dominante]}</p>
        <p><strong>Tu Rasgo Secundario:</strong> ${descripcionesPerfil[subdominante]}</p>
    `;

    // 3. Generar recomendaciones de carreras
    listaCarrerasDOM.innerHTML = '';
    
    // Carreras del dominante
    catalogoCarreras[dominante].forEach(carrera => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="carrera-titulo">Recomendación Alta: ${carrera.nombre}</span>
                        <span class="carrera-desc">${carrera.desc}</span>`;
        listaCarrerasDOM.appendChild(li);
    });

    // Carreras del subdominante
    catalogoCarreras[subdominante].forEach(carrera => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="carrera-titulo">Recomendación Media: ${carrera.nombre}</span>
                        <span class="carrera-desc">${carrera.desc}</span>`;
        listaCarrerasDOM.appendChild(li);
    });

    // 4. Dibujar Gráfico de Radar
    dibujarGrafico();
}

function dibujarGrafico() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    if(radarChartInstance) {
        radarChartInstance.destroy(); // Limpiar lienzo si se reinicia
    }

    const data = {
        labels: ['Realista', 'Investigativo', 'Artístico', 'Social', 'Emprendedor', 'Convencional'],
        datasets: [{
            label: 'Tu Nivel de Afinidad',
            data: [
                puntajes.R, 
                puntajes.I, 
                puntajes.A, 
                puntajes.S, 
                puntajes.E, 
                puntajes.C
            ],
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: 'rgba(37, 99, 235, 1)',
            pointBackgroundColor: 'rgba(37, 99, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(37, 99, 235, 1)',
            borderWidth: 2
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                    grid: { color: 'rgba(0,0,0,0.1)' },
                    pointLabels: {
                        font: { size: 12, family: "'Segoe UI', Roboto, sans-serif" },
                        color: '#1e293b'
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 10, // 5 preguntas por categoría * 2 puntos máximo
                        stepSize: 2,
                        display: false // Ocultar números para que sea más visual
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    };

    radarChartInstance = new Chart(ctx, config);
}

// Reiniciar Test
btnReiniciar.addEventListener('click', () => {
    preguntaActual = 0;
    puntajes = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    pantallaResultados.classList.remove('active');
    pantallaResultados.classList.add('hidden');
    pantallaInicio.classList.remove('hidden');
    pantallaInicio.classList.add('active');
});