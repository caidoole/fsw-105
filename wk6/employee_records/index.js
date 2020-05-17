let employees = [];

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status} `);
    }

}

Employee.prototype.changeStatus = function(newStatus){
    this.status = newStatus
}


const daniel = new Employee("Daniel", "Lemon Inpsector", 25000);
daniel.printEmployeeForm();
employees.push(daniel);

const zoey = new Employee("Zoey", "Tuna Sandwhich Artist", 75000);
zoey.changeStatus("Contract");
zoey.printEmployeeForm();
employees.push(zoey);

const kelli = new Employee("Kelli", "Intake Specialist", 3000);
kelli.printEmployeeForm();
employees.push(kelli);

console.log(employees)


