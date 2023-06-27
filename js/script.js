posicaox = 10;
$("#person").css("left",posicaox+"px")

posicaoy = 480;
$("#person").css("top",posicaoy+"px")




$("#btnBaixo").click(
    function () {
        posicaoy += 20  
        $("#person").animate({ top: posicaoy + "px" }, { duration: 200 })
    }
)
$("#btnCima").click(
    function () {
        posicaoy -= 20 
        $("#person").animate({ top: posicaoy + "px" }, { duration: 200 })
    }
)
$("#btnEsquerda").click(
    function () {
        posicaox -=10
        $("#person").animate({ left:posicaox +"px" }, { duration: 200 })
    }
)
$("#btnDireita").click(
    function () {
        posicaox +=10
        $("#person").animate({ left: posicaox + "px" }, { duration: 200 } )
    }
)





