/*** Nominal Type System: Java code
class JavaPerson {
  String name;
}

class JavaClient {
  String name;
}

JavaClient c = new JavaPerson();  // compiler throws an error
JavaClient c = new JavaClient();  // OK!
***/

// --------------------------------------------------

// Structual Type System
class Person {
  name: string;
}

class Client {
  name: string;
}

const c1: Client = new Person(); // OK!
const c2: Client = new Client(); // OK!
const c3: Client = {
  // OK!
  name: 'TK',
};

class Customer {
  name: string;
  age: number;
}

const c4: Customer = new Client();
const c5: Client = new Customer();
