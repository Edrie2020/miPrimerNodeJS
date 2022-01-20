const child_process = require('child_process')

let numeroUno = null
let numeroDos = null

function ejecuta(archivo){

    return Promise((resuelve) => {

        child_process.exec(`node ${archivo}`, function (err, result){
            resuelve(Number(result))
        }
        )
    }
    )
}

ejecuta('numeroUno.js').then((numero1) => {
    numeroUno = numero1

    ejecuta('numeroDos.js').then((numero2) => {
        numeroDos = numero2
        console.log(mumeroUno + numeroDos)
    })

})
