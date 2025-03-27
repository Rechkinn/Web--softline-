
function Student(id, fio, grade) {
    this.id = id;
    this.fio = fio;
    this.grade = grade;
}

function studentsHaveGoodGrade(students) {


    // Случай 1
    document.write("<h1>Случай 1</h1>");
    // Чаще всего средний балл округляется по правилам математики. 
    // Т.е. средний балл 3.49 - это 3 в четверти, а 3.5 - это 4 в четверти. 
    let flag = true;
    for(let i = 0; i < students.length; i++){
        if(Math.round(students[i].grade) >= 4) {
            document.write(`<h3>Студентом ударником является студент ${students[i].fio} Он учится на оценки: ${Math.round(students[i].grade)}</h3>`);
            flag = false; // был найден хотя бы один студент ударник
        }
    }
    if(flag){
        document.write(`<h3>Студенты ударники отсутствуют!</h3>`);
    }



    // Случай 2
    document.write("<h1>Случай 2</h1>");
    // Если в задании имелось ввиду, что студент без всяких округлений
    // имеет средний балл больше или равный 4 
    flag = true;
    for(let i = 0; i < students.length; i++){
        if(students[i].grade >= 4) {
            document.write(`<h3>Студентом ударником является студент ${students[i].fio} Его ID: ${students[i].id}. Он учится в нашем ВУЗе со средним баллом: ${students[i].grade}</h3>`);
            flag = false; // был найден хотя бы один студент ударник
        }
    }
    if(flag){
        document.write(`<h3>Студенты ударники отсутствуют!</h3>`);
    }
}

function task1() {
    
    let secondName = [`Петров А.В.`, `Иванов О.В.`, `Воронов Н.С.`, `Ульянов Л.И.`,`Курасов М.М.`];

    let students = [];

    for(let i = 0; i < secondName.length; i++) {
        students.push(new Student(i+1, secondName[i], (Math.random() * (5-2) + 2).toFixed(2)));
        document.write(`<p>ID: ${students[i].id}. ФИО: ${students[i].fio}. Средний балл: ${students[i].grade}</p>`);
    }
    
    studentsHaveGoodGrade(students);

}





function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

function task2() {
    
    let fio = [`Петров А.В.`, `Иванов О.В.`, `Воронов Н.С.`, `Ульянов Л.И.`,`Курасов М.М.`];

    let employees = [];
    for(let i = 0; i < fio.length; i++) {
        employees.push(new Employee(i+1, fio[i], Math.ceil(Math.random() * (30000 - 5000) + 5000)));
        document.write(`<p>ID: ${employees[i].id}. ФИО: ${employees[i].name} Оклад: ${employees[i].salary}</p>`);
    }

    maxSalary(employees);
}

function maxSalary(employees) {
    let maxSalary = -1;
    let place;
    document.write(`<h2>Сотрудник с максимальным окладом:</h2>`);
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].salary > maxSalary) {
            maxSalary = employees[i].salary;
            place = i;
        }
    }
    document.write(`<p>ID: ${employees[place].id}. ФИО: ${employees[place].name} Оклад: ${employees[place].salary}</p>`);
}

