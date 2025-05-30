enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.WINDOW;

// interface
interface Student {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string
  startTrial(): string;
  getCoupon(couponnmae: string, value: number | string): number;
}

interface Principal extends Student {
    role: "admin" | "ta" | "learner"
}

const bruce: Principal = {
    dbId: 3,
    email: "",
    userId: 4,
    startTrial() {
        return "";
    },
    getCoupon(couponnmae: "Red", value: 34) {
        return value
    },
    role: "ta"
}

const hitesh: Student = {
  dbId: 34,
  email: "h@gmail.com",
  userId: 4545,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Julian", value: 23) => {
    return value;
  },
};

export {};
