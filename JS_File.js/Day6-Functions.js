//Basic / Declaration Function

//Without parameters

console.log("-- Without Parmeters--")

function greet(){
    console.log("Hello  World")
}
greet()

//with parameter

console.log("-- with parameter--")

function iseven(num){
    console.log(num % 2 == 0)
}
iseven(40)

//Multiple parameter

console.log("--Multiple Parameter--")

function IsPositive(a,b,c){
    return a +b +c
}
console.log(IsPositive(10,25,30))

//defalt

console.log("--defalt--")

function defalt(name = "Guest User"){
    console.log("Hi" , name)
}
defalt()
defalt("Hemanathan")

//Experssion Function

//without parameter

console.log("--without paramer--")

let a1 = function(){
    console.log("Hi")
}
a1()

//single parameter

let a2 = function(a){
    console.log(a+2)

}
a2(15)

//Multiple parameter

let a3 = function (num1 , num2){
    return num1 + num2
}
console.log(a3(15,20))

//defalt

let a4 = function (name = 'Hemanathan'){
    console.log("Hi this is",name)
}
a4()
a4("Ani")

//Arrow Function

//without parameter

let b1 = () => {
    console.log("arrow Function")
}
b1()

//with parameter

let b2 =(a) => {
    return a + 20
}

console.log(b2(10))

//multi para

let b3 = (n1,n2) => n1+n2
console.log(b3(14,14))

//defalt

let b4 = (name = "Emptyuser") => console.log ('hi' , name)

b4()
b4("jack")


//Annonymous function

console.log("start")
setTimeout(() => console.log("middle") , 5000) //millisecond
console.log("End")


//IIFe -immediate invoked function expression

//we shoud use it 1st line of the filee

//(function (){
  //  console.log("secreat key")
//})()

//call back

function redmi(){
    console.log("New mobile")
}
function vivo(a){
    console.log("200 mp camera")
}

redmi(vivo())
