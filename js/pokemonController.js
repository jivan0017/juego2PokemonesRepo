/*
  Variables miembro del bloque general JS
  --------------------------------------------------------
  variables que definen las cualidades del pokemon a crear
*/
var nombrePok = "";
var vidasPok = 0;
var nivelPelea = 0;
var niveltaque = 0;
//**********   DEFINICION DE LOS POKEMONES CANDIDATOS A PELEAR
var  megaTroll ;
var  ultraPika ;
var  ultraBest ;

// luchador estrella
var  pikachu ;
var  ultraDyno ;

/*
  Objeto  JSON que almacena constantes de las rutas para mostrar las imagenes
  de los POKEMONES  a luchar
*/
var rutaImagenesPokemones = {


	urlImageMegaTroll : "imagenesPokemon/megaTroll.jpg",
	urlImageUltraPika : "imagenesPokemon/ultraPoke.jpg",
	urlImagePicachu : "imagenesPokemon/picachu.jpg",
	urlImageUltraDyno : "imagenesPokemon/ultraDyno.jpg"

};

var imagenesView = {

	idImageMegaTroll : "",
	idImageUltraPika : "",
	idImagePilachu : "",
	idImageUltraDyno :""

};




var contadorSelecciones = 0;

//**********  FINAL DE LAS VARIABLES QUE ALMACENAN LOS POKEMONES


//variables de la pelea
var luchador1 = null;
var oponente1 = null;

var integrante1 = null;
var integrante2 = null;
var integrante3 = null;
var integrante4 = null;

var nombreOrdenPelea;
var numeroPokemon;



var valSeleccionPokes = false;
var cupoLuchadores = 2;

var pokemonSeleccionado =0;

var btnSeleccionarEvent;
var btnIniciarBatalla;


//*********************************	LOGICA DE LA PELEA
//crearPikachu();
//creando los jugadores disponibles
 megaTroll = new classPikachu("MegaTroll", 2000, 400, 400, "Soy mega TROOOOOLL", "imagenesPokemon/interrogacion.jpg");

 ultraPika = new classPikachu("UltraPoke", 2000, 500, 400, "Soy ultra pokemon!", "imagenesPokemon/ultraPoke.jpg");



 pikachu = new classPikachu("Pikachu", 2004, 610, 435, "Soy el temible PIKACHU!", "imagenesPokemon/ultraPoke.jpg");

 ultraDyno = new classPikachu("ultraDyno", 2000, 602, 436, "Soy pokemon tipo DINOSAURIO!", "imagenesPokemon/ultraPoke.jpg");



mostrarAlertTest();

//Genera un número aleatorio entre un rango de enteros
function retornaNumeroAleatorio(minimo, maximo)
{
	//variable que captura una referencia de un numero aleatorio en un rango definido
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}


//funcion que simulara una clase para crear ejemplares de pokemon
function classPikachu(nombre, vidas, nivelPelea, nivelAtaque, gritaPoke, pathImage){
		//atributos de la funcion
	this.nombre = nombre;
	this.vidas = vidas;
	this.nivelPelea = nivelPelea;
	this.nivelAtaque = nivelAtaque;
	this.gritoPokemon =  gritaPoke

	this.pathImage = pathImage;

	//funcion interna
	this.gritoPokemon = function pokemonGrita(){
		alert("Yo digo: " + gritoPokemon);
	}
}


//funcion que crea un pokemon
function crearPikachu(){
	var pika = new classPikachu("pika", 100, 60, 23, "Pikachu soy yooooo!!!!!!!!!!!");
	nombrePok = pika.nombre;

	nombrePokemon.textContent = "vidas:  " + pika.vidas  + ",  nivel de pelea: " + pika.nivelPelea + ", Fuerza: " + pika.nivelAtaque;

	//return pika;
	//return nombrePok;
}


function retornarPoderes (classPikachu){

	var pok = classPikachu;
	//var poderes = pok.nivelPelea + " : nivel de pelea";
	return pok;
}


//funcion que muestra alertas pasandole como parametro el texto a mostrar
function mostrarAlertTest(nombre){
	
	//alert("esto esta en la funcion mostrarTest" + megaTroll.nivelAtaque);
	//inicio del programa
}


//  Carga una imagen la primer vez
function pintarImagenPorDefecto(identificador){
	//cargando imagen por defecto
	if (identificador == 1){
		var imagen="imagenesPokemon/interrogacion.jpg";
	    
	    document.images["imagenPokemon"].src=imagen;  
	    //imagenPokemonRetador
	    document.images["imagenPokemonRetador"].src=imagen;
	    document.images["imagenPokemonRetado"].src=imagen;


	    datosPeleaPokemones.textContent = "No hay pelea por ahora";

	}
}






function pintarRivalesPelea (rival){

	if (rival == 1){
			var imagen= rutaImagenesPokemones.urlImageMegaTroll;

			if (nombreOrdenPelea == "RETADOR"){
				document.images["imagenPokemonRetador"].src=imagen;
			}else if (nombreOrdenPelea == "RETADO"){
   				document.images["imagenPokemonRetado"].src=imagen;
			}

	   
	}else if(rival == 2){
			var imagen=rutaImagenesPokemones.urlImageUltraPika;
			if (nombreOrdenPelea == "RETADOR"){
				document.images["imagenPokemonRetador"].src=imagen;
			}else if (nombreOrdenPelea == "RETADO"){
				document.images["imagenPokemonRetado"].src=imagen;
			}

    }else if(rival == 3){
			var imagen=rutaImagenesPokemones.urlImagePicachu;
			if (nombreOrdenPelea == "RETADOR"){
				document.images["imagenPokemonRetador"].src=imagen;
			}else if (nombreOrdenPelea == "RETADO"){
				document.images["imagenPokemonRetado"].src=imagen;
			}			
	        

    } else if(rival == 4){
			var imagen=rutaImagenesPokemones.urlImageUltraDyno;
			if (nombreOrdenPelea == "RETADOR"){
				document.images["imagenPokemonRetador"].src=imagen;
			}else if (nombreOrdenPelea == "RETADO"){
				document.images["imagenPokemonRetado"].src=imagen;
			}			

	}

}

function retornarSeleccion (contador){

	if (contador == 1) {
		return "RETADOR";
	}else{
		return "RETADO";
	}
}

/*
Funcion para crear una imagen dependiendo de la seleccion
*/
function pintarImagenSeleccionada(numeroImagen){


				if (numeroImagen == 2){

					contadorSelecciones++;

					var imagen= rutaImagenesPokemones.urlImageMegaTroll;

				    document.images["imagenPokemon"].src=imagen;




					//setInterval(function(){
							//Código a ejecutar
							nombrePokemon.textContent = megaTroll.nombre;
					  //  },3000);


				    




				    datosGenerales.textContent = "vidas:  " + megaTroll.vidas  + ",  nivel de pelea: " + megaTroll.nivelPelea + ", Fuerza: " + megaTroll.nivelAtaque;
				    valSeleccionPokes = true;

				    var resultado = retornarSeleccion(contadorSelecciones);

				    nombreOrdenPelea = resultado;
				    numeroPokemon = 1;
				    if (resultado == "RETADOR"){
				    	luchador1 = megaTroll;
				    }else if (resultado == "RETADO"){
				    	oponente1 = megaTroll;
				    }

				    
				    //integrante1 = luchador1;
				    //integrante2 = ultraPika;

				    btnSeleccionar.focus;

				    pokemonSeleccionado = numeroImagen;
                    cambiar_fondo_con_style();
				    //temporizar(3, 4000);

				     //cupoLuchadores --;
				} else if(numeroImagen ==3){

					contadorSelecciones++;

					var imagen= rutaImagenesPokemones.urlImageUltraPika

				    document.images["imagenPokemon"].src=imagen;

				    nombrePokemon.textContent = ultraPika.nombre;
				    datosGenerales.textContent = "vidas:  " + ultraPika.vidas  + ",  nivel de pelea: " + ultraPika.nivelPelea + ", Fuerza: " + ultraPika.nivelAtaque;
				    valSeleccionPokes = true;
				    //cupoLuchadores --;
				    item2.disabled = true;

				    pokemonSeleccionado = numeroImagen;

				    var resultado = retornarSeleccion(contadorSelecciones);

					nombreOrdenPelea = resultado;
					numeroPokemon = 2;
				    if (resultado == "RETADOR"){
				    	luchador1 = ultraPika;

				    }else if (resultado == "RETADO"){
				    	oponente1 = ultraPika;
				    }

                    cambiar_fondo_con_style();

				   // temporizar(3, pokemonSeleccionado);
				}

				// control de cambio, se añaden 2 pokemones más


				else if (numeroImagen == 4){

					contadorSelecciones++;

					var imagen= rutaImagenesPokemones.urlImagePicachu;

					//el parametro de la imagen desde la vista
				    document.images["imagenPokemon"].src=imagen;

				    nombrePokemon.textContent = pikachu.nombre;
				    datosGenerales.textContent = "vidas:  " + pikachu.vidas  + ",  nivel de pelea: " + pikachu.nivelPelea + ", Fuerza: " + pikachu.nivelAtaque;
				    valSeleccionPokes = true;
				    //cupoLuchadores --;
				    item2.disabled = true;

				    pokemonSeleccionado = numeroImagen;

				    var resultado = retornarSeleccion(contadorSelecciones);
				    nombreOrdenPelea = resultado;
				    numeroPokemon = 3;
				    if (resultado == "RETADOR"){
				    	luchador1 = pikachu;
				    }else if (resultado == "RETADO"){
				    	oponente1 = pikachu;
				    }


                    cambiar_fondo_con_style();
				}

				else if (numeroImagen == 5){
					contadorSelecciones++;


					var imagen= rutaImagenesPokemones.urlImageUltraDyno;

					//el parametro de la imagen desde la vista
				    document.images["imagenPokemon"].src=imagen;

				    nombrePokemon.textContent = ultraDyno.nombre;
				    datosGenerales.textContent = "vidas:  " + ultraDyno.vidas  + ",  nivel de pelea: " + ultraDyno.nivelPelea + ", Fuerza: " + ultraDyno.nivelAtaque;
				    valSeleccionPokes = true;
				    //cupoLuchadores --;
				    item2.disabled = true;

				    pokemonSeleccionado = numeroImagen;

				    var resultado = retornarSeleccion(contadorSelecciones);
				    nombreOrdenPelea = resultado;
				    numeroPokemon = 4;
				    if (resultado == "RETADOR"){
				    	luchador1 = ultraDyno;
				    }else if (resultado == "RETADO"){
				    	oponente1 = ultraDyno;
				    }



                    cambiar_fondo_con_style();					
				}
				// final del control de cambio
				else {

			        valSeleccionPokes = false;
				}
	
				//REINICIANDO LA VARIABLE QUE IDENTIFICA QUE POKEMON HA SIDO SELECCIONADO
				pokemonSeleccionado = 0;

}

// FUNCIONALIDADES DE LA BATALLA:
function escuchadorBotonesDeComando_seleccion_contrincantes() {
	btnSeleccionarEvent = document.getElementById("btnSeleccionar");
	btnSeleccionarEvent.addEventListener("click", main_ejecucionEventoClick_btnSeleccionar);




}

function escuchadorBoton_IniciarBatallaPokemones () {
    var param = "pelea1";

    btnIniciarBatalla = document.getElementById("btnIniciarBatalla");
    btnIniciarBatalla.addEventListener("click", function(){main_ejecucionEventoClick_iniciarBatalla(param)});
}



//METODO PARA DETONAR LA BATALLA DE 2 POQUEMONES
function main_ejecucionEventoClick_iniciarBatalla (param){

	
	//alert(param);
	//var d = document.getElementById("imagenContrincantes1");
	temporizarTropelPokemones(integrante1, integrante2);

}





// METODO PARA CUANDO SELECCIONEN A UN POKEMON
function main_ejecucionEventoClick_btnSeleccionar(){
	//mostrarAlertTest("mensaje");


		//valid9ar si existe alguien seleccionado:
		if (cupoLuchadores == 0){
			alert("Ya no hay mas candidadtos \n para iniciar la pelea, presione click en el boton \n ubicado en la parte inferior de los contrincantes...");
			btnSeleccionarEvent.disabled = true;
		}

	if (valSeleccionPokes == true){
		
        //PINTAR EL RETADOR
        if (luchador1 != null){
        	pintarRivalesPelea(numeroPokemon);
        	cajaIzq.textContent = "caracteristicas cargadas";

        	var poderes = "N. PELEA: [ " + parseInt(retornarPoderes(luchador1).nivelPelea) + " ] \n N. Ataque: [ " +  parseInt(retornarPoderes(luchador1).nivelAtaque)  + " ]";
        	cajaIzq.textContent = poderes;
        	
        	integrante1 = luchador1;

        	luchador1 = null;
        	cupoLuchadores-- ;

        	desabilitarCajaMenuPokemon(numeroPokemon);

        }else if (oponente1 != null){
			pintarRivalesPelea(numeroPokemon);
			
			var poderes = "N. PELEA: [ " + parseInt(retornarPoderes(oponente1).nivelPelea) + " ], N. Ataque: [ " +  parseInt(retornarPoderes(oponente1).nivelAtaque)  + " ]";
        	cajaIzq2.textContent = poderes;
        	
        	integrante2 = oponente1;

        	oponente1 = null;


        	desabilitarCajaMenuPokemon(numeroPokemon);

            cupoLuchadores-- ;

        }
		var text = document.getElementById("textPokemon");

        if (luchador1 != null  && oponente1 != null){
            text.value = "Ya estan los rivales!";
        }else{
        	text.value = "Seleccione el rival ahora";
        }

				//valid9ar si existe alguien seleccionado:
		if (cupoLuchadores == 0){
			alert("Ya no hay mas candidatos \n para iniciar la pelea, presione click en el boton <INICIAR PELEA> \n ubicado en la parte inferior de los contrincantes...");

			btnSeleccionarEvent.disabled = true;
		}
	}

}




function desabilitarCajaMenuPokemon(numeroPoke){


	if ( numeroPoke == 1){
		    cajaMenu1.disabled = true;
			cajaMenu1.textContent = "seleccionado";
	}else if (numeroPoke == 2){
		    cajaMenu2.disabled = true;
			cajaMenu2.textContent = "seleccionado";
	} else if (numeroPoke == 3){
		    cajaMenu3.disabled = true;
			cajaMenu3.textContent = "seleccionado";		
	} else if (numeroPoke == 4){
		    cajaMenu4.disabled = true;
			cajaMenu4.textContent = "seleccionado";		
	}

}











function cambiar_fondo_con_style(){
//var color = document.getElementById("cajaMenu1").style.;
//document.body.style.backgroundColor= color;
document.getElementById('item1').style.backgroundColor = '#A1A2AE;';
}





function temporizar (segundos,menu){ 
 var milisegundos =segundos + (1000);
    //alert("Fin del tiempo, ha llegado a cero");
    setTimeout(function(){acabarCuentaAtras(menu)},1200);

}
	
function acabarCuentaAtras(menu){
	pintarImagenSeleccionada(menu);
    //pintarImagenSeleccionada(menu)
}


//funcion para iniciar BATALLA, forma de llamarlo :                temporizarTropelPokemones(integrante1, integrante2);
function temporizarTropelPokemones(pokemon1,pokemon2){
	  setTimeout(function(){

	  	iniciarTropelPokemones(pokemon1,pokemon2);

	  },3000);


	

}
function temporizarGolpeRetador(pokemon1){
	  setTimeout(function(){mostrarVidasContrincantes(pokemon1,1)},1000);
}

function temporizarGolpeRetado(pokemon2){
	  setTimeout(function(){mostrarVidasContrincantes(pokemon2,2)},1000);

}


function mostrarVidasContrincantes (vidas, quienGolepa){
	

	setTimeout(function(){

			if (quienGolepa == 1){
				datosPeleaPokemones.textContent = "golpea el retador, le quedan de vidas: " + vidas;
			}else if (quienGolepa == 2){
				datosPeleaPokemones.textContent = "golpea el retado, le quedan de vidas: " + vidas;
			}
		

	},3000);
	
	datosPeleaPokemones.textContent = "";

}

function iniciarTropelPokemones(pok1, pok2){
		this.pok1 = pok1;
	this.pok2 = pok2;


	var np = (pok1.vidas - 45);

	//alert(np);
	var vidasPokemon1 = this.pok1.vidas;
	var vidasPokemon2 = this.pok2.vidas;

	var ataquesPokemon1 =  this.pok1.nivelAtaque;
	var ataquesPokemon2 =  this.pok2.nivelAtaque;
	//SORTEAR QUIEN PEGA PRIMERO
	var caraYsello = retornaNumeroAleatorio(1,2);

	var factorNervios = retornaNumeroAleatorio(1,50);
	var factorNervios2 = retornaNumeroAleatorio(1,50);

	var indicador = 1;

	//VALIDACION PRE - BATALLA
    if (pok1 != null && pok2 != null){
    			indicador ++;


    			while (vidasPokemon1>= 0 || vidasPokemon2 >= 0){
    				//*************************** ataques por turnos  **************************
    				var x = (indicador%2);

    				if (x == 0){
    					 //pokemon1 golpea!
    					 var trompada = ataquesPokemon1;

    					 if (factorNervios < 25){
    					 	trompada = trompada + (factorNervios);
    					 }else{
    					 	trompada = trompada + (factorNervios) + 10;
    					 }


    					 //desempatar golpes aleatorios

    					 vidasPokemon2 = parseInt(vidasPokemon2 - trompada);

    					// temporizarGolpeRetador(vidasPokemon2);
    					//setTimeout(function(){mostrarVidasContrincantes(vidasPokemon2,1)},3000);
    					alert('GOLPEA EL POKEMON: '+ this.pok1.nombre +', vidas disponibles retador: ' + vidasPokemon2 + '\n vidas disponibles del oponente: ' + vidasPokemon1);

    					mostrarVidasContrincantes(vidasPokemon2,1);

    				} else { 

    					var trompada2 = ataquesPokemon2;
    					 if (factorNervios < 25){
    					 	trompada2 = trompada2 + (factorNervios2);
    					 }else{
    					 	trompada2 = trompada2 + (factorNervios2);
    					 }

    					 //desempatar golpes aleatorios
    					 vidasPokemon1 = parseInt(vidasPokemon1 - trompada2);
    					 //setTimeout(function(){mostrarVidasContrincantes(vidasPokemon1,2)},3000);
    					 alert('GOLPEA EL POKEMON: ' + this.pok2.nombre +', vidas disponibles oponente: ' + vidasPokemon1 + '\n vidas disponibles del retador: ' + vidasPokemon2);
    					 //temporizarGolpeRetado(vidasPokemon1);

    					 mostrarVidasContrincantes(vidasPokemon1,2);

    				}

    				indicador ++; 
    			}

    			var resultado1 = parseInt(vidasPokemon1);
    			var resultado2 = parseInt(vidasPokemon2);

    			alert("FINAL DE LA PELEA : " + resultado1 + ",   res2:  " + resultado2);

    			if (resultado1 > resultado2) {
    				alert(resultado1 + " , es menor que :  " + resultado2 + ", GANA POQUEMON 1 ::" + this.pok1.nombre);
    			}else {
    				alert(resultado1 + " , es mayor que :  " + resultado2 + ", GANA POQUEMON 2 ::" + this.pok2.nombre);
    			}
    }
	//alert(pok1.nivelPelea);
}