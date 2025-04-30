 function toggleMode() {
    const html = document.documentElement
    //Segunda-Forma-De-O-switch-Funcionar
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#porfile img")

    //substituir a imagem
    if(html.classList.contains("light")) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
     }else{
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/Avatar.png")
        }
    }





    
        //Primeira-Forma-De-Fazer-O-switch-Funcionar
    //if(html.classList.contains('light')){
    //  html.classList.remove('light')
    //}else{
    //html.classList.add('light')
    //}