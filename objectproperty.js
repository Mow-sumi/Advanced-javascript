const students = [
    { id: 21, name: 'salman'},

    { id: 31, name: 'morium'},

    { id: 41, name: 'punom'},

    { id: 71, name: 'Rima'},
]
const names = students.map(s => s.name);
const bigger = students.filter(s => s.id>40);
console.log(bigger);