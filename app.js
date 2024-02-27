"use strict";
// const a = 1;
// console.log(a);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("https://fakestoreapi.com/products");
        return yield data.text();
    });
}
let myData;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        myData = yield fetchData();
        console.log(myData);
    }
    catch (err) {
        console.log(err);
    }
}))();
