function MostrarNome() {
    let Nome= document.getElementById('pnome').value;
    let Sobrenome= document.getElementById('psobre').value;
    let NomeCompleto= Nome +' '+ Sobrenome;
    alert('Olá'+ NomeCompleto);

    
}
let valor1;
let valor2;
let resultado;
function somar() {
    valor1= document.getElementById('pv1').value;
    valor2= document.getElementById('pv2').value;
    if (valor1==""||valor2=="" ) {
        alert("Insira um número");
        
    }
    else{
        resultado=parseInt(valor1)+parseInt(valor2);
        alert("o resultado da soma é "    +resultado);
    }


    
}
function sub() {
    valor1= document.getElementById('pv1').value;
    valor2= document.getElementById('pv2').value;
    if (valor1==""||valor2=="" ) {
        alert("Insira um número");
        
    }
    else{
        resultado=parseInt(valor1)-parseInt(valor2);
        alert("o resultado da subtração é "    +resultado);
    
        
    }
    


    
}
function multi() {
    valor1= document.getElementById('pv1').value;
    valor2= document.getElementById('pv2').value;
   
    if (valor1==""||valor2=="" ) {
        alert("Insira um número");
        
    }
    else{
        resultado=parseInt(valor1)*parseInt(valor2);
        alert("o resultado da multiplicação é "    +resultado);
    }
   


    
}
function div() {
    valor1= document.getElementById('pv1').value;
    valor2= document.getElementById('pv2').value;
   
    if (valor1==""||valor2=="" ) {
        alert("Insira um número");
        
    }
    else if(valor2==0){
        alert("Não Dividirás por ZERO")

    }
    else{
        resultado=parseInt(valor1)/parseInt(valor2);
        alert("o resultado da divisão é "    +resultado);
    }
   


    
}


