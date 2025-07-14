class basetest{

navigate():void{
    console.log("navigate to basetest");
}


}


class logintest extends basetest{



   override navigate(): void {

    console.log("navigate to login page ");
        
    }
}

const login=new logintest
login.navigate();

const base=new basetest
base.navigate();