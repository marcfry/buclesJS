/*8- Crea script para generar pirámide siguiente con los números del 1 al número
 que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456 */

let numero = prompt("Introduce número menor de 50");
if (Number(numero) == numero) {
    if (numero > 0 && numero <= 50) {
        let rep, i;
        for (i = 0; i <= numero; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else if (numero != undefined) {
    alert(numero + " No es un número");
}