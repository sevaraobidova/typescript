"use strict";
// const a = 1;
// console.log(a);
// const admin: Admin = {
//   ...user,
//   role: 1,
// };
// console.log(user);
// console.log(admin);
// function getName(user: User): Admin {
//   return {
//     name: user.name,
//     role: 2,
//   };
// }
// console.log(getName(user));
// Classes in TypeScript/////////////////////////////////////////////////////////////////
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const Sevara = new User("Sevara");
// console.log(Sevara);
// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed,
// }
// class Payment {
//   id: number;
//   status: PaymentStatus;
//   createdDate: Date;
//   updatedDate: Date;
//   constructor(id: number) {
//     this.id = id;
//     this.status = PaymentStatus.Holded;
//     this.createdDate = new Date();
//     this.updatedDate = new Date();
//   }
// }
// const payment = new Payment(1);
// console.log(payment);
class User {
    constructor(name) {
        this.name = name;
    }
    fix() {
        console.log("hello");
    }
    fel() {
        console.log("fel");
    }
}
const user = new User("Sevara");
console.log(user.fix);
