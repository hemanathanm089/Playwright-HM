// LOOp - For , While , DoWhile

console.log("----------- FOR ---------")

//For - Intilization , consition , increment

for (i=1 ; i<=5 ; ++i){
    console.log(i)
}

console.log("------While--------")

// While
 //Intilization
 //condition
 //Increment

 let j=1

 while(j<=5){
    console.log(j)
    j++
 }


 //DO while

 console.log("------Do While------")

 //Do While
 //intilaization
 //Increment
 //condition

 let k=1

 do{
    console.log(k)
    k++
 }

 while(k <= 5)

//FOR METHOD

console.log("---- For method----")

var arr = [100 , 200 , "playwright" , "javascript" , true , false] 

for(let a = 0 ; a <= arr.length ; ++a){
    console.log(a)
}


console.log("---------2 method-----")
var arr = [100 , 200 , "playwright" , "javascript" , true , false] 

for(let a = 0 ; a <= arr.length ; ++a){ // a < 6
    console.log(arr[a])
}

//FOR OF

console.log("------------For Of-----------")

for(const element of arr){
    console.log(element)
}

//For EACH

console.log("-------FOR EACH ----------")

arr.forEach(function(v){
    console.log(v)
})

console.log("-------FOR EACH 2 method ----------")

arr.forEach(function(v , i){
    console.log(v , i)
})

//FOR IN

console.log("----------FOR IN ------------")

var obj={
    
    name : "HEMANATHAN" ,
    age : 24 ,
    course : true

}
for (const key in obj) {

    console.log(key , " = " , obj[key])
    
}

//CONTINUE

console.log("-----------Continue--------")

for(let i=1 ; i <=10 ; i++ ){
    if(i == 5){
        continue
    }
    console.log(i)
}


//NESTED LOOP

console.log("---------NESTED LOOP-----")

for(i=1 ; i<=5 ; i++){ 
     // outer loop 5 round
    for(j=1 ; j<=5 ; j++){ 
        //inner loop immediate 5 round
        console.log(i,j)
    }
}