function mostrar() {
    // Obtenemos el valor seleccionado en el menú de platos y bebidas mediante variables
    var platoSeleccionado = document.getElementById("platos").value;
    var bebidaSeleccionada = document.getElementById("bebidas").value;

    // Obtenemos la cantidad de platos y bebidas ingresada por el usuario mediante las variables
    var cantidadPlatos = parseInt(document.getElementById("n1").value);
    var cantidadBebidas = parseInt(document.getElementById("n2").value);

    // Variable para precios de los platos y bebidas
    var precioPlato;
    var precioBebida;

    switch (platoSeleccionado) { //platos
        case "1":
            precioPlato = 20000; // Precio del plato 1 (Arroz con pollo)
            break; //termina
        case "2":
            precioPlato = 25000; // Precio del plato 2 (Arroz chino)
            break;
        case "3":
            precioPlato = 23000; // Precio del plato 3 (Arroz oriental)
            break;
        case "4":
            precioPlato = 28000; // Precio del plato 4 (Camarones)
            break;
        case "5":
            precioPlato = 26000; // Precio del plato 5 (Langostinos)
            break;
        default:
            precioPlato = 0; // Precio por defecto si no se selecciona un plato válido
    }

    switch (bebidaSeleccionada) { //bebidas
        case "1":
            precioBebida = 7000; // Precio de la bebida 1 (Limonada de coco)
            break;
        case "2":
            precioBebida = 13000; // Precio de la bebida 2 (Coco loco)
            break;
        case "3":
            precioBebida = 9000; // Precio de la bebida 3 (Brisa marina)
            break;
        case "4":
            precioBebida = 15000; // Precio de la bebida 4 (Piña colada)
        case "5":
            precioBebida = 18000; // Precio de la bebida 5 (Sangría sin alcohol)
            break;
        default:
            precioBebida = 0; // Precio por defecto si no se selecciona una bebida válida
    }

    // Calculamos el total a pagar utilizando las variables
    var totalPlatos = cantidadPlatos * precioPlato;
    var totalBebidas = cantidadBebidas * precioBebida;
    var totalAPagar = totalPlatos + totalBebidas; //resultado

    // Mostramos el resultado al usuario
    document.getElementById("resultado").textContent = "Total a pagar: $" + totalAPagar;
    document.getElementById("respuesta").style.display = "block";
}
