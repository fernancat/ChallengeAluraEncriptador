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
   

   for (i = 0; i < textoArea.length; i++){
      if(diccionario[textoArea[i]] != undefined){
         console.log(diccionario[textoArea[i]])
         cadena+= diccionario[textoArea[i]]
      }else{
         cadena+=textoArea[i]
      }
   }
   
   elementoAreaDos.value = cadena

}


function desencriptar(texto){
   textoArea = elementoArea.value

   let textoAreaDos = elementoAreaDos.value;
   let cadena = "";

   for (let clave in diccionarioInverso) {
      textoAreaDos = textoAreaDos.replaceAll(clave, diccionarioInverso[clave]);
   }

   elementoAreaDos.value = textoAreaDos;
  

}

function copiar(){
   navigator.clipboard.writeText(elementoAreaDos.value)
   alert("texto copiado!")
}

function verificarMayuscula(){
   let textoArea = elementoArea.value;

   if (/[A-Z]/.test(textoArea)){
      return true;
   }
}


