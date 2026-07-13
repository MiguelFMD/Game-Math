// =========================================================
// GENERADOR DEL MENÚ LATERAL DINÁMICO
// =========================================================
function cargarMenu(rutaBase) {
    const aside = document.querySelector('aside');
    if (!aside) return;

    aside.innerHTML = `
        <h2>Contenidos</h2>
        <nav>
            <ul>
                <li><a href="${rutaBase}index.html"><i class="fa-solid fa-bookmark"></i> Tema 0: Introducción</a></li>
                <li><a href="${rutaBase}contenido/tema-1.html"><i class="fa-solid fa-bookmark"></i> Tema 1: Análisis y costes de algoritmos</a></li>
            </ul>
        </nav>
        <h2>Ejercicios</h2>
        <ul>
            <li><a href="${rutaBase}ejercicios/ejercicio-0.html"><i class="fa-solid fa-dumbbell"></i> Ejercicio 0: Introducción al repositorio</a></li>
            <li><a href="${rutaBase}ejercicios/ejercicio-1.html"><i class="fa-solid fa-dumbbell"></i> Ejercicio 1: Actualizar proyecto</a></li>
        </ul>
    `;
}

// =========================================================
// GRÁFICO TEMA 1: COMPLEJIDAD BIG O
// =========================================================
const canvasComplejidad = document.getElementById('grafo-complejidad');
if (canvasComplejidad) {
    // GRÁFICO TEMA 1: COMPLEJIDAD BIG O
const ctxComplejidad = document.getElementById('grafo-complejidad').getContext('2d');

// Generar puntos para las curvas
const labels = Array.from({length: 20}, (_, i) => i + 1);
const dataO1 = labels.map(() => 5);
const dataOLogN = labels.map(n => Math.log2(n) * 10);
const dataON = labels.map(n => n * 2);
const dataONLogN = labels.map(n => n * Math.log2(n));
const dataON2 = labels.map(n => Math.pow(n, 2) / 2);

new Chart(ctxComplejidad, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            { label: 'O(1) Constante', data: dataO1, borderColor: '#38a169', backgroundColor: 'transparent', tension: 0.4 },
            { label: 'O(log n) Logarítmica', data: dataOLogN, borderColor: '#3182ce', backgroundColor: 'transparent', tension: 0.4 },
            { label: 'O(n) Lineal', data: dataON, borderColor: '#d69e2e', backgroundColor: 'transparent', tension: 0.4 },
            { label: 'O(n log n) Cuasilineal', data: dataONLogN, borderColor: '#dd6b20', backgroundColor: 'transparent', tension: 0.4 },
            { label: 'O(n²) Cuadrática', data: dataON2, borderColor: '#e53e3e', backgroundColor: 'transparent', tension: 0.4 }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Crecimiento de Operaciones según Entrada (n)' }
        },
        scales: {
            y: { min: 0, max: 100, title: { display: true, text: 'Operaciones / Tiempo' } },
            x: { title: { display: true, text: 'Datos de Entrada (n)' } }
        },
        elements: { point: { radius: 0 } } // Oculta los puntos para dejar curvas limpias
    }
    });
}

