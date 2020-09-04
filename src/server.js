const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")


//configurar nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//Configurar arquivos estáticos (css, scripts, imagens)
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static('public'))
//rotas de aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)

.listen(5500)