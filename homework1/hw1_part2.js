function operationWithNumbers(){
    let a = prompt("Введите число a");
    if(!Number(a)){
        alert("Некорректный ввод!");
        return false;
    } else{
        let b = prompt("Введите число b");
        if(!Number(b)){
            alert("Некорректный ввод!");
            return false;
        } else return alert(`Ответ: ${Number(a) + Number(b)}, ${Number(a) / Number(b)}.`)
    }
}
operationWithNumbers()