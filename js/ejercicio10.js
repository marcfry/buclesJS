/*10- Realiza un script que pida número de filas y columnasnas y escriba una tabla. 
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let i, j;
let filas = Number(prompt("Introduce el número de filas"));
let columnas = Number(prompt("Introduce el número de columnas"));
let resultado = filas * columnas;
document.write("<table border>");
for (i = 0; i < filas; i++) {
    document.write("<tr>");
    for (j = 0; j < columnas; j++) {
        document.write("<td>");
        document.write(resultado);
        resultado--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");