// const a = 1;
// console.log(a);

// const revenue: number = 1000;
// const bonus: number = 500;
// const res: number = revenue + bonus;

// const right: boolean = true;
// const text: string = "abgfbh";
// console.log(res);

// //////////////how to use function in Typescript//////////////////////////////////////////////
// function getFullName(name: string, surname: string): string {
//   return `My full name is ${name} ${surname}`;
// }

// const getFullNameArrow = (
//   name: string,
//   surname: string,
//   age: number
// ): string => {
//   return `My full name is ${name} ${surname} and I'm ${age} years old`;
// };

// console.log(getFullName("Sevara", "Obidova"));
// console.log(getFullNameArrow("Ravshan", "Obidov", 20));

// how to use objects
// function getFullName(userIdentity: {
//   firstname: string;
//   surname: string;
//   skills: { dev: boolean; devops: boolean };
// }): string {
//   return `My fullname is ${userIdentity.firstname} ${userIdentity.surname} and I have ${userIdentity.skills.devops}`;
// }
// const user = {
//   firstname: "Sevara",
//   surname: "Obidova",
//   city: "Tashkent",
//   age: 20,
//   skills: {
//     dev: true,
//     devops: true,
//   },
// };

// console.log(getFullName(user));

// const info: {
//   officeId: number;
//   isOpened: boolean;
//   contacts: {
//     phone: string;
//     email: string;
//     address: { city: string };
//   };
// } = {
//   officeId: 45,
//   isOpened: true,
//   contacts: {
//     phone: "+98799778977628",
//     email: "myoffice@gmail.com",
//     address: {
//       city: "Tashkent",
//     },
//   },
// };

// console.log(info);

// arrays in typescript///////////////////////////////////////////////////////////////////////////
// const skills: string[] = ["Dev", "Devops", "Testing", "Chess", "Coding"];
// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }

// const res = skills
//   .filter((s) => s !== "Dev")
//   .map((s) => s + "some")
//   .reduce((a, b) => a + b);

// console.log(res);

// readonly in typescript//////////////////////////////////////////////////////////////////////////
// const skill: readonly [number, string] = [1, "Dev"];
// let skills: ReadonlyArray<string> = ["sev", "vara"];
// console.log(skills);

// enum QuestionStatus {
//   Published = "published",
//   Draft = "draft",
//   Deleted = "deleted",
// }

// async function getFaqs(req: {
//   topicId: Number;
//   status: QuestionStatus;
// }): Promise<
//   {
//     question: string;
//     answer: string;
//     tags: string[];
//     likes: number;
//     status: QuestionStatus;
//   }[]
// > {
//   const res = await fetch("/faqs", {
//     method: "POST",
//     body: JSON.stringify(req),
//   });
//   const data = await res.json();
//   return data;
// }

// console.log(
//   getFaqs({
//     topicId: 4,
//     status: QuestionStatus.Published,
//   })
// );

// unions in typescript////////////////////////////////////////////////////////////////////////////

// function logId(id: number | string | boolean) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// function logArr(id: string | string[]) {
//   if (Array.isArray(id)) {
//     console.log(`${id} is array`);
//   } else {
//     console.log(id);
//   }
// }

// function logObj(obj: { a: number | string } | { b: number | Boolean }) {
//   if ("a" in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }

// console.log(logId("Sevara"));
// console.log(logArr(["Anybody", "Someone", "Somebody"]));
// console.log(logObj({ a: "Sevara" }));

// type alies in typescript//////////////////////////////////////////////////////////////////////////////////

// type User = {
//   name: string;
//   description: string;
//   age: number;
//   retired: boolean;
// };

// type UserId = {
//   id: number | string;
// };

// type UserTogether = User & UserId;

// const Sevara: User = {
//   name: "Sevara",
//   description: "Beautiful",
//   age: 20,
//   retired: false,
// };

// const Ravshan: UserTogether = {
//   name: "Ravshan",
//   description: "handsome",
//   age: 18,
//   retired: false,
//   id: "ravshan",
// };
// console.log(Ravshan);
// console.log(Sevara);

// interface in typescript//////////////////////////////////////////////////////////////////////////////
// interface User2 {
//   name: string;
//   description: string;
//   age: number;
//   retired: boolean;
// }

// interface UserId2 extends User2 {
//   id: number | string;
// }

// const Sevara: User2 = {
//   name: "Sevara",
//   description: "Beautiful",
//   age: 20,
//   retired: false,
// };

// const Ravshan: UserId2 = {
//   name: "Ravshan",
//   description: "handsome",
//   age: 18,
//   retired: false,
//   id: "ravshan",
// };
// console.log(Ravshan);
// console.log(Sevara);

// optional chain in typescript////////////////////////////////////////////////////////////////////
// type User = {
//   login: string;
//   password?: string;
// };
// const Sevara: User = {
//   login: "email@gmail.uz",
//   password: "some",
// };// console.log(Sevara);

// function multiply(first: number, second?: number) {
//   if (!second) {
//     return first * first;
//   }
//   return first * second;
// }
// function something(param?: number) {
//   const t = param ?? multiply(5);
//   if (t) {
//     console.log(t);
//     return t;
//   }
//   return param;
// }
// something();

// service answer exercise////////////////////////////////////////////////////////////////////
// interface RequestPayment {
//   sum: number;
//   from: number;
//   to: number;
// }
// enum Status {
//   Success = "success",
//   Failded = "failed",
// }
// interface IDataSuccess extends RequestPayment {
//   databaseId: number;
// }
// interface IDataFailed {
//   errorMessage: string;
//   errorCode: number;
// }
// interface IResponse {
//   status: Status;
//   data: IDataSuccess | IDataFailed;
// }
// interface IResponseFailed {
//   status: Status.Failded;
//   data: IDataFailed;
// }
// interface IResponseSuccess {
//   status: Status.Success;
//   data: IDataSuccess;
// }
// type Res = IResponseFailed | IResponseSuccess;
// function toIdentifySuccess(res: Res): res is IResponseSuccess {
//   if (res.status === Status.Success) {
//     return true;
//   }
//   return false;
// }
// function toGetId(res: Res): Number {
//   if (toIdentifySuccess(res)) {
//     {
//       return res.data.databaseId;
//     }
//   }

//   return res.data.errorCode;
// }

// interface User {
//   name: string;
//   description: string;
//   age: number;
//   retired: boolean;
// }

// const user: User = {
//   name: "sevara",
//   description: "sevara",
//   age: 2,
//   retired: true,
// };

// interface Admin {
//   name: string;
//   role: number;
// }

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

// class User {
//   constructor(public name: string) {}
//   fix() {
//     console.log("hello");
//   }
//   fel() {
//     console.log("fel");
//   }
// }
// const user = new User("Sevara");

// console.log(user.fix);

// 17.02.2024 practise**********************************************************************************
// class User {
//   constructor(
//     public readonly name: string,
//     public age: number,
//     private lang: string,
//     protected music: string
//   ) {}
//   public getAge() {
//     return `I'am ${this.name} and i'm ${this.age} years old`;
//   }
// }

// class Info extends User {
//   constructor(
//     public surname: string,
//     name: string,
//     age: number,
//     lang: string,
//     music: string
//   ) {
//     super(name, age, lang, music);
//   }
// }

// interface Someone {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class AnotherOne implements Someone {
//   name: string;
//   instrument: string;
//   constructor(name: string, instrument: string) {
//     (this.name = name), (this.instrument = instrument);
//   }

//   play(action: string) {
//     return `${this.name}  ${action} best ${this.instrument}`;
//   }
// }

// const gitarist = new AnotherOne("Jim", "Guitar");
// console.log(gitarist.play("plays"));

// 18.02.2024****************************************************************************************

// class Person {
//   private _age: number;
//   private _name: string;
//   private _surname: string;

//   constructor(_age: number, _name: string, _surname: string) {
//     this._age = _age;
//     this._name = _name;
//     this._surname = _surname;
//   }

//   public get age() {
//     return this._age;
//   }

//   public set age(value: number) {
//     if (value <= 0 || value >= 200) {
//       throw new Error("This age is invalid");
//     }
//     this._age = value;
//   }

//   public get firstName() {
//     return this._name;
//   }
//   public set firstName(value: string) {
//     if (!value) {
//       throw new Error("You have to write firstname");
//     }

//     this._name = value;
//   }
//   public get lastName() {
//     return this._surname;
//   }
//   public set lastName(value: string) {
//     if (!value) {
//       throw new Error("You have to write surname");
//     }

//     this._surname = value;
//   }
// }

// const user = new Person(24, "Sevara", "Obidova");
// user.age = 22;
// user.firstName = "Sevara";
// user.lastName = "Obidova";
// console.log(user.age);

// class User {
//   _login: string;
//   _pasword: number;

//   set getLogin(value: string) {
//     if (!value) {
//       throw new Error("You have to write login");
//     }

//     this._login = value;
//   }
// }

// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class NewUser extends Array<User> {
//   getUser(name: string) {
//     return this.filter((u) => u.name === name);
//   }
//   override toString(): string {
//     return this.map((u) => u.name).join(" ,");
//   }
// }

// const user = new NewUser();
// user.push(new User("Sevara"));
// user.push(new User("Olima"));
// user.push(new User("Hayot"));
// console.log(user.toString());
