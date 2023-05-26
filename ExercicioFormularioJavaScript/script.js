
let Nome= document.getElementById('inputName').value;
let Email= document.getElementById('inputEmail4').value;
let Email2= document.getElementById('inputEmail3').value;
let Senha= document.getElementById('inputPassword4').value;
let Senha2= document.getElementById('inputPassword3').value;
let Endereco= document.getElementById('inputAddress').value;
let Cidade= document.getElementById('inputCity').value;
let Estado= document.getElementById('inputState').value;
    function enviar() {
      
        if (Nome=="") {
            alert("Preencha o seu Nome");
            
        }
       else if  (Email=="") {
            alert("Preencha o seu Email");
            
        }
    
      else  if (Senha=="") {
            alert("Coloque a sua Senha")
            
        }
       
       else if (Endereco=="") {
        alert("Preencha seu Endereço")
       } 
    }
    function verificarEmail() {
        if (Email!=Email2) {
            alert("Campo Confirmar Email nao Confere")
            
        }
        
    }
    function verificarSenha() {
        if (Senha!=Senha2) {
            alert("Campo Confirmar Senha nao Confere")
            
        }
        
    }
    

    
   
   

