//Good practice
//console.log name of variables has name
console.log({
        foo,
        bar,
        baz
    })
    // css style sheet for console log
console.log('%c Myfriends', 'color:orange; font-weight: bold;')

//view object in a table

console.table([])
    // console.time
console.time('looper')
let i = 0;
while (i < 1000000) {
    i++
}

console.timeEnd('looper')

//console log to trace where function deleted item, it logs where it appeared

const deleteMe = () => console.trace('bye bye item')
deleteMe()
deleteMe()



//Decunstructing 

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

function feed({
    name,
    meal,
    diet
}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

function feed(animal) {
    const {
        name,
        meal,
        diet
    } = animal;
    return `Feed ${name} $ {meal} kilos of ${diet}`;
}

//II

const horse = {
    name: 'Bob',
    legs: 4,
    size: large,
    meal: 10,
    skills: ['walking', 'racing'],
    age: 7,
}

const {
    name,
    size,
    skills
} = horse;

let bio = `${name} us a ${size} and age ${age}`

console.log(bio);


// tag example

function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge `This horse is ${horse.age}`;


//Object

const pikachu = {
    name: 'pikachu'
};
const stats = {
    hp: 40,
    attack: 60,
    defense: 45
}

const lv10 = {...pikachu,
    ...stats
}
const lv11 = {...pikachu,
    hp: 45
}

//array push multiple elements to the array, second element for unshift

let pokemon = ['Arbok', 'Raichu', 'Sandshrew']

pokemon = [...pokemon, 'bulb', 'meta', 'weedle']

pokemon = ['bulb', 'meta', 'weedle', ...pokemon]


//loops

const orders = [500, 30, 99, 15, 223];

const total = orders.reduce((acc, cur) => acc + cur)

//map 

const withTax = orders.map(v => v * 1.1)

const highValue = orders.filter(v => v > 100);

//asyinc await

const random = () => {
    return Promise.resolve(Math.random())
}

const sumRandomAsyncNums = asyinc() => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first+second+third}`);
}