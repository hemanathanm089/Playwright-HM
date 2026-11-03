

//OBJECT ORIENTED PROGRAMMING 

/**
 * In Javascript , Object is collection of {key : value} pair.
 *  Where each key is associated with values.
 * (Which could be a String, Number, Boolean, Array, function, even another Object).
 */

let obj ={
    name : "AK" ,
    age : 20 ,
    course : false ,

    abc : function (){
        console.log("hello world")
   } ,

   xyz : {company : "straive" , empid : 411387 , job : true}
}

console.log (obj)

obj.abc()

//Dot notation

console.log(obj.name)

//brace notation

console.log(obj['course'])

//Add

obj.arr = [101 , 'playwright' , true]

//update

obj.name ='Ani'
console.log(obj)

//delete

delete obj.course
console.log(obj)

//chaining

console.log(obj.xyz.empid)


/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure

 1.Encapsulation
      - Wrapping data + methods together inside a class.

 2.Inheritance
      - One class inherits properties & methods from another class.
 * Extends is a keyword. Use to access Parent into Child.
 * Super is a keyword. Use to access from parent objects into child class.

 3.Polymorphism
      - Same method name, different behavior.
      1. Method OverLoading - not possible 
      2. Method OverRiding 

 4.Abstraction
      - Hide internal implementation / code logic.    


1.  Class is a Blue print / Template for properties and Methods.
 * ClassName - PascalCase
 * methodName, propertyName - camelCase
 
2.  Constructor
      - A constructor is a special function used to create and initialize objects.

 * This is a Keyword. Use to represent current class objects.
 * Static is a keyword. Use to store unique values.
 * Static variable, Methods. We can access using only class name, 
    without creating an Object.
 * 
 * 
*/

//encapsulation

class LoginPage {  //pascal

    constructor(){
        this.username ="Ani"  //global
    }

    login(name = 'AK'){         //local
        console.log("hi" , name , "welcome")
    }
    logout(){            //camelcase
        console.log("thank you" , this.username)
    }
}

let p1 = new LoginPage() //object

p1.login()

p1.login("Hemu")

p1.logout()

//Inheritance

class Hompage extends LoginPage{

    constructor(){
        super()
        this.product = "samsung s24"

    }
    addtocart(){
        console.log('your product name is ${this.product} successfully added in cart')
    }
    checkout(){
        console.log('now fill ur details')
    }

}
let p2 = new Hompage()

p2.addtocart()
p2.checkout()

p2.login()
p2.logout()
p2.login('Ani')


//plymorphism

class PaymentPage extends Hompage{

    checkout(){
        console.log('entered details track status')
    }
}
let p3 = new PaymentPage

p3.checkout()
p2.checkout()


//static

class unique{


    static emailid =0 //static variable

    constructor(){
        unique.emailid++
        this.userid = 0

    }
    static getEmails(){  //static method
        console.log(`email id count ${unique.emailid}`)
    }
    getuserID(){
        console.log(`user count is ${++this.userid}`)

    }
}

unique.getEmails()
unique.getEmails()

let a1 = new unique()

unique.getEmails()
unique.getEmails()

let a2 = new unique()

a2.getuserID()
a2.getuserID()


