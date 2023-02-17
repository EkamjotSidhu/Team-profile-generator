class Employee{
    constructor(name,id, emailaddress){
        this.name=name;
        this.id=id;
        this.emailaddress=emailaddress;
    }

    getName(){
        return this.name
    };

    getId(){
        return this.id;
    }

    getEmail(){
        return this.emailaddress;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;