/*17- Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado.*/

let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduce un texto");
let textomin = texto.toLowerCase();
let posicion = 0;
let parar = false;
for (let i = 0; i < textomin.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);