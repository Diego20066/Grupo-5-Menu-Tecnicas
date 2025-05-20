alert("Bienvenido al menu sobre servicio al cliente")
let calificaciones = [];

function registrarCalificacion() {
  let calificacion = parseInt(prompt("Ingrese una calificación (1-5):"));

  if (calificacion >= 1 && calificacion <= 5) {
    calificaciones.push(calificacion);
    alert("Calificación registrada con éxito.");
  } else {
    alert("Calificación inválida. Debe estar entre 1 y 5.");
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
    opcion = prompt(`MENU:\n
1. REGISTRAR UNA CALIFICACIÓN SOBRE EL SERVICIO(1-5)\n
2. MOSTRAR CANTIDAD DE VOTOS POR CATEGORÍA\n
3. MOSTRAR PROMEDIO DE CALIFICACIONES SOBRE EL SERVICIO\n
4. ELIMINAR ULTIMA CALIFICACIÓN REGISTRADA\n
5. SALIR\n`);

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
