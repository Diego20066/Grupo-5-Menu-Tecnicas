alert("Bienvenido al menu sobre servicio al cliente")
let calificaciones = [];

function registrarCalificacion() {
  let entrada = prompt("Ingrese una calificación (1-5):");

  if (entrada === "1" || entrada === "2" || entrada === "3" || entrada === "4" ||entrada === "5"
  ) {
    calificaciones.push(parseInt(entrada));
    alert("Calificación registrada con éxito.");
  } else {
    alert("Entrada inválida. Ingrese solo un número del 1 al 5.");
  }
}

function mostrarCantidadPorCategoria() {
  let conteo = [0, 0, 0, 0, 0];

  for (let i = 0; i < calificaciones.length; i++) {
    let cal = calificaciones[i];
    conteo[cal - 1]++;
  }

  let resultado = "";
  for (let i = 0; i < conteo.length; i++) {
    resultado += "Calificación " + (i + 1) + ": " + conteo[i] + " votos\n";
  }

  alert(resultado || "No hay calificaciones registradas.");
}

function mostrarPromedio() {
  if (calificaciones.length === 0) {
    alert("No hay calificaciones para calcular el promedio.");
    return;
  }

  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }

  let promedio = suma / calificaciones.length;
  alert("Promedio de calificaciones: " + promedio.toFixed(2));
}


function eliminarUltimoVoto() {
  if (calificaciones.length > 0) {
    let eliminado = calificaciones.pop();
    alert(`Se eliminó la última calificación registrada: ${eliminado}`);
  } else {
    alert("No hay calificaciones para eliminar.");
  }
}


function menu() {
  let opcion;

  do {
    opcion = prompt(`Encuesta de satisfación:\n
1. Registrar una calificación sobre el servicio(1-5)
2. Mostrar cantidad de votos por categoría
3. Mostrar promedio de calificaciones sobre el servicio
4. Eliminar ultima calificación registrada
5. Salir\n
Seleccione una opción:`);

    switch (opcion) {
      case "1":
        registrarCalificacion();
        break;
      case "2":
        mostrarCantidadPorCategoria();
        break;
      case "3":
        mostrarPromedio();
        break;
      case "4":
        eliminarUltimoVoto();
        break;
      case "5":
        alert("Saliendo del sistema...");
        break;
      default:
        alert("Opción no válida, intente de nuevo.");
    }
  } while (opcion !== "5");
}

menu();
