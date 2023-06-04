
/**
 * Data for a new person
 * @type {{id: Number, firstName: String, lastName: String, age: Number}}
 */
const person = {
  id: 1,
  firstName: "Ryan",
  lastName: "Ray",
  age: 30
}

/**
 * Data for a new person
 * @type {{id: Number|String, firstName: String, lastName: String, age: Number}}
 */
const person2 = {
  id: "2",
  firstName: "Ryan",
  lastName: "Ray",
  age: 30
}

console.log(person2.firstName.concat(" One"));