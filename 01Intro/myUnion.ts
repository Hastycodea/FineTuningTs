// can take the defined types
let score: number | string = 33;

score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let andreh: User | Admin = {
  name: "andreh",
  id: 334,
};

andreh = { username: "ab", id: 334 };

function getDBId(id: number | string) {
  // making some API calls
  //   id.toLowerCase() => only applicable to string

  if(typeof id === "string") {
    id.toLowerCase
  }

  console.log(`DB id is: ${id}`);
}

getDBId("Kunta");
getDBId(3);

// array

const data: number[] = [1, 2, 3, "4"]
const data2: string[] = ["1", "2", "3", 4]

// this works
const data3: ( string | number )[] = [1, "2", "3", "4"]

let pi:3.14 = 3.14

pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"


export {};
