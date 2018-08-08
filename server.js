var Koa = require('koa')
var app = new Koa()

app.use(context=>{
    context.body = "Hello World v2!"
    console.log('Sent response')
})

app.listen(process.env.PORT || 3000)