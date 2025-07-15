let text:string="tPlaywright";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("wright"));
console.log(text.replace("wright","test"));
console.log(text.replaceAll("t","3"));

let str:string="This is positive";
console.log(str.split(" "));

let strtrim:string="    This is positive    ";
console.log(strtrim.trim());


const languages:string="javascript,java,python";
const language:string[]=languages.split(",");
console.log(language)
for(const i of language){
    if(i==="java"){
         console.log("found java");
         break;
    }

}


