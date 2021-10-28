let endereco = document.querySelector("#endereco")

let cartao = document.querySelector("#credito")

let compra_efetuada = document.querySelector("#efetuada")

function comprar(){

    if(endereco.value.length === 0 || cartao.value.length < 16){
        alert("ERRO! por favor verifique os campos e a quantidade de caracteres")
    }else{
        compra_efetuada.innerHTML = "<h2>Compra efetuada!</h2>"
    }
}


if('serviceWorker' in  navigator){
    window.addEventListener("load",function(){
        this.navigator.serviceWorker.register("serviceworker.js")
        .then(function (registro){
            console.log('service worker registrado com sucesso', registro)
        })
        .catch(function(erro){
            console.log('service worker não registrou', erro)
        })
    })
}
