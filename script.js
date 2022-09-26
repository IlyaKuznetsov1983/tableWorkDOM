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