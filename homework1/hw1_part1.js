let a = prompt("Введите число a");
let b = prompt("Введите число b");
if(Number(a) && Number(b)){
    alert('Результат: ' + Number(a).toString(Number(b)));
} else {
    alert("Некорректный ввод!");
}