var Koa = require('koa')
var app = new Koa()

app.use(context=>{
    context.body = "Hello World!"
})

app.listen(process.env.PORT || 3000)