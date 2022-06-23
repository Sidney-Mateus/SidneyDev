function EnviarDados(formJS) {
    var pessoa={
        nome:"",
        idade:"",
        email:"",
        data:"",
        comentario:""
    };

    pessoa.nome=formJS.nome.value;
    pessoa.idade=formJS.idade.value;
    pessoa.email=formJS.email.value;
    pessoa.data=formJS.data.value;
    pessoa.comentario=formJS.obs.value;


    document.getElementById("nomec").innerHTML=("Nome: " + pessoa.nome);
    document.getElementById("idadec").innerHTML=("Idade: " + pessoa.idade);
    document.getElementById("emailc").innerHTML=("Email: " + pessoa.email);
    document.getElementById("datac").innerHTML=("Data: " + pessoa.data);
    document.getElementById("obsc").innerHTML=("Comentários: " + pessoa.comentario);
}