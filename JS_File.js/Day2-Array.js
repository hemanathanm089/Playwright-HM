var abc =[100 , "AK" , true]

console.log(abc)

console.log(abc[0])
console.log(abc[1])
console.log(abc[2])
console.log(abc[3])

console.log(abc.length) //length is property


//push

var arr = [10 , 20 ,30]

arr.push("rohit" , 101 , 201)
console.log(arr)


//pop

arr.pop()
console.log(arr)


//shift
var arr =[101,201,301]

arr.shift()

console.log(arr)

//unshift

arr.unshift(1,2,3)
console.log(arr)

//concat

var arr1 =[10,20,30]
var arr2 =[40,50,60]
var arr3 = [70,80,90]


var s=arr2.concat(arr1,arr3)
console.log(s)


//reverse

arr2.reverse()
console.log(arr2)

//slice

var arr =[100,200,300,400,500,600]
var s = arr.slice(2,5)
console.log(s)

//join

var arr = [10,20,30]
var s=arr.join("<--->")
console.log(s)

//splice

var arr =[100,200,300,400,500,600,700]

//remove

arr.splice(2,3)
console.log(arr)

//replace

arr.splice(2,1,"AK",56,"ani")
console.log(arr)

//add

arr.splice(3,0,"MH",60)
console.log(arr)

//values

var arr = [10,"javascript","palywright",true]
var s=arr.values()
for (const element of s) {
    console.log(element)
    
}

//foreach

var arr =[20,"java","selinum",false]

arr.forEach(function(a,b,c){
    console.log(a)
    console.log(a,b)
    console.log(b)
    console.log(a,b,c)
    console.log(c)
})

//map

var arr=[4,6,8,"AK",true]

var s=arr.map(function(a){
    return a+2
})
console.log(s)

//Filter
var arr = [1,2,3,4,5,6,7,8]

var s = arr.filter(function(v){
    return v % 2 ==0
})
console.log(s)

var s = arr.filter(function(v){
    return v > 4
})
console.log(s)

//reduce

var arr = [10,20,30]

var s = arr .reduce(function(num1,num2){
    return num1+num2
})//inital value 0

console.log(s)


var arr = [10,20,30]

var s = arr .reduce(function(num1,num2){
    return num1+num2
},500)//intial value 500

console.log(s)



//sort

//asc

var arr = [20,45,8,7,25,17,99,63]

var asc = arr.sort(function(a,b){
    return a-b
})
console.log(asc)

//desc

var arr = [20,45,8,7,25,17,99,63]

var desc = arr.sort(function(a,b){
    return b-a
})
console.log(desc)
