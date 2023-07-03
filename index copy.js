
/*
        - Query params => meusite.com/users?nome=rodolfo&age=28 //  FILTROS
        - Route params => /users/2          // BUSCAR , DELETAR, OU ATUALIZAR ALGO ESPECIFICO
        - Request Body => meusite.com/users{ "name": "Rodolfo", "age": 28 }
        

        - GET   => buscar informação no back-end
        - POST => criar informação no back-end
        - put /patch => alternar/atualizar informação no back-end
        - delete    => deletar informação no back-end

*/
const express = require('express')
// 
const app = express()

app.get('/users', (request, response) => {
    // const name = request.query.name
    // const age = request.query.age

    // console.log(name, age)
    // return response.json({name, age})

    const {name, age} = request.query
    console.log(name, age)
    return response.json({name, age})

})


app.listen(3000 ,() => {
    console.log(`🚀 server started on port 3000`)
})




