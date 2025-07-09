interface User{
    name:string;
    age:number;
    isActive?:boolean;
}


const user:User={name:'hari',age:32,isActive:true}
console.log(user);


function greet(user:User): void{console.log(`Hello ${user.name} age is ${user.age}`)};
const tester:User={name:'jay',age:33};
greet(tester);