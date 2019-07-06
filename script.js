
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);


    if(eleccionUsuario == 0){
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="rojo">Piedra </b></p>  ';
            document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="azul">Papel</b></p>';
            document.getElementById('result').innerHTML ='Perdiste :C';
            document.getElementById('win').innerHTML ='0';
            document.getElementById('lose').innerHTML ='1';
        }else{
            if(opciones[eleccionMaquina] == 2){
            document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="rojo">Piedra </b></p>  ';
            document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="verde">Tijera</b></p>';
            document.getElementById('result').innerHTML ='Ganaste :D';
            document.getElementById('win').innerHTML ='1';
            document.getElementById('lose').innerHTML ='0';

            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="rojo">Piedra </b></p>  ';
                    document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="rojo">Piedra</b></p>';
                    document.getElementById('result').innerHTML ='Empate';
                    document.getElementById('win').innerHTML ='0';
                    document.getElementById('lose').innerHTML ='0';
                   

                }
            }
        }
    }

    if(eleccionUsuario == 1){//el usuario eligio papel
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="azul">Papel </b></p>  ';
            document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="verde">Tijera</b></p>';
            document.getElementById('result').innerHTML ='Perdiste :C';
            document.getElementById('win').innerHTML ='0';
            document.getElementById('lose').innerHTML ='1';

        }else{
            if(opciones[eleccionMaquina] == 0){
            document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="azul">Papel </b></p>  ';
            document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="rojo">Piedra</b></p>';
            document.getElementById('result').innerHTML ='Ganaste :D';
            document.getElementById('win').innerHTML ='1';
            document.getElementById('lose').innerHTML ='0';

            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="azul" >Papel </b></p>  ';
                    document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="azul" >Papel</b></p>';
                    document.getElementById('result').innerHTML ='Empate :D';
                    document.getElementById('win').innerHTML ='0';
                    document.getElementById('lose').innerHTML ='0';


                }
            }
        }
    }

    if(eleccionUsuario == 2) {//el usuario eligio tijera
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="verde">Tijera </b></p>  ';
            document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="azul">Papel</b></p>';
            document.getElementById('result').innerHTML ='Ganaste :D';
            document.getElementById('win').innerHTML ='1';
            document.getElementById('lose').innerHTML ='0';


        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('opcion').innerHTML ='<p> Elegiste: <b class="verde">Tijera </b></p> ';
                document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="rojo">Piedra</b></p>' ;
                document.getElementById('result').innerHTML ='Perdiste :C';
                document.getElementById('win').innerHTML ='0';
                document.getElementById('lose').innerHTML ='1';


            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('opcion').innerHTML ='<p>Elegiste: <b class="verde">Tijera </b></p>';
                    document.getElementById('pc').innerHTML ='<p> La PC Eligio: <b class="verde">Tijera</b></p>' ;
                    document.getElementById('result').innerHTML ='Empate';
                    document.getElementById('win').innerHTML ='0';
                    document.getElementById('lose').innerHTML ='0';


                }
            }
        }
    }
    document.getElementById('opcion').style.display = "";
}