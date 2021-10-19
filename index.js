// const person = new Object({
//     name:'Maxim',
//     age:25,
//     greet:hello,
//     sayHello:function(work,salary){
//         console.log('My name is '+this.name,
//                     'my wishes position is '+work,
//                     'and wishes salary is ' + salary);
//     }
// })
// Object.prototype.sayHello = function(){
//     console.log('Hello');
// }

// const lena = Object.create(person)
// const lena = {
//     name: 'Elena',
//     age: 23
// }

// const str = new String('I`m string');

// function hello(){
//      console.log('Hello',this.name);
// }

//person.sayHello.bind(lena,'.Net',12000)();
//person.sayHello.call(lena,'Java',11000);
//person.sayHello.apply(lena,['Web-developers',10000]);

// function createCalcFunction(n){
//    return function(){
//        console.log(1000*n)
//    }
// }

// const calc = createCalcFunction(2);
// calc();

// function createIncrementor(n){
//     return function(num){
//         return n + num
//     }
// }
// const addSeven=createIncrementor(7);
//console.log(addSeven(10));

// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }

// const comDomain = urlGenerator('com');
// const uaDomain = urlGenerator('ua');

// console.log(comDomain('google'));
// console.log(uaDomain('dou'));
// function logPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {name:'Mike',age:22,job:'Frontend'}
// const person2 = {name:'Lena',age:19,job:'SMM'}

// function bind(obj,func) {
//     return func.bind(obj)
// }

// bind(person1,logPerson)()
// bind(person2,logPerson)()

// console.log('Start');

// setTimeout(function() {
//     console.log('setTimeout');
// },0)

// console.log('Start2');
// console.log('Start3');
// console.log('Start4');
// console.log('End');

// console.log('Request data...');

// setTimeout(()=>{
//     console.log('Preparing data')
//     const backendData = {
//         server:'aws',
//         port:2000,
//         status:'working'
//     }
//     setTimeout(()=>{
//         backendData.modified=true;
//         console.log('Data received',backendData)
//     },2000);
// },2000);

// const p = new Promise((resovle,reject)=>{
//     setTimeout(()=>{
//         console.log('Preparing data...')
//         const backendData = {
//             server:'aws',
//             port:2000,
//             status:'working'
//         }
//         resovle(backendData)
//     },2000)
// })

// p.then((data)=>{
//     return p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             data.modified = true
//             resolve(data)
//         },2000)
//     })
//     // p2.then((clientData)=>{
//     //     console.log('Data received',clientData)
//     // })
// }).then(clientData=>{
//     console.log('Data received',clientData)
//     clientData.fromPromise=true
//     return clientData
// }).then(data=>{
//     console.log('Modified',data)
// })

// function add(a, b) { return a * b; };
// var add = function add(a, b) { return a + b; };
// console.log(add(2,3));

// if('c' in window){
//     let c = 1;
// }
// alert(window.c);

// function checkAge(age){
//     age > 12 ? return true : confirm('Поручитель заверил?')
// }

// class Animal{
//     name;
//     brad;
//     constructor(name,brad){
//         this.name = name;
//         this.brad = brad;
//     }
//     voice(){
//         console.log(`${this.name} видає звук`);
//     }
// }

// class Cat extends Animal{
//     constructor(name,brad){
//         super(name,brad);
//     }
//     voice(){
//         console.log(`${this.name} мяукає`);
// }
// }

// var cat = new Cat('Barsik','Grey');
// cat.voice();
// (function() {
//     f();

//          f = function() {
//             console.log(1);
//          }
//         })()
//       function f() {
//           console.log(2);
//       }
//        f();
