//15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Introduce texto:");
let numcar = texto.length;
texto = texto.toUpperCase();
let car;
let contador = 0;
let i;
for (i = 0; i < numcar; i++) {
    car = texto.charAt(i);
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de vocales: " + contador + ".");