

/*******************************************Class with parameterised contructor */
class LoginPage{
    url:string;

    constructor(url:string){

        this.url=url;
    }

    open():void{
        console.log(`Navigating to ${this.url}`);
    }

}


const loginpage=new LoginPage("https://example.com")
loginpage.open();


/*******************************Class without constructor */
class LoginPage1{
    

   

    open(url:string):void{
        console.log(`Navigating to ${url}`);
    }

}


const loginpage1=new LoginPage1();
loginpage1.open(`https:www.example1.com`);

/***************static method************** */


class LoginPage2{
   static open(url:string):void{
        console.log(`Navigating to ${url}`);
    }

}

LoginPage2.open(`https:www.example2.com`);