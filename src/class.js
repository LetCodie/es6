'use strict';

class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  static countUsers() {
    console.log('There are many subscribers');
  }

  register() {
    console.log('Hi, My name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
}

class Member extends User {
  constructor(name, email, age, memberPackage) {
    super(name, email, age);
    this.package = memberPackage;
  }

  getPackage() {
    console.log(this.name + ' is now subscribed to ' + this.package);
  }
}

let radin = new User('radin', 'radin@gmail.com', 27);
radin.register();
User.countUsers();

let john = new Member('john', 'john@yahoo.com', 45, 'Premium');
john.register();
john.getPackage();
