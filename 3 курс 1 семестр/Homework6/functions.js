
function task1(minutes, priceForOneMinute) {
    let price = minutes*priceForOneMinute;
    let date = new Date();
    if(date.getDay() == 6 || date.getDay() == 0) {
        price *= 0.8;
    }
    document.write(`<h4>Разговор продлился ${minutes} минут, стоимость разговора: ${price}</h4>`);
}

function task2(a, b, c) {
    
    let D = b*b - 4 * a * c;
    if(D < 0) {
        document.write(`<h4>Уравнение не имеет действительных корней.</h4>`);
    }
    else {
        let x1 = ((-1 * b + Math.sqrt(D)) / (2*a)).toFixed(2);
        let x2 = ((-1 * b - Math.sqrt(D)) / (2*a)).toFixed(2);
        document.write(`<h4>X1 = ${x1}</h4>`);
        if(x1 != x2) { // нет смысла выводить второй такой же корень, если х1 равен х2
            document.write(`<h4>X2 = ${x2}</h4>`);
        }
    }
}

function task3(a, b) {
    document.write(`<h4>a = ${a}; b = ${b}`);
    if(a >= 0 && b >= 0){
        document.write(`<h4>a - b = ${a-b}</h4>`);
    } 
    else if(a < 0 && b < 0){
        document.write(`<h4>a * b = ${a*b}</h4>`);
    }
    else{
        document.write(`<h4>a + b = ${a+b}</h4>`);
    }
}
