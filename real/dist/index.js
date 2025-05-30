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
        // protected call be accessed by the child classes
        this._courseCount = 1;
        this.city = "Nairobi";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // in the setters ther should be no return type
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const andrey = new User("andre@dk", "hdl");
