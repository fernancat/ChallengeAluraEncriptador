let elementoArea = document.getElementById('textoArea')
let elementoAreaDos = document.getElementById('textoAreaDos')

let diccionario = {
    "e":"enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
   }




function encriptar(){
   let cadenaGenerada = "";
   let textoArea = elementoArea.value; 
   let cadena = "";
   
   for (i = 0; i < textoArea.length; i++){
      if(diccionario[textoArea[i]] != undefined){
         cadena+= diccionario[textoArea[i]]
      }else{
         cadena+=textoArea[i]
      }
   }
   
   elementoAreaDos.value = cadena

}


function desencriptar(){

}


