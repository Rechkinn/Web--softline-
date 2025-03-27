
function task1(values) {
    let sum = 0;
    for(let i = 0; i < values.length; i++) {
        document.write(`<h4>Элемент №${i+1}: ${values[i]}</h4>`);
        sum += values[i];
    }
    let mid = sum / values.length;
    document.write(`<h4>Cумма элементов массива: ${sum}. Среднее арифметическое массива: ${mid}</h4>`);
}

function task2() {
    
    let sum = 0;
    for(let i = 2; i <= 100; i++) {
        if(i % 2 == 0 && i % 3 == 0) {
            sum+=i;
            document.write(`<h4>${i}</h4>`);
        }
    }
    document.write(`<h4>Сумма чисел, удовлетворяющих условию: ${sum}</h4>`);

}


