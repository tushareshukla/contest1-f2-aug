let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Function to print all employees with the profession of developer
function PrintDeveloper() {
  const developers = arr.filter(employee => employee.profession === 'developer');
  console.log('Developers:', developers);
}

// Function to add another employee to the array
function addData() {
  const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('Employee Appended:', newEmployee);
}

// Function to remove employees with the profession of admin
function removeAdmin() {
  const filteredArr = arr.filter(employee => employee.profession !== 'admin');
  console.log('Employees without Admins:', filteredArr);
}

// Function to concatenate another array of employees to the original array
function concatenateArray() {
  const moreEmployees = [
    { id: 5, name: 'mike', age: 22, profession: 'developer' },
    { id: 6, name: 'linda', age: 21, profession: 'admin' }
  ];

  arr = arr.concat(moreEmployees);
  console.log('Concatenated Array:', arr);
}

// Example function to console.log the array variable
function consoleArr() {
  console.log('Consoling Array Variable', arr);
}
