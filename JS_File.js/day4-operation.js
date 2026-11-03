//Operators

//Arithmetic

var a = 5
var b =10

var c = a+b
console.log(c)

var c = a - b
console.log(c)

var c = a * b
console.log(c)

var c = a / b  //Quoient
console.log(c)

var c = a % b  //Remainder
console.log(c)

var c = a ** b  //power root 5*5*5*5  10 tiomes
console.log(c)

//Assignment =


var a = 20
var b = 10

a = a + b   //a = 20 + 10 = 30
console.log(a)

a = a - b  // a= 30 - 10 = 20
console.log(a)

a= a * b // a = 20 * 10 = 200
console.count(a)


a /= b  // a = 200 / 10= 20
console.log(a)

a %= b //  a= 20 % 10 = 0
console.log(a)

a **=b  //  a = 0 ** 10 =0
console.log(a)

// comparison

var a = 100
var b = "100"

console.log( a == b) //check only content value

console.log( a === b) //check strictly  content & tyoeof value

console.log( a != b) 

console.log( a !== b)

console.log( a > b)
console.log( a >= b)

console.log( a < b)
console.log( a <= b)

//logic

//&& AND operator

let age = 18

if (age >=18 && age <=60 && age == '18' && age ==18)
{
    console.log('Eligible')

}
else{
    console.log('Not Eligible')
}

/* && AND
 T && T = T
 T && F = F
 F && T = F
 F && F = F  
 */


 // || OR operator

 age = 1

 if (age >= 18 || age <=60 || age ==24){
    console.log('YES')
 }
 else {
    console.log('NO')
 }

 /* || OR
 T || T = T
 T || F = T
 F || T = T
 F || F = F  
 */

 // Ternary  ? - if else consition another way

 let abc = 24

 let xyz = (abc == '24' && age >=50 ) ? true : false
 console.log(xyz)

 //Unary

 //POST INCREMENT/DECREMENT

 var a = 100
 console.log( a++)
 console.log(a++ ,a ,a)

 


 //PRE INCREMENT/DECREMENT

 var b = 200
 console.log( ++b )







