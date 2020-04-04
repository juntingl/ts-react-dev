function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Junting',
    lastName: 'Liu'
};
console.log(greeter(user));
