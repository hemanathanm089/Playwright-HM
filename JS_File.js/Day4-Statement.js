//Condition statement

// IF , Elseif ,IF , Else

let mark = 56

if( mark <=100 && mark >= 85){
    console.log('GRADE A')
}
else if ( mark <= 85 && mark >=65){
    console.log('GRADE B')
}
else if ( mark <=64 && mark >=35){
 console.log('GRADE C')
}
else if (isNaN (mark)){
    console.log('Invalid number')
}
else{
    console.log('FAIL')
}

//SWITCH
let day = 7

switch(day){
    case 1:
        console.log('Monday')
    break
    case 2:
        console.log('Tuesday')
    break
    case 3:
        console.log('Wednesday')
    break
    case 4:
        console.log('Thursday')
    break
    case 5:
        console.log('Friday')
    break
    default:
        console.log('WEEKEND')
}