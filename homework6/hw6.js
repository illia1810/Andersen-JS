//Ситуация №1

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 1"));
  console.log("Listener 1");
});

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 2"));
  console.log("Listener 2");
});

/*
JS проходит по нашему коду сверху вниз, обработчики событий сработают в порядке написания их в коде.
Сначала в стек попадёт первый обработчик событий, и его выполнение будет происходить так:
 -- функция обработчика событий попадает в колл стек;
 -- внутри нашей функции есть промис, который добавляется в стек, а метод then() добавляет console.log('Microtask 1') в очередь микрозадач;
 -- в стек попадает console.log('Listener 1');
 -- данный консоль лог выполняется, и удаляется в стеке, функция обработчика событий так же удаляется из стека;
 -- когда колл стек пустой в него попадают микрозадачи с очереди;
 -- в колл стек попадает console.log('Microtask 1');
 -- этот консоль лог выполняется и удаляется из стека;
Когда наш колл стек и очередь микротасок пусты, JS переходит к выполнению второго обработчика событий, в котором сценарий выполенния кода
будет таким же как и для первого. Сначала выполниться console.log('Listener 2') и потом console.log('Microtask 2').
После выполнения этой ситуации консоль будет выглядеть так:
    Listener 1
    Microtask 1
    Listener 2
    Microtask 2
*/

// Ситуация №2

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 1"));
  console.log("Listener 1");
});

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("Microtask 2"));
  console.log("Listener 2");
});

button.click();

/*
В этой ситуации работа и вывод будут немного отличатся от первого случая. Сценарий выполнения кода будет выглядеть так:
 -- функция button.click() первой попадёт в колл стек;
 -- далее в колл стек попадает футнкия обработчика первого события;
 -- промис нашей функции попадает в стек;
 -- колбек метода промиса then() console.log("Microtask 1") попадает в очередь микрозадач;
 -- в стек добавляется console.log("Listener 1") и сразу же выполняется и удаляется из стека;
 -- функция обработчика первого события так же удаляется из стека, но микрозадачи мы пока не можем выполнить т.к. в колл стеке всё ещё находится 
 функция button.click();
 -- далее переходим ко второму обработчику событий, здесь как и в первом обработчике console.log("Microtask 2") попадает в очередь микрозадач,
 и console.log("Listener 2") выполняется сразу и удаляется со стека;
 -- после этого button.click() удаляется с колл стека и JS выполняет микрозадачи которые находятся в очереди;
 -- с очереди микрозадач добавляем в колл стек console.log("Microtask 1"), выполняем и удаляем со стека;
 -- далее добавляем в колл стек console.log("Microtask 2"), выполняем и удаляем со стека;
Очередь микрозадач и стек пусты, работа программы завершена. 
В результате в консоле мы получим:
    Listener 1
    Listener 2
    Microtask 1
    Microtask 2
*/
