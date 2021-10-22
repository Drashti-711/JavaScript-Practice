//this is based on Operator(+,-,....)
let x 
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + ""  
console.log(x, typeof x)    //Number + String = String

x = x + 2 
console.log(x, typeof x)    //Number + String = String

x = x - 2
console.log(x, typeof x)    //Number - String = Number

x = !x
console.log(x, typeof x)

console.log(Boolean(7))     
console.log(Boolean(0))     //will always give output as "false" for 0
console.log(Boolean(null))  //it will give falsy value
console.log(Boolean(undefined)) //   it will give falsy value
console.log(Boolean("Drashti"))

