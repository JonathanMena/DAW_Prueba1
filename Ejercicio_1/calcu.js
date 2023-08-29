// Arreglo para almacenar la información de las materias
const materias = [];

// Función para calcular el CUM
function calcularCUM() {
  let sumaNotasUV = 0;
  let totalUV = 0;

  for (const materia of materias) {
    sumaNotasUV += materia.nota * materia.uv;
    totalUV += materia.uv;
  }

  return sumaNotasUV / totalUV;
}

// Función para ingresar información de una materia
function ingresarMateria() {
  const nombre = prompt("Ingrese el nombre de la materia:");
  const nota = parseFloat(prompt("Ingrese la nota final obtenida:"));
  const uv = parseInt(prompt("Ingrese las unidades de valor (UV) de la materia:"));

  materias.push({ nombre, nota, uv });

  const continuar = prompt("¿Desea ingresar otra materia? (si/no)").toLowerCase();
  if (continuar === "si") {
    ingresarMateria();
  } else {
    mostrarResultados();
  }
}

// Función para mostrar las materias ingresadas y el CUM
function mostrarResultados() {
  console.log("Materias ingresadas:");
  for (const materia of materias) {
    console.log(`Materia: ${materia.nombre}, Nota: ${materia.nota}, UV: ${materia.uv}`);
  }

  const cum = calcularCUM();
  console.log(`CUM del alumno: ${cum.toFixed(2)}`);
}

// Iniciar el proceso de ingreso de materias
ingresarMateria();

