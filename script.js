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

let a = 'a'
a= {car:'bmw'}
function  foo(param) {
    //1вариант
    // param = 'b'
    // return param

    //2ваирант
    // console.log('получили', param)
    // param = 'b'
    // param.car = 'audi'
    // return param



}

console.log(foo(a))
console.log(a)