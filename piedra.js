//genera un numero aleatorio entre un rango de enteros 
function aleatorio (minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo); 
	return numero; 
} 

var piedra = 0; 
var papel = 1; 
var tijera = 2; 
var lagarto = 3;
var Spock = 4; 

var opciones = ["piedra", "papel", "tijera", "lagarto", "Spock"]; 

var opcionUsuario; 
var opcionMaquina = aleatorio(0,4); 

opcionUsuario = prompt("¿que eliges?\npiedra: 0\npapel: 1\ntijera: 2 \nlagarto: 3 \nSpock: 4", 0);

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
		alert("perdiste!"); 
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!"); 
	}
	else if(opcionMaquina == lagarto)//piedra aplasta lagarto 

		alert("Ganaste"); 
	{
	else if(opcionMaquina == Spock)//spock vaporiza a piedra 
		alert("perdiste")
	}

}

//opcion papel 
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
	else if(opcionMaquina == lagarto)//lagarto come papel 
	{
		alert("perdiste")
	}
	else if(opcionMaquina == Spock)// papel desmiente a spock 
	{
		alert("ganaste")
	}

//opcion tijera 	
}
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
	else if(opcionMaquina == Spock)
	{
		alert("perdiste"); 
	}


//opcion lagarto 
} 
else if (opcionUsuario == lagarto)
{
	if(opcionMaquina == piedra)//piedra aplasta lagarto 
	{
		alert("perdiste"); 
	}	
	else if(opcionMaquina == papel)//lagarto come papel 
	{
		alert("Ganaste")
	}
	else if(opcionMaquina == tijera)
	{
		alert("perdiste")//tijeras decapitan lagarto
	}
	else if(opcionMaquina == lagarto)
	{
		alert("empate")
	}
	else if(opcionMaquina == Spock)//lagarto envenena a spock 
	{
		alert("ganaste")
	}
}

//opcion Spock
} 
else if (opcionUsuario == Spock)
{
	if(opcionMaquina == piedra)//spock vaporiza piedra  
	{
		alert("ganaste"); 
	}	
	else if(opcionMaquina == papel)//papel desmiente a spock
	{
		alert("perdiste")
	}
	else if(opcionMaquina == tijera)
	{
		alert("ganaste")//spock aplasta tijera
	}
	else if(opcionMaquina == lagarto)//lagarto envenena a spock 
	{
		alert("perdiste")
	}
	else if(opcionMaquina == Spock)
	{
		alert("empate")
	}
}

}
else 
{ 
	alert("Lo siento, la opcion que elegiste no es valida!")
}

