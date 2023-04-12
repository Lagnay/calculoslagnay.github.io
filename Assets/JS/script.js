do {
    var numero = parseInt(prompt("Seleccione que desea hacer: \n 1.- Calcular cuál número es mayor \n 2.- Sumar \n 3.- Restar \n 4.- Multiplicar \n 5.- Dividir \n 6.- Mostrar los números ingresados \n 7.- Salir"));


    switch (numero) {
        case 1:

            let num1 = parseInt(prompt("Ingrese el primer número"));
            let num2 = parseInt(prompt("Ingrese el segundo número"));

            if (num1 > num2) {
                alert("El número mayor es: " + num1);
            } else {
                alert("El número mayor es: " + num2);
            }
            break;

        case 2:

            let num13 = parseInt(prompt("Ingrese el primer número"));
            let num14 = parseInt(prompt("Ingrese el segundo número"));
            resultado2 = suma(num13, num14);
            alert("La suma de " + num13 + " + " + num14 + " es " + resultado2);
            function suma(num13, num14) {
                resultado2 = num13 + num14;
                return resultado2;
            }
            break;

        case 3:

            let num5 = parseInt(prompt("Ingrese el primer número"));
            let num6 = parseInt(prompt("Ingrese el segundo número"));
            resultado3 = resta(num5, num6)
            alert("La resta de " + num5 + " - " + num6 + " es " + resultado3);
            function resta(num5, num6) {
                resultado3 = num5 - num6;
                return resultado3;
            }
            break;

        case 4:

            let num7 = parseInt(prompt("Ingrese el primer número"));
            let num8 = parseInt(prompt("Ingrese el segundo número"));
            resultado4 = multiplicacion(num7, num8)
            alert("La multiplicación de " + num7 + " * " + num8 + " es " + resultado4);
            function multiplicacion(num7, num8) {
                resultado4 = num7 * num8;
                return resultado4;
            }
            break;

        case 5:
            let num9 = parseInt(prompt("Ingrese el primer número"));
            let num10 = parseInt(prompt("Ingrese el segundo número"));
            if (num10 !=0) {
                resultado5 = num9 / num10;
            }else{
                alert("No se puede dividir un número por 0");
            }
            resultado5 = division(num9, num10);
            alert("La división de " + num9 + " / " + num10 + " es " + resultado5);
            function division(num9, num10) {
                resultado5 = num9 / num10;
                return resultado5;
            }
            break;

        case 6:
            let num11 = parseInt(prompt("Ingrese el primer número"));
            let num12 = parseInt(prompt("Ingrese el segundo número"));
            resultado6 = vernumeros(num11, num12);
            alert("El primero número es: " + num11 + " y el segundo número es: " + num12);
            function vernumeros(num11, num12) {
                resultado6 = num11, num12;
                return resultado6;
            }
            break;

        case 7:
            alert("Gracias por participar");
            break;

        default:
            alert("Elección incorrecta. Adiós!");
            break;
    }
} while (numero != 7);