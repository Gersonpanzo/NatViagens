//Dados
//Elementos Html
let ItemMais = document.getElementById("mais")
let maisMenu = document.getElementById("imaisMenu")
let aluguel = document.getElementById("aluguel")
let passeios = document.getElementById("passeios")
let body = document.getElementsByTagName("body")[0]
let main = document.getElementById("main")
//Variaveis para o slide show
let btnRadio1 = document.getElementById("btn1")
let btnRadio2 = document.getElementById("btn2")
let divmg1 = document.getElementById("divimg1")
let divimg2 = document.getElementById("divimg2")
//Variaveis do formulário
let lclAtual = document.getElementById("localAtual")
let lclDestino = document.getElementById("localDestino")
let totCriancas = document.getElementById("totCriancas")
let totAdultos = document.getElementById("totAdultos")
//Variaveis de Data 
let DataViagem = document.getElementById("dataViagem")
let data
let longTime
let dataAtual
let hora = null
let min = null
let sec = null
let mil = null
let desconto=new Date("2025-1-10")
//Vector de provícias 
let ArrayProvincias = ["Luanda", "luanda", "Benguela", "benguela", "Bié", "bié", "Malanje", "malanje", "Cuando Cubango", "cuando cubango", "Cuanza Norte", "cuanza norte", "Cuanza Sul", "cuanza sul", "Huíla", "huíla", "Cunene", "cunene", "Huambo", "huambo", "Cabinda", "cabinda", "Zaire", "zaire", "Lunda Norte", "lunda norte", "Lunda Sul", "lunda sul", "Moxico", "moxico", "Namibe", "namibe", "Uíge", "uíge"
]

//Menssagens de erro
let pErro1 = document.getElementById("ierroProviciaAtual")
let pErro2 = document.getElementById("ierroProviciaDestino")
let pErro3 = document.getElementById("ierroData")
let pErro4 = document.getElementById("ierroTotAdultos")
let pErro5 = document.getElementById("ierroTotCriancas")
let pErro6 = document.getElementById("ierroPerguntaRepetida")

//Enable do botão calcular 
let divBtnCalcular = document.getElementById("blcCalcular")
let btnCalcular = document.getElementById("btnCalcular")
let pCalcular = document.getElementById("pCalcular")


/*Variaveis da página de orcçamento */
let pResuTotAdultos = document.getElementById("resutotAdultos")
let pResuTotCriancas = document.getElementById("resutotCriancas")
let PResuData = document.getElementById("resuData")
let Total = document.getElementById("total")
/* Preço das provincias*/
let n1=0
let n2=0
Total=0
/*Fim  das variaveis */

/**/
//Fim Elementos Html

//Configurações do menu 
function menuMovel() {
    if (maisMenu.style.display == "none") {
        maisMenu.style.display = "flex"
    }
    else {
        maisMenu.style.display = "none"
    }
}
function retirarModal() {
    maisMenu.style.display = "none"
}

function menuItensSelected() {
    maisMenu.style.display = "none"
}
// fim das Configurações do menu

//configurações do slide show
function navegacao() {
    setInterval(function () {
        if (btnRadio1.checked) {
            btnRadio1.checked = false
            btnRadio2.checked = true
            divmg1.style.marginLeft = "-100%"
        }
        else if (btnRadio2.checked) {
            btnRadio1.checked = true
            btnRadio2.checked = false
            divmg1.style.marginLeft = "0px"
        }
    }, 7000)

}
setInterval(navegacao(), 1000)
/*Fim (Slide) */


//Configurações do formulário

//Verificação do formulário através do Evento blur

function dataViagemBlur() {
    data = new Date(DataViagem.value)
    dataAtual = new Date()
    longTime = new Date("2026-01-01")
    hora = dataAtual.getHours()
    min = dataAtual.getMinutes()
    sec = dataAtual.getSeconds()
    mil = data.getMilliseconds()
    data.setHours(hora)
    data.setMinutes(min)
    data.setSeconds(sec)
    data.setMilliseconds(mil)


    if (data.getTime() < dataAtual.getTime()) {
        pErro3.style.display = "block"

        
    }
    
    else if (data > longTime) {
        pErro3.innerHTML = "Está data está muito longe para fazer uma reserva."
        pErro3.style.display = "block"
    }
    else {
        pErro3.style.display = "none"
    }
}

// Fim das funções blur

//Verificação do formulário automática
setInterval(function () {


    if (totAdultos.value.length > 0 && totAdultos.value <= 0 || totAdultos.value > 50) {
        pErro4.style.display = "block"
    }
    if (totCriancas.value.length > 0 && totCriancas.value < 0 || totCriancas.value > 50) {
        pErro5.style.display = "block"
    }
   
    if (totAdultos.value >= 1 && totAdultos.value <= 50) {
        pErro4.style.display = "none"
    }
    if (totCriancas.value >= 1 && totCriancas.value <= 50) {
        pErro5.style.display = "none"
    }
    
    if (data >= dataAtual && data <= longTime) {
        pErro3.style.display = "none"
    }

    if (lclAtual.value == lclDestino.value ) {
        pErro6.style.display = "block"
    }
    if (lclAtual.value != lclDestino.value) {
        pErro6.style.display = "none"
    }
}, 1000)
//Fim

//Enable do botão 
setInterval(function () {
    if ( totAdultos.value >= 1 && totAdultos.value <= 50 && totCriancas.value >= 0 && totCriancas.value <= 50 && lclAtual.value != lclDestino.value && data >= dataAtual && data <= longTime) {
        divBtnCalcular.style.display
            = "block"
        divBtnCalcular.style.height = "0px"
        divBtnCalcular.style.marginTop = "0px"
        pCalcular.style.display = "none"
        btnCalcular.style.display = "block"

    }
    else {
        divBtnCalcular.style.display
            = "flex"
        divBtnCalcular.style.height = "40px"
        divBtnCalcular.style.marginTop = "15px"
        pCalcular.style.display = "block"
        btnCalcular.style.display = "none"
    }

}, 1500)

/* Configurações Js da página de orcamento*/
/*Calcular orcamento*/



function resuTotal(valor1,valor2){
    let descontoValue=0
    if(data<desconto){
        descontoValue=(valor1+valor2)*30/100
        Total=valor1+valor2-descontoValue
        
        
    }

    if(totAdultos.value>=5 || totCriancas.value>=5){
        desconto=Total*5/100
       
        Total=Total-desconto
        
    }
    Total=Total*totAdultos.value
    
    if(totCriancas!=0 || totCriancas!=""){
        Total=(Total*30/100)-(Total*totCriancas.value)
        
    }
    return Total
}

function calcular() {
    /*Atribuição de preços as provincias De Origem */
    lclAtual.value=="Luanda"?n1=3000:n1=n1
    
    lclAtual.value=="Malanje"?n1=4000:n1=n1

    lclAtual.value=="Benguela"?n1=5000:n1=n1

    lclAtual.value=="Cuando Cuabango"?n1=4500:n1=n1

    lclAtual.value=="Cabinda"?n1=3200:n1=n1

    lclAtual.value=="Bié"?n1=4000:n1=n1

    lclAtual.value=="Moxico"?n1=5000:n1=n1
  
    lclAtual.value=="Huambo"?n1=4300:n1=n1

    lclAtual.value=="Huíla"?n1=2600:n1=n1

    lclAtual.value=="Cuanza Sul"?n1=3000:n1=n1

    lclAtual.value=="Cuanza Norte"?n1=4900:n1=n1

    lclAtual.value=="Cunene"?n1=4700:n1=n1

    lclAtual.value=="Lunda Norte"?n1=2500:n1=n1

    lclAtual.value=="Lunda Sul"?n1=2200:n1=n1

    lclAtual.value=="Namibe"?n1=5000:n1=n1
   
    lclAtual.value=="Zaire"?n1=3300:n1=n1

    lclAtual.value=="Uíge"?n1=2000:n1=n1
    
    /*Atribuição de preços a províncias de destino */
    lclDestino.value=="Luanda"?n2=3000:n2=n2
    
    lclDestino.value=="Malanje"?n2=4000:n2=n2

    lclDestino.value=="Benguela"?n2=5000:n2=n2

    lclDestino.value=="Cuando Cuabango"?n2=4500:n2=n2

    lclDestino.value=="Cabinda"?n2=3200:n2=n2

    lclDestino.value=="Bié"?n2=4000:n2=n2
  lclDestino.value=="Moxico"?n2=5000:n2=n2
  
    lclDestino.value=="Huambo"?n2=4300:n2=n2

    lclDestino.value=="Huíla"?n2=2600:n2=n2

    lclDestino.value=="Cuanza Sul"?n2=3000:n2=n2

    lclDestino.value=="Cuanza Norte"?n2=4900:n2=n2

    lclDestino.value=="Cunene"?n2=4700:n2=n2

    lclDestino.value=="Lunda Norte"?n2=2500:n2=n2

    lclDestino.value=="Lunda Sul"?n2=2200:n2=n2

    lclDestino.value=="Namibe"?n2=5000:n2=n2
   
    lclDestino.value=="Zaire"?n2=3300:n2=n2

    lclDestino.value=="Uíge"?n2=2000:n2=n2
   
    resuTotal(n1,n2)
    
    /*Calculando O valor total */
    
}

