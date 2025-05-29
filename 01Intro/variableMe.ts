// string
let greeting: string = "Hello World!";

// number
let userId: number = 456;

// boolean
let isLoggedIn: boolean = false;

let student = "Kamlesh Patni";

// any
let hello;

function getHello() {
  return "noma";
}

hello = getHello();

// function
function addTwo(num: number) {
  return num + 2;
}

addTwo(3);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("kunTa");

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

// signUpUser(3, 4, 5, 5)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Andreh", "a@gmail.om");

console.log("Learning ts");
console.log(greeting);

// Return type
function add(a: number, b: number): number {
  return a + b;
}

const getHi = (s: string): string => {
  return s + " welcome!";
};

console.log(getHi("Kunta"));

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

const User = {
  name: "andreh",
  email: "andreh@th.com",
  isActive: true,
};

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
  return { name, isPaid };
}

let andreh = createUser({ name: "Andreh", isPaid: false });
andreh.name = "Brian";


function createCourse():{name: string, price: number} {
    return {name: 'Java', price: 999};
}

let sylla = createCourse()
sylla.name

export {};
