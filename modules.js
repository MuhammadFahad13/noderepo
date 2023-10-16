const names = require('./names')
const sayhi = require('./utils')
const data = require('./alternateexport')
const amount = 15

if(amount < 10){

    console.log("small number")
}
else{
    console.log("large number")
}
console.log("First node app")
console.log(__dirname)
console.log(__filename)


sayhi(`my name is  ${names.myname}`)
sayhi(`my  last name is   ${names.Lname}`)
console.log(names.myname)
console.log(names.Lname)
console.log(data)