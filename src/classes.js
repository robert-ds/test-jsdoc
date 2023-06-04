
/**
 * Class to create a programmer
 * @example created object and use method getInfo()
 * const newProgrammer = new Programmer({fullname: 'Robert',age:20},'javascript'})
 * newProgrammer.getInfo()
 * @see https://github.com
 * @todo Implements alls class
 */
class Programmer {

  /**
   * @param {Object} user User's information
   * @param {String} lang A programming languaje
   */
  constructor(user, lang){
    this.fullname = user.fullname;
    this.age = user.age;
    this.lang = lang;
  }

  /**
   * Get Programmer Information
   * @returns {void}
   */
  getInfo() {
    console.log(`I'm ${this.fullname} and my favorite lang programming is ${this.lang}`);
  }

}

/**
 * Know more this class {@link Programmer}
 */
let newUser = new Programmer({fullname: 'Robert',age:20},'javascript');
console.log(newUser);
newUser.getInfo()