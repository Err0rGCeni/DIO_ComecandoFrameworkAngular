"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let dados = ["felipe", 'ana'];
let other = [1, 2, 3];
let test = ['1', 2];
let tupla = ['oi', 123, 456];
let birth = new Date("2077-07-07");
console.log(birth.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(5, 7);
console.log(soma);
function CallToPhone(phone) {
    return phone;
}
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Nome";
    });
}
const bot1 = {
    id: 1,
    name: "megaman"
};
const bot2 = {
    id: 'eu',
    name: "robô",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello, it's ${this.name}!`;
    }
}
const p = new Pessoa(1, 'bepbox');
console.log(p.sayHello());
class Character {
    constructor(strength, skill) {
        this.name = "name";
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points!`);
    }
}
const p1 = new Character(10, 99);
p1.attack();
