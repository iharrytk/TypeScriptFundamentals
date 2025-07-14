class ArrayExample{



    arraymethods():void{

    let users:string[]=['sid','ted'];
    users.push('frank'); //add an elemnet into the array
    
    console.log(users);
    console.log(users[0]); //retreives specific element of an array based upon the index
    console.log(users.length)//gives the length of the array
    console.log(users.splice(1,1))//removes element from an array
    console.log(users.includes('rahul'));    // true
    users.forEach(u => console.log(u));      // Prints each user
   // users.push(10);//compile time error: type number is not assigned to type string
     let uppercase=users.map(u=>u.toUpperCase());//all elements of the array are converted to uppercase
     console.log(uppercase) 
     console.log(users.indexOf('frank'))//prints the array index of the element in the array

    }
    
}

const ae=new ArrayExample;
ae.arraymethods();