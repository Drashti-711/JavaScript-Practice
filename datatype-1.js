let data = 12   //number
let user = "Drashti"    //string

//print datatype of "data"
console.log(typeof data)
//print datatype of "user"
console.log(typeof user)

let num = 0xf   //to write or assign value in hex, alphabet "x" is used in between 0 and f 
console.log(num)

//print datatype of num
console.log(typeof num)//value is assigned in hex form but as it is a number value the data will be number

let num1 = 12e7     //exponential value ("it is always with the base 10") i.e 12 * 10 to the power 7 
console.log(num1)

let num2 = 1_00_000     //instead of comma(,) here we use underscore(_)
console.log(num2)

let num3 = 5/0  //check the working of infinity value
console.log(num3)

//print the maximum value
console.log(Number.MAX_VALUE) //both are inbuilt function

let num4 = 93876507654323456788765434567
console.log(num4)

num4 = 93876507654323456788765434567n //"n" at the end defines BigInt datatype which helps to print the number as it is
console.log(num4)


