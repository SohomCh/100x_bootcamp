
console.log("Hello world")
//console.log(a)//  it will still partially run the program

function greet(first, last,gender) {
    if(gender=="M"){
    console.log(`Hello ${first} ${last} sir`);
    }
    else{
       console.log(`Hello ${first} ${last} ma'am`); 
    }
}

greet("Sohom", "Chatterjee","M");
greet("Astha", "Chatterjee","F");


for(let i=1;i<=100;i++){
    console.log(i)
}


// Varaibles 
// let,cosnt,var(var is gloabl scoped)


//Arrays

let arr=[1,2,3,4,5,6]

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("it is even number")
    }
    else{
        console.log("it is odd number")
    }
}


//Objects

const allUsers=[
    {
    name:"Sohom",
    age: 22,
    gender:"Male"
},

{
    name:"Rohan",
    age:23,

    gender:"Male"



},{
    name:"Rohini",
    age:22,
    gender:"Female"
}
]

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="Male"){
        console.log(allUsers[i]["name"])
    }
}


//callbacks
//fucntions pased as parameters


function sum(a,b){
    let result=a+b;
    console.log(a,b)
}

function diff(a,b){
    let result=a-b;
    console.log(result);
}

function arthematic(a,b,fnToCall){
    return fnToCall(a,b);
}

console.log(arthematic(10,5,diff))


//settimeout

function greet(){
    console.log("hello sir")


}

setTimeout(greet,3*1000) // calls the functions after 3 sec
setInterval(greet   ,3*1000) //calls the function after every 3 secs



