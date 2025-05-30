const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

identityFour(4);

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some db operations.
  const myIndex = 3;
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valueTwo: U): object {
  return {
    valOne,
    valueTwo,
  };
}

anotherFunction(3, {connection: "", username: "", password: ""})


interface Quiz{
    name: string,
    type: string
}

interface Course {
    name: string, 
    author: string,
    subject:string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}
