function validar_form_contato(){
    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var idade = formcontato.idade.value;
    var numero = formcontato.numero.value;
    var checkBox = document.getElementById("cPed");
    
    if(nome == ""){
        alert("Campo nome é obrigatório!");
        formcontato.nome.focus();
        return false;
    }if(email == ""){
        alert("Campo email é obrigatório!");
        formcontato.email.focus();
        return false;
    }if(idade == ""){
        alert("Campo idade é obrigatório!");
        formcontato.idade.focus();
        return false;
    }if(numero == ""){
        alert("Campo celular é obrigatório!");
        formcontato.numero.focus();
        return false;
    }
     if (checkBox.checked == false){
         alert("Você não tem idade (+18) para ver esse filme.");
         return false;
     }
}
    
    function calc_totalint(){
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 20;
    document.getElementById('cTot').value = tot;
}