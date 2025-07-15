let credentials=new Map<string,any>;
credentials.set("username","sid");//set is used to enter values into the Map
credentials.set("password",123);
console.log(credentials.get("username"));//get is used to retrive values from a Map
console.log(credentials.get("passwo"));//incorrect key -Undefined error at runtime
console.log(credentials.delete("password"))//deletes the key value pair of specified key.returns boolean
console.log(credentials.has("password"))//checks if the specify Key value pair is present.retuns boolean

for (let [i, j] of credentials.entries()) {//loops through all records of the Map
   if (i === "username") {
      console.log("Key Is Present");
   }
 console.log(`${i}--> ${j}`);
}


for (let i of credentials.keys()) {//loops through all the keys of the Map
 console.log(`${i}`);
}


for (let j of credentials.values()) {//loops through all the values of the Map
 console.log(`${j}`);
}
//Map<string, number>: name  1,2,3,4,5,6,7
//If the value is even then print
let evenOdd=new Map<string,number>;
evenOdd.set("name1",1);
evenOdd.set("name2",2);
evenOdd.set("name3",3);
evenOdd.set("name4",4);
evenOdd.set("name5",5);
evenOdd.set("name6",6);
evenOdd.set("name7",7);

for (let j of evenOdd.values()) {//loops through all the values of the Map
    if(j%2===0){
        console.log(`even number ${j}`);
         
    }
 
}