const Employee= require("./employee");

class Engineer extends Employee{
    constructor(name,id,emailaddress,github){
        super(name,id,emailaddress);
        this.github=github;
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports=Engineer;