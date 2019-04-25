interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + ' ' + person.lastName;
}

let user = {
  firstName: 'Junting',
  lastName: 'Liu'
};

console.log(greeter(user));
