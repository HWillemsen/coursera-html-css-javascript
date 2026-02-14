// array with employee details
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Javascript' },
    { id: 4, name: 'Jutta Leerdam', age: 27, department: 'HR', salary: 40000, specialization: 'Django' },
    { id: 5, name: 'Mark Twain', age: 60, department: 'IT', salary: 70000, specialization: 'Javascript' },
    //... More employee records can be added here
  ];
// function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
// function to calculate total salary
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
// function to display employees by department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
// function to display employee based on ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}
// function to display employee by specialization
function displayJavascriptEmployees() {
    const hrEmployees = employees.filter(employee => employee.specialization === 'Javascript');
     const hrEmployeesDisplay = hrEmployees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

