"use strict";
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Nairobi";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Nairobi";
    }
}
const andrey = new User("andre@dk", "hdl");
