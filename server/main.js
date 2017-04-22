import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {


  // let house = {
  //   bedroom: 2,
  //   bathroom: 1.5
  // };
  //
  // let yearBuilt = 1995;
  //
  // let newHouse = {
  //   ...house,
  //   yearBuilt,
  //   flooring: 'Carpet',
  //   bedroom: 3
  // };
  // console.log (newHouse);


  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `Hi! I am ${this.name} I am ${this.age} year(s) old.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, jobtitle) {
  //     super(name, age);
  //     this.jobtitle = jobtitle;
  //   }
  //   getGreeting() {
  //     if (this.jobtitle){
  //       return `Hi! I am ${this.name} I am ${this.age} year(s) old. My jobtitle is ${this.jobtitle}`;
  //     }
  //     else {
  //       return super.getGreeting() + ` I am unemployed`;
  //     }
  //   }
  //   hasJob(){
  //     return !!this.jobtitle;
  //   }
  // }
  //
  // class Programmer extends Employee {
  //   constructor(name, age, jobtitle, preferredLanguage = 'assembly') {
  //     super(name, age, jobtitle);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //     if (this.jobtitle){
  //       return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} programmer. `;
  //     }
  //     else {
  //       return super.getGreeting() + ` I am unemployed`;
  //     }
  //   }
  // }
  //
  // // let me = new Employee('Lars', 43, 'Architect');
  // // console.log(me.getGreeting());
  // // console.log(me.getPersonDescription());
  // // console.log(me.hasJob());
  // //
  // // let person = new Employee('Mike', 25, '');
  // // console.log(person.getGreeting());
  // // console.log(person.getPersonDescription());
  // // console.log(person.hasJob());
  //
  // let developer = new Programmer('Noah', 25, 'developer', );
  // console.log(developer.getGreeting());
  // console.log(developer.getPersonDescription());
  // console.log(developer.hasJob());
});
