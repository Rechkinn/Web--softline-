
function task1() {
    let name = prompt("Введитие ваше имя"); age = prompt("Введите ваш возраст");
    alert(`ИМЯ: ${name}\nВОЗРАСТ: ${age} лет`);
}

function task2() {
    let distance = prompt(`Введите расстояние в метрах`);
    document.write(`<h1>Число полных километров: ${(distance - distance%1000)/1000}</h1> `);
}

function task3() {
    let temperature = prompt(`Введите температуру в градусах Цельсия`);
    document.write(`<h2>${temperature} градусов по Цельсию это ${temperature*1.8 + 32} градусов по Фаренгейту</h2>`)
}
