//function overload signatures
function greet(myname:string):string;
function greet(age:number):string;

//function overload implementation
function greet(value:string|number):string{
if(typeof value==="string"){
    return `Hello My name is ${value}`;
}

else{

    return `My age is ${value}`;
}



}

//usage
console.log(greet("Alice"));
console.log(greet(30));

