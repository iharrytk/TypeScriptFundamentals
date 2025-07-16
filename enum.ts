//Enum Default
enum testExecutionStatus{

    Pass,
    Fail,
    Skip
}
console.log(testExecutionStatus.Pass)

//Enum with string
enum userRoles{

    admin="orgadmin",
    hr="orghr",
    employee="orgemployee"
}
//Enum as type
function userAccess(userrole:userRoles):string{


    if(userrole===userRoles.admin){
        return "accessgranted"
    }
    if (userrole===userRoles.hr) {
        return "partialaccessgranted"
        
    } else {
        return "noAccess"
    }
}

let acess=userAccess(userRoles.admin);
console.log(acess)


//Enum with custom value
enum priority{
    low=1,
    Medium=2,
    High=3
}
console.log(priority.High)

