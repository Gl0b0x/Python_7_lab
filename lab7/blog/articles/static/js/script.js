let students = [
    {
      name: "Александр",
      surname: "Иванов",
      group: "БВТ1702",
      marks: [4, 3, 5],
    },
    {
      name: "Иван",
      surname: "Петров",
      group: "БСТ1702",
      marks: [4, 4, 4],
    },
    {
      name: "Кирилл",
      surname: "Смирнов",
      group: "БАП1801",
      marks: [5, 5, 5],
    },
  ];
  console.log(students);
  
  function rpad(str, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки, т.е. аналога ljust из Python здесь нет
    str = String(str); // преобразование в строку
    while (str.length < length) str = str + " "; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
    return str;
  }
  
  function printStudents(students) {
    console.log(
      rpad("Имя", 15),
      rpad("Фамилия", 15),
      rpad("Группа", 8),
      rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (let i = 0; i <= students.length - 1; i++) {
      // в цикле выводится каждый экземпляр студента
      console.log(
        rpad(students[i]["name"], 15),
        rpad(students[i]["surname"], 15),
        rpad(students[i]["group"], 8),
        rpad(students[i]["marks"], 20)
      );
    }
    console.log('\n')
  }
  
  function filter_group() {
    let res = [];
    let group = prompt("Группа");
    for (let i = 0; i < students.length; i++)
      if (students[i]["group"] == group) res.push(students[i]);
    return res;
  }
  function sum(obj) {
    let k = 0;
    for (let i = 0; i < obj.length; i++) k = k + obj[i];
    return k;
  }
  function filter_grade() {
    let res = [];
    let grade = +prompt("Средний балл");
    for (let i = 0; i < students.length; i++)
      if (sum(students[i]["marks"]) / students[i]["marks"].length >= grade)
        res.push(students[i]);
    return res;
  }
  printStudents(students);
  
  printStudents(filter_group());
  printStudents(filter_grade());