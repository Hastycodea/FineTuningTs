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
  private _courseCount = 1;
  readonly city: string = "Nairobi";
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

// in the setters ther should be no return type
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }

    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
    
  }
}

const andrey = new User("andre@dk", "hdl");
