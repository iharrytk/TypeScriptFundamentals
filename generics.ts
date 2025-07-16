function identity<T>(value:T):T{

    return value;
}


const stringvalue=identity<string>("Sid");
const integervalue=identity<number>(34);


console.log(stringvalue);
console.log(integervalue);
/****************************************** */

//Returning first element of the array using generic function that can take string and number

function ReturnFirstElement<T>(arr:T[]):T{

    return arr[0];

}

const firstString=ReturnFirstElement<string>(["sid","bar","har"]);
const firstNumber=ReturnFirstElement<number>([5,6,9]);
console.log(firstString);
console.log(firstNumber);
