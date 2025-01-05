function calculate(){
    var height= (document.getElementById("height").value)/100
    var weight= (document.getElementById("weight").value)/100

    var imc=weight / height ** 2;
    var text=""
    if(imc<18.5){
        text="Você está com peso baixo."
    }
    else if(imc<24.9){
        text="Você está no peso ideal."
    }
    else if(imc<29.9){
        text="Você está com sobrepeso."
    }
    else if(imc<39.9){
        text="Você está com obesidade."
    }
    else if(imc>39.9){
        text="Você está com obesidade mórbida."
    }
    document.getElementById("text_area").innerText=text
}