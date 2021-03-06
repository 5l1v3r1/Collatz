/**
 * Permite formatear un número con los espacios necesarios delante.
 * Modificación de http://stackoverflow.com/a/10073788
 */
function pad (n, width, z)
{
	z = z || ' ';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


/**
 * Función para calcular la serie de manera recursiva y añadirla al documento.
 */
function collatz (num, paso, elem)
{
	var txt
	var str

	if (num > 1)
	{
		if ((num % 2) == 0)
		{
			num /= 2
		}
		else
		{
			num *= 3
			num ++
		}

		paso ++

		str = "Paso " + pad (paso, 5) + ": " + pad (num, 10) + "\n"

		console.log ("Paso %5d: %10d", paso, num)

		txt = document.createTextNode (str)
		elem.appendChild (txt)

		collatz (num, paso, elem)
	}
}


/**
 * Función principal para llamar a collatz ()
 */
function calcular ()
{
	var num = document.getElementById ('num').value
	var pasos = document.getElementById ('pasos')
	var txt

	/* Elimina los elementos que pudiera haber por ejecuciones pasadas */
	while (pasos.hasChildNodes())
	{
		pasos.removeChild (pasos.firstChild);
	}

	txt = document.createTextNode ("\nNúmero inicial: " + num + "\n")
	pasos.appendChild (txt)

	console.log ("\nNúmero inicial: %d\n", num)
	collatz (num, 0, pasos)
	console.log ("---- FIN DE LA SERIE ----")

	txt = document.createTextNode ("---- FIN DE LA SERIE ----")
	pasos.appendChild (txt)
}
