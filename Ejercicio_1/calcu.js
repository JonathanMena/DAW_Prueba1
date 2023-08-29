const materiaForm = document.getElementById('materiaForm');
const materiasDiv = document.getElementById('materias');
const cumSpan = document.getElementById('cum');
const agregarBoton = document.getElementById('agregar');

const materias = [];

agregarBoton.addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const nota = document.getElementById('nota').value;
    const uv = document.getElementById('uv').value;

    const materia = {
        nombre: nombre,
        nota: nota,
        uv: uv
    };

    materias.push(materia);

    mostrarMaterias();
});

function mostrarMaterias() {
    materiasDiv.innerHTML = '';
    let totalUv = 0;
    let totalPuntos = 0;

    for (const materia of materias) {
        materiasDiv.innerHTML += `<p>${materia.nombre} - Nota: ${materia.nota} - UV: ${materia.uv}</p>`;
        totalUv += materia.uv;
        totalPuntos += materia.nota * materia.uv;
    }

    const cum = totalPuntos / totalUv ;
    cumSpan.textContent = cum.toFixed(2);
}
