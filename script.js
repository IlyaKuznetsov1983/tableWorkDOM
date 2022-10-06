// for (var  i = 0; i < 5; i++) {
//     setTimeout( () =>{
//         console.log(i)
//     }, 0)
// }


// const checkEvent = (1,2,3,4,5,6,7,8,9);
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log( i );
//     }
// }


// конкретинация 23

// const a = '2'
// const b = 3
// const c =  a + b
//
// console.log(c)


// const test = [] + null * 1 + '2'
//
// console.log(test)

 /////

// const test = [] + null * 1 + '2'
//
// console.log([] + null * 1)

// const foo = ('* / - +', 1, 2, 3)
// function result( symbol , number)  {
// return (result);
// }
//
// console.log(foo);



// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
//
// const foo = (arr, value) => {
//
// }
// for(var i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// foo(arr, 2)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//
// const foo = (arr) => {
// return arr.slice(1, -1).join(' ') || null
// }
//
// console.log(foo(arr))

// let someArray = ['Tony', 'Stark', {name: null, arr:[ 'text', 'text2']}, [1, 45, 2, 5, 34, 9, 11]]
// const [t, s] = Array.prototype.slice.call(name, someArray);
// console.log(someArray);
//
// function foo () {
//     console.log(this)
// }
//
// window.foo()


// console.log(myName)
//
// const  p = document.querySelector('first')
// const  span = document.querySelector('span')
//
// let text = document.createElement('span')
// text.innerText = myName
//
// p.insertAdjacentHTML('beforeend', text)
//
// document.addEventListener('DOMContentloaded', ()=>{
//     console.log('DOMContentloaded')
// })
//
// window.addEventListener('load', ()=>{
//     console.log('load')
//     console.log(picture.offsetHeight)
// })
//
// window.onload = function () {
//     console.log('load')
// }
//
// function unload(){
//     navigator.sendBeacon('some path', JSON.stringify( {
//         data:"some data"
//     }))
// }
//
// window.addEventListener('unload', unload)
//
// function beforeunload (){
//     console.log('beforeunload')
//     return false
// }
//
// window.addEventListener('beforeunload', beforeunload)





// function appendNewScript() {
//     const script = document.createElement('script')
//     script.src = './newScript.js'
//     console.log('append newScript')
//     document.body.prepend(script)
// }
// appendNewScript()
// printScriptName()
//
// document.addEventListener('DOMContentLoader', () => {
//     console.log('DOMContentLoader')
// })
//




// function appendNewScriptWithCallBack(srcPath, callBack) {
//     const script = document.createElement('script')
//     script.src =srcPath
//     script.onload = () => {
//         console.log( 'загрузился')
//         callBack()
//     }
//     script.onerror = () => {
//         callBack(new Error('скрипт лег'))
//     }
//     document.body.prepend(script)
// }
//
// function customCallBack(){
//     console.log('сработало коллбэк')
//     printScriptName()
// }
//
// appendNewScriptWithCallBack('./newScript.js', function (error){
//     if(error) {
//         console.log(error)
//     }else{
//         printScriptName()
//         appendNewScriptWithCallBack('./secondNewScript.js', function (error){
//         if(error) {
//             console.log(error)
//         }else{
//             printScriptName()
//     }
//     printScriptName()
//     appendNewScriptWithCallBack('./secondNewScript.js', function () {
//         printScriptName()
//     })
// })



// PROMISE
//
// const promise = new OurPromise((resolve, reject) => {
//     console.log('Promise запустился сразу')
//     setTimeout(() =>{
//         console.log('Зашли с сеттаймаут')
//         resolve('оТВЕТ')
//     }, 1000)
//     console.log('лог после resolve')
// })
//
//
// let result = promise.then((result) => {
//     console.log('первый дзен', result)
//     result.toUpperCase()
// }).then((result2) => {
//     console.log('второй дзен', result2)
//     return result2 + 'добавить еще строку'
// }).catch((error) => {
//     console.log('catch error', error)
//     return 2
// }).finally(() => {
//     console.log('finally')
// })
//
// console.log(result)
//
// class  OurPromise {
//     constructor(executor) {
//         this.lineHandlers = []
//         this.errorHandler = () => {
//
//         }
//         this.finallyHandler = () => {
//
//         }
//
//         try {
//             executor(this.resolve.bind(this), this.reject.bind(this))
//
//         } catch (e) {
//             this.errorHandler(e)
//         }
//         executor(this.resolve, this.reject,)
//     }
//
//     resolve(data){
//         this.lineHandlers.forEach(callBack => {
//             data = callBack(data)
//         })
//         this.finallyHandler()
//     }
//      // резолв или реджект ожидают только один аргумент. все доп аргументы будут проигнорированны
//     reject(error)
//     then(callBack){
//         // необходим для чейнинга
//         this.lineHandlers.push(callBack)
//             //взвратит обьект который содержит все методы инстанса класса
//         return this
//     }
//
//
//     // цепочка промисов подходит для перехватат ошибок. если промис
//     // завершается с шибкой то управление переходит в ближайший обработчик ошибок catch
//
//     catch(callBack){
//         this.errorHandler = fn
//         return this
//     }
//
//     finally(callBack){
//         this.finallyHandler(fn)
//         return this
//     }
//
//
// }
//
// let a = 'a'
// a= {car:'bmw'}
// function  foo(param) {
    //1вариант
    // param = 'b'
    // return param

    //2ваирант
    // console.log('получили', param)
    // param = 'b'
    // param.car = 'audi'
    // return param



}
//
// console.log(foo(a))
// console.log(a)

//
// // TODO promise.all
//
// //массив промисов и итерируемые объекты
//
// function getRandomInitInclusive(min, max){
//     min = Math.ceil(min)
//     min = Math.ceil(max)
//     const result = Math.floor(Math.random() * (max - min + 1) + min)
//     return result
// }






//создать рандомный




//
// function renderResult(height) {
// const block = document.createElement('div')
//     block.style.height = `${height}px`
//     block.style.background = `
//     rgb(${getRandomInitInclusive(0, 255)},
//      ${getRandomInitInclusive(0, 255)},
//      ${getRandomInitInclusive(0, 255)},)
//     `
//     document.body.append(block)
// }
//
// let promisesResult = Promise.all([
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(renderResult(30, 1)), 3000)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(renderResult(20, 2)),200)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(renderResult(40, 3)),1000)
//     }),
// ])
// console.log(promisesResult)
// promisesResult.then((result) => console.log(result)).catch((result) =>
// console.log(result))





// function createRandomCircle() {
//     const circle = document.createElement("div");
//     circle.classList.add("circle");
//     const size = getRandomNum(5, 50);
//     const a = boardEl.getBoundingClientRect();
//     circle.style.width = circle.style.height = size + "px";
//     circle.style.background = "#fff";
//     const x = getRandomNum(0, width - size);
//     const y = getRandomNum(0, height - size);
//     circle.style.left = x + "px";
//     circle.style.top = y + "px";
//     boardEl.append(circle);
}


// // TODO async / await
//
// async function aFoo(){
//     console.log(1)
//     return 1
// }
// aFoo()
//
// console.log(2)

// TODO await

// async function justF(){
//
//     console.log('q')
//     let promise = await new Promise((resolve) => {
//
//         console.log('c')
//         setTimeout(() => resolve(2),1500)
//     })
//
//     console.log('b')
//     return promise
// }
//
// console.log('w')
//     justF()
//
// console.log('h')


// async  function aFoo () {
//     await  new Promise(resolve => setTimeout((e) => resolve(e), 1000))
//     return 2
// }
//
// async function secondFoo() {
//
//     let r = await  aFoo()
//     console.log(r)
// }
// secondFoo()

setTimeout(() => {
    console.log('s1')
},0)
setTimeout(() => {
    console.log('s2')
},0)

new  Promise((resolve) => {
    console.log('p1')
    resolve()
    console.log('p2')
}).then(() => {
    console.log('p3')
})

console.log('w1')

async function test1(){
    console.log('a1')
    await test2()
    console.log('a2')
}

async function test2(){
    console.log('a3')

}
test1()

console.log('w2')