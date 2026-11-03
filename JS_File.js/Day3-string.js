//slice

var str = "javascript programming"

console.log(str.length)


var s = str.slice(0,10)
console.log(s)

var s = str.slice(11,22)
console.log(s)


var s = str.slice(-22,-11)
console.log(s)

//substring

var s= str.substring(0,10)
console.log(s)

var s = str.substring(11,22)
console.log(s)


var s = str.substring(-22,-11)
console.log(s)

//replace

var str = "javascript , javaselinum"

console.log(str.replace("java","type"))

//replaceall

console.log(str.replaceAll("java","@"))


//uppercase

var str = "javascript"

console.log(str.toUpperCase())

// lowercase

var str = "PLAY"
console.log(str.toLowerCase())

//repeat

var str ="AK * "
console.log(str.repeat(5))

//concat

var str1 ="java"
var str2="script"
var str3="playwright"

console.log(str1.concat(str2,str3))


//trim

var str ="  java   with  script "
console.log(str.trim())

var str = "javascript with playwright"

//index of

console.log(str.indexOf('r'))

//last index of

console.log(str.lastIndexOf('r'))

//char at

console.log(str.charAt(3))

//bbolean

//includes

console.log(str.includes('with'))

//stratwith

console.log(str.startsWith('w'))

//endswith

console.log(str.endsWith('t'))





