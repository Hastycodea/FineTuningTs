// Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return user;
// }

// createUser({ name: "Kunta", email: "", isActive: true });

type User = {
  // not able to change this
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  // ? indicates Optional
  //   creditCardDetails?: number;
};

// mix and match

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "dkdkdk",
  name: "hech",
  email: "h@h.com",
  isActive: false,
};

myUser.email = "kunat@j.com";

export {};
