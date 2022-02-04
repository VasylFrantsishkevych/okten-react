
// import {missionService} from "./services/mission.service";
//
// missionService.getAll().then(value => value.data).then(missions => {
//     for (let mission of missions) {
//         console.log(mission);
//     }
// })

import {IUser} from "./interfaces/user.interface";

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

const sum = (a: number, b: number): number => {
    return a +b
}
console.log(sum(10,10));

const showSum = (a: number , b: number): void => {
    console.log(a + b);
}
showSum(10, 20);


const incAge = (someUser: IUser, inc: number):  IUser => {
    someUser.age += inc
    return someUser
}
incAge(user, 2);


