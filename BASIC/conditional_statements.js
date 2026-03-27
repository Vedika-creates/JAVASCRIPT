//if else
a=10;
b=20;
c=30;
if(a>b && a>c){
    console.log("a is greatest");
}
else if(b>a && b>c){
    console.log("b is greatest");
}
else{
    console.log("c is greatest");
}   

//switch case
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// else if
let x =100;
if(x>0){
    console.log("positive");
}
else if(x<0){
    console.log("negative");
}
else{
    console.log("zero");
}        