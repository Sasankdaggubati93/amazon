const users = [
    {
        name: 'John Carpenter',
        age: 29,
        salary: 1000
    },
    {
        name: 'Jane',
        age: 19,
        salary: 1000
    },
    {
        name: 'James',
        age: 35,
        salary: 1000
    }
]

const tbody = document.querySelector('#table-body');

const getRow = (user) => {
    const row = document.createElement('tr');
    row.innerHTML = 
        `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.salary}</td>
       `
    return row
}

users.forEach(user => {
    tbody.appendChild(getRow(user))
});




