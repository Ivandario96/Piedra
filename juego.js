function aleatorio (minimo, maximo)
{
	var numero = Math.round( Math.random() * (maximo - minimo +1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿que eliges?\npiedra: 0\npapel: 1\ntijera: 2\nlagarto: 3\nspock: 4", 0);

alert("elegiste " + opciones[opcionUsuario]);
alert("la maquina eligio " + opciones[opcionMaquina]);


//opcion piedra
if(opcionUsuario == piedra)
    {

      if(opcionMaquina == piedra)
        {
          alert("Empate!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Perdiste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == spock)
        {
          alert("Ganaste!");
        }
    }
else if (opcionUsuario == papel)
{

	if(opcionMaquina == piedra)
	{
		alert("ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("perdiste!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("perdiste");
	}
	else if(opcionMaquina == spock)
	{
		alert("ganaste");
	}

}

//opcion tijera
else if (opcionUsuario == tijera)
{

	if(opcionMaquina == piedra)
	{
		alert("perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("ganaste");
	}
	else if(opcionMaquina == spock)
	{
		alert("perdiste");
	}

}

//opcion lagarto

else if (opcionUsuario == lagarto)
{

	if(opcionMaquina == piedra)
	{
		alert("perdiste");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("perdiste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("empate");
	}
	else if(opcionMaquina == spock)
	{
		alert("ganaste");
	}

}

//opcion spock
else if (opcionUsuario == spock)
{
	if(opcionMaquina == piedra)
	{
		alert("ganaste");
	}
	else if(opcionMaquina == papel)
	{
		alert("perdiste");
	}
	else if(opcionMaquina == tijera)
	{
		alert("ganaste");
	}
	else if(opcionMaquina == lagarto)
	{
		alert("perdiste");
	}
	else if(opcionMaquina == spock)
	{
		alert("empate");
	}

}

else if(opcionUsuario > 2)
  {
    alert("Lo siento, la opcion que elegiste no es valida!");
  }
