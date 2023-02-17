const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];

const addManager = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter your name: ',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Name required to proceed!");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter id Number: ',
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Id required to proceed!");
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter email address: ',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Email required to proceed!");
                return false
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter office number: ',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Office number required to proceed!");
                return false
            }
        }
    }]).then(managerPrompt => {
        const { name, id, email, officeNumber } = managerPrompt;

        let manager = new Manager(name, id, email, officeNumber);

        teamMembers.push(manager);
    })

}

const employeeOption = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeOptions',
            message: 'Please select an Employee',
            choices: ["Engineer", "Intern"],
            validate: employeeOptions => {
                if (employeeOptions) {
                    return true;
                } else {
                    console.log("Selection required to proceed!");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Name required to proceed!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee Id: ',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Id required to proceed!");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email: ',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Email required to proceed!");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter employee Github username: ',
            when: input => input.employeeOptions === "Engineer",
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log("Github required to proceed!");
                    return false
                }
            }
        },

        {
            type: 'input',
            name: 'schoolName',
            message: 'Enter School name: ',
            when: input => input.employeeOptions === "Intern",
            validate: schoolName => {
                if (schoolName) {
                    return true;
                } else {
                    console.log("School name required to proceed!");
                    return false
                }
            }
        },

        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ]).then(dataOfEmployee => {
        let { name, id, email, employeeOptions, githubUsername, schoolName, addEmployee } = dataOfEmployee;

        let employee;

        if (employeeOptions === "Engineer") {
            employee = new Engineer(name, id, email, githubUsername);
        } else if (employeeOptions === "Intern") {
            employee = new Intern(name, id, email, schoolName);
        }

        teamMembers.push(employee);

        if (addEmployee) {
            return employeeOption(teamMembers);
        } else {
            return teamMembers;
        }
    })
}

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your team profile is generated successfully")
        }
    })
}

addManager()
    .then(employeeOption)
    .then(teamMembers => {
        return generateHTML(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });