enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.WINDOW;

// interface

interface Student {
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string
  startTrial(): string;
  getCoupon(couponnmae: string, value: number | string): number;
}

const hitesh: Student = {
  email: "h@gmail.com",
  userId: 4545,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Julian" , value: 23) => {
    return 10
  }
};
