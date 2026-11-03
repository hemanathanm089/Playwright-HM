//promise

/* promis is an object in javascript
it will perform asynchronus operation like API Calls , File loading , Time delays

it has states:
pending - default
resolve - successfully (then)
reject - failed (catch)

*/

//Approach 1

let prom1 = new Promise( (resolve , reject) =>{
    let payment = false

    if(payment){
        resolve()
    }else{
        reject()
    }
})

prom1.then(() => console.log("got money")) .catch(() => console.log("did not got money"))
.finally(() => console.log("finally"))


//approach 2

let  prom2 = new Promise((resolve , reject) => {

    let payment = true
    if(payment){
        resolve("received money via gpay")
    }else{
        console.log("didnot receive money server problem")
    }
})

prom2.then((a) => console.log(a))
.catch((b) => console.log(b))


/**
 * async - it will make a function and return promise
 * await - it will pause the execution until promise is resolve or reject
 */

async function fetch() {
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            resolve("async")
            reject(new Error("network issue"))
        },3000)
        })}
    
    
//console.log(fetch)


async function display() {
    
    console.log("hi")

    try{
        const td = await fetch()
        console.log(td)

    }catch(err){
        console.log("err")
    }

    console.log("bye")
}
display ()


//promiseall


Promise.all([
    Promise.resolve("start") ,
    Promise.resolve("end")

])
.then((res) => console.log(res))
.catch((err) => console.log(err))

//promise all settled

Promise.allSettled([
    Promise.resolve("morning") ,
    Promise.reject("evening")

]

)
.then ((res) => console.log(res))
.catch((err) => console.log(err))

//Hosting - before intialization we are declaring their top of the scop

console.log(a)
var a= 2


greet()

function greet(){
    console.log("hello world")
}

greet()

function greet(){
    console.log("hosting")
}

//Destructuring

//basic

var arr = [10 , 20 ,30]

var [a , b , c] =arr

console.log(a)
console.log(b)
console.log(c)

//skip

var arr = [1001,2001 ,3300,4400,5500]

var [a,b,c,d,e] = arr
console.log([a,b,d,e])

//rest

var arr =[1,2,3,4,5]

var [a,b,...c] = arr

console.log(a)
console.log(b)
console.log(c)

//swap

var abc = 101 , xyz = "java" ;

[abc , xyz]=[xyz,abc]
console.log(abc)
console.log(xyz)
