const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://localhost:27017/api-restfull?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('conected to database!')
    })

    db.on('error',() => {
        console.error.bind(console,'connection error')
    })
}

module.exports = {
    connect
}