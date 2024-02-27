"use strict";
// const a = 1;
// console.log(a);
const student1 = {
    id: "hello",
    name: "Sevara",
    age: 12,
};
//used for omitting selected property of an object
// type NewStudent = Omit<IStudent, "id">;
//example:
// const newstudent: NewStudent = {
//   name: "Sevara",
//   age: 12,
// };
//used for making the fields of object optional
// type UpdatedStudent = Partial<IStudent>;
//example:
// const updatedstudent: UpdatedStudent = {
//   name: "Hello",
// };
//used for picking just selected properties of an object
// type PickedStudent = Pick<IStudent, "id" | "name">;
//example:
// const picked: PickedStudent = {
//   id: "hello",
//   name: "hello",
// };
// type RequiredStudent = Required<IStudent, "id" | "name">;
// Await type********************************************************************************************
// It helps to handle promise
// async function fetchData(): Promise<string> {
//   const data = await fetch("https://fakestoreapi.com/products");
//   return await data.text();
// }
// type Data = Awaited<Promise<string>>;
// let myData: Data;
// (async () => {
//   try {
//     myData = await fetchData();
//     console.log(myData);
//   } catch (err) {
//     console.log(err);
//   }
// })();
// Partial - hamma typelani optional qiladi
// type NewStudent = Partial<IStudent>;
// const newStudent: NewStudent = {
//   id: "hello",
//   age: 23,
// };
// console.log(newStudent);
// Required - hamma fieldsni majburiy qiladi, yana birorta ham field yozilmay qolishi mumkin emas.
// type RequiredStudent = Required<IStudent>;
// const requiredStudent: RequiredStudent = {
//   id: "hello",
//   age: 12,
//   name: "Sevaar",
// };
// Readonly-bir marta value kiritilgandan keyin o'zgartirmaslik uchun ishlatiladi
// type ReadOnlyStudent = Readonly<IStudent>;
// const readOnlyStudent: ReadOnlyStudent = {
//   id: "sevara",
//   age: 12,
//   name: "Sevara",
// };
// readOnlyStudent.name = "Sevarichka"; it gives error because we cant change name's value after giving it one in an object. and we can use it with frozen objects
// console.log(readOnlyStudent);
// Record - objectning konstruksiyasini o'zimiz xohlagan key va xohlagan valuedan qo'yishimiz uchun ishlatiladi
const newStudent = {
    hello: 12,
    12: 15,
};
console.log(newStudent);
const newuser = {
    miffy: { id: "nm", name: "sevara", age: 12 },
    boris: { id: "nm", name: "sevara", age: 12 },
    mordred: { id: "nm", name: "sevara", age: 12 },
};
console.log(newuser);
