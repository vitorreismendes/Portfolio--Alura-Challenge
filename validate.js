//Seu JavaScript de validação aqui

function checarForm() {
    // Nome 
    if(document.getElementById("nome").value == ""){
        alert('Por favor, preencha o campo nome!');
        document.getElementById("nome").focus();
        return false
    } 

    if(document.getElementById("nome").value.length > 50){
        alert('Por favor, preencha o campo com um nome válido!');
        document.getElementById("nome").focus();
        return false
    }
    
    // Email
    if(document.getElementById("email").value == ""){
        alert('Por favor, preencha o campo email!');
        document.getElementById("email").focus();
        return false
    }

    if(document.getElementById("email").value.search("@") == -1){
        alert('Por favor, preencha o campo com um email válido!');
        document.getElementById("email").focus();
        return false
    }

    if(document.getElementById("email").value.indexOf('.') == -1){
        alert('Por favor, preencha o email com o final ".com" ou ".com.br"!');
        document.getElementById("email").focus();
        return false
    }

    // Assunto
    if(document.getElementById("assunto").value == ""){
        alert('Por favor, preencha o campo assunto!');
        document.getElementById("assunto").focus();
        return false
    }

    if(document.getElementById("assunto").value.length > 50){
        alert('Por favor, preencha o campo assunto com até 50 caracteres!');
        document.getElementById("assunto").focus();
        return false
    }
        
    // Mensagem
    if(document.getElementById("mensagem").value == ""){
        alert('Por favor, preencha o campo mensagem!');
        document.getElementById("mensagem").focus();
        return false
    } 

    if(document.getElementById("mensagem").value.length > 300){
        alert('Por favor, preencha o campo assunto com até 300 caracteres!');
        document.getElementById("mensagem").focus();
        return false;
    }


}