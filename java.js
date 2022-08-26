function carregar(){

    let data = new Date()
    let datas =data.getHours()
    document.getElementById(imagem)
    let msg =  window.document.getElementById("titulo")
    msg.innerHTML = `Agora são ${datas} Horas`

    if (datas>=6 && datas<13){
        document.getElementById("myImageId").src="imagens/manha.jpg";
        document.getElementById("titulo2").innerHTML = "manha"
        
    }
    else if (datas>=13 && datas<18){
        document.getElementById("myImageId").src="imagens/tarde.jpg";
        document.querySelector("#titulo2").innerHTML= "tarde";
    }
    else if (datas>=19 && datas<=23){
        document.getElementById("myImageId").src="imagens/noite.jpg"
        document.getElementById("titulo2").innerHTML= "noite"
    }
    else if (datas>=00 && datas<=5){
        document.getElementById("myImageId").src="imagens/noite.jpg"
        document.getElementById("titulo2").innerHTML= "noite"
    }
    
}



