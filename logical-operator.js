let x = 7 , y = 8 , z = 9

/*
True * True = True
True * False = False
False * True = False
False * False = False
*/
let result = x < y && x < z
console.log(result)

result = x < y && x > z
console.log(result)

/*
True + True = True
True + False = True
False + True = True
False + False = False
*/
result = x > y || x > z    
console.log(result) 