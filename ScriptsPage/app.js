let elementoArea = document.getElementById('textoArea')
let elementoAreaDos = document.getElementById('textoAreaDos')

let diccionario = {
    "e":"enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat",
   }

let diccionarioInverso = {};
for (let clave in diccionario) {
    diccionarioInverso[diccionario[clave]] = clave;
}


function encriptar(){
   let textoArea = elementoArea.value; 
   let cadena = "";
   

   if (verificarMayuscula()){
      return
   }else{
      for (i = 0; i < textoArea.length; i++){
         if(diccionario[textoArea[i]] != undefined){
            cadena+= diccionario[textoArea[i]];
         }else{
            cadena+=textoArea[i];
         }
      }
      
      elementoAreaDos.value = cadena;
   }

}


function desencriptar(texto){
   textoArea = elementoArea.value;

   let textoAreaDos = elementoAreaDos.value;
   let cadena = "";

   for (let clave in diccionarioInverso) {
      textoAreaDos = textoAreaDos.replaceAll(clave, diccionarioInverso[clave]);
   }

   elementoAreaDos.value = textoAreaDos;
  

}

function copiar(){
   navigator.clipboard.writeText(elementoAreaDos.value);
   alert("texto copiado!");
}

function verificarMayuscula(){
   textoArea = elementoArea.value
   for (i =0; i < textoArea.length; i++){
      if (textoArea[i] != ' ' && textoArea[i] === textoArea[i].toUpperCase()){
         elementoArea.value = "";
         alert("No puedes ingresar texto en mayuscula");
         return true;
      }
   }
  
}


