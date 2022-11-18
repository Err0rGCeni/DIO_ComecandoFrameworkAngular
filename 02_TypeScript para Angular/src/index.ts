//Types
let dados: string[] = ["felipe", 'ana']
let other: Array<number> = [1, 2, 3]

let test: (string | number)[] = ['1', 2]
let tupla: [string, number, number] = ['oi', 123, 456]

let birth: Date = new Date("2077-07-07")
console.log(birth.toString())
//Functions
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(5, 7)
console.log(soma)

function CallToPhone(phone: number | string): number | string {
    return phone
}

async function getDatabase(id: number): Promise<string> {
    return "Nome"
}
//Types x Interfaces
type robot = {
    readonly id: number | string;
    name: string
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman"
}

const bot2: robot2 = {
    id: 'eu',
    name: "robô",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id
        this.name = name
    }

    sayHello(): string {
        return `Hello, it's ${this.name}!`
    }
}

const p = new Pessoa(1, 'bepbox')
console.log(p.sayHello())
//Classes
class Character {
    private name?: string;
    strength: number;
    public skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = "name"
        this.strength = strength
        this.skill = skill
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points!`)
    }
}

class Magician extends Character {
    magicPoints: number
    constructor(name: string, strength: number, skill: number, magicPoints: number) {
        super(name, strength, skill)
        this.magicPoints = magicPoints
    }
}

const p1 = new Character("eu", 10, 99)
p1.attack()

//Generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
//const stgArray = concatArray<string[]>(['Eu', 'Ele'], ['Nós'])
console.log(numArray)

//Decorators
function ExibirNome(target: any) {
    console.log(target)
}

@ExibirNome
class Funcionario { }

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version })
    }
}

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key]

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            } else {
                _value = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }

}

@apiVersion("1.10")
class Api {
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

const api = new Api("SouMaiorDoQue3!")
console.log(api.name)