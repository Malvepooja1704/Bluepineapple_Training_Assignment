let employees = [
    { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
    { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
    { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
];

//sort by salary
employees.sort(function(a, b) {
    return a.salary - b.salary;
})
console.table(employees);

//sort by name
employees.sort(function(a, b) {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();

    if (x > y)
        return 1;
    if (x < y)
        return -1;
    return 0;
});
console.table(employees);


//sort by hiring Date
employees.sort(function(a, b) {
    let x = new Date(a.hireDate);
    let y = new Date(b.hireDate);

    return x - y;
});
console.table(employees);