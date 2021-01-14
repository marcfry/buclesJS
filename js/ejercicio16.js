/*16- Realiza un script que pida una texto de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let texto = prompt("Introduce Texto:");
let numcar = texto.length;
let i;
let car;
let salida = "";
for (i = 0; i < numcar; i++) {
    car = texto.charAt(i);
    salida = car + salida;
}
document.write(salida);