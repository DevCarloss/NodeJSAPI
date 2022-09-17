const fs = require('fs')
var express = require('express')
const app = express()
console.log('Base Api NodeJS Criado Por CarlosDev')

// App Get

app.get('/', (req,res) => {
    res.send('Forbidden')
        
})

// App Get Api Info

app.get('/apiinfo',(req,res) => {
  res.send('<h1>Interface de programação de aplicações<h1>' + '\n\n' + '<h3>As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas. Por exemplo, apps desenvolvidos para celulares Android e iPhone (iOS) são criados a partir de padrões definidos e disponibilizados pelas APIs de cada sistema operacional.<h3>' + '\n\n' + '<img src = "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/rest-api-code-main.png"><img>')
  
})

app.listen(8000)
