const cachename = 'cache-app-v1'

const recursosChacheados = [
    "styles.css",
    "index.html",
    "registro.html",
    "produto.html",
    "script.js",
]

self.addEventListener('install',function(event){
    console.log('Service worker instalado')
    event.waitUntil(caches.open(cachename).then(function(cache){
        cache.addAll(recursosChacheados)
    }))
})

self.addEventListener('activate', function(){
    console.log("service worker ativado")
})