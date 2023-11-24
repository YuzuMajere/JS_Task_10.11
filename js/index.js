// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const minWeight = document.querySelector('.minweight__input');
const maxWeight = document.querySelector('.maxweight__input');
// const newObj = {};



// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "голубой", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

console.log(fruits);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов;
  fruitsList.innerHTML = '';
  // чтобы заполнить актуальными данными из fruits

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    let newLi = document.createElement("li");
    let newDiv = document.createElement("div");
    let indexDiv = document.createElement("div");
    let kindDiv = document.createElement("div");
    let colorDiv = document.createElement("div");
    let weightDiv = document.createElement("div");
    newLi.className = "fruit__item";
    newDiv.className = "fruit__info";
    indexDiv.innerHTML = i;
    kindDiv.innerHTML = fruits[i].kind;
    colorDiv.innerHTML = fruits[i].color;
    weightDiv.innerHTML = fruits[i].weight;
    switch (fruits[i].color) {
      case 'красный':
        newDiv.className += " fruit_red";
        break;
      case 'оранжевый':
        newDiv.className += " fruit_orange";
        break;
      case 'желтый':
        newDiv.className += " fruit_yellow";
        break;
      case 'зеленый':
        newDiv.className += " fruit_green";
        break;
      case 'голубой':
        newDiv.className += " fruit_lightBlue";
        break;
      case 'синий':
        newDiv.className += " fruit_blue";
        break;
      case 'фиолетовый':
        newDiv.className += " fruit_violet";
        break;
      default:
        newDiv.className += " fruit_default";
    }
    fruitsList.appendChild(newLi);
    newLi.appendChild(newDiv);
    newDiv.appendChild(indexDiv);
    newDiv.appendChild(kindDiv);
    newDiv.appendChild(colorDiv);
    newDiv.appendChild(weightDiv);
    // console.log(newLi, newDiv, indexDiv, kindDiv, colorDiv, weightDiv);
    // и добавляем в конец списка fruitsList при помощи document.appendChild
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    let indexArr = getRandomInt(0, fruits.length - 1);
    console.log(indexArr);
    result.push(fruits[indexArr]);
    fruits.splice(indexArr, 1);
    //! console.log(result);
    //! console.log('fruits_in_cycle', fruits);
    //? Подсказка: находим случайный элемент из fruits, используя getRandomInt
    //? вырезаем его из fruits и вставляем в result.
    //? ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    //? (массив fruits будет уменьшатся, а result заполняться)
  }

  fruits = result;
  console.log('fruits', fruits);
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  //* clearScreen();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
// const filterFruits = () => {
//   fruits.filter((item) => {
//     let minW = parseInt(minWeight.value);
//     let maxW = parseInt(maxWeight.value);

//     let k = 0;
//     //! console.log(minW, Number.isInteger(minW), maxW, Number.isInteger(maxW));
//     //! console.log(item.weight, Number.isInteger(item.weight));
//     if (item.weight >= minW && item.weight <= maxW) {
//       // console.log('TRUE', item.weight, Number.isInteger(item.weight));
//       newObj.kind = item.kind;
//       newObj.color = item.color;
//       newObj.weight = item.weight;
//       // newArr.push(fruits[item]);
//       console.log('newObj', newObj);
//       k++;
//       // newArr.push(fruits[item]);
//     } else {
//       // console.log('FALSE', item.weight, Number.isInteger(item.weight));
//       k++;
//       // fruits.splice(fruits.indexOf(item), 1);
//     }
//     console.log('newObj2', newObj);
//     console.log('fruits', fruits);
//     // TODO: допишите функцию
//   });
//   fruits = newObj;
// };

// const filterFruits = () => {
//   let minW = parseInt(minWeight.value);
//   let maxW = parseInt(maxWeight.value);
//   for (i = 0; i < fruits.length; i++) {
//     if (fruits[i].weight >= minW && fruits[i].weight <= maxW) {
//       newObj.kind = fruits[i].kind;
//       newObj.color = fruits[i].color;
//       newObj.weight = fruits[i].weight;
//     } else {
//       // fruits.splice(i, 1);
//     }
//   }
//   console.log(newObj, fruits);
//   fruits = newObj;
// }

const filterFruits = (arr) => {
  let minW = parseInt(minWeight.value);
  let maxW = parseInt(maxWeight.value);
  const filter = arr.filter((item) => item.weight > minW && item.weight < maxW)
  console.log('1', filter);
  fruits = filter;
  console.log('0', fruits);
  return fruits;
};

filterButton.addEventListener('click', () => {
  filterFruits(fruits);
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-';

const rainbowColors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  const priority1 = rainbowColors.indexOf(a.color);
  const priority2 = rainbowColors.indexOf(b.color);
  return priority1 > priority2;
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return this.quickSort(left).concat(pivot, this.quickSort(right));
  },

  startSort() {
    const start = new Date().getTime();
    let mass = [];
    let answer = [];
    let sortmas = [];
    for (i = 0; i < fruits.length; i++) {
      for (j = 0; j < rainbowColors.length; j++) {
        if (fruits[i].color == rainbowColors[j]) {
          mass.push(j);
        }
      }
    }
    let temp = sortAPI[sortKind](mass);
    for (h = 0; h < temp.length; h++) {
      answer.push(rainbowColors[temp[h]]); // больше всего смущает это решение )) но оно работает ))
    }
    for (i = 0; i < answer.length; i++) {
      for (j = 0; j < fruits.length; j++) {
        if (answer[i] == fruits[j].color) {
          sortmas.push(fruits[j]);
        }
      }
    }
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    fruits = sortmas;
    //* sortType.innerHTML = sortKind.value;
  }
}

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  if (sortKind == 'bubbleSort') {
    sortKind = 'quickSort';
    sortKindLabel.textContent = sortKind;
  } else {
    sortKind = 'bubbleSort';
    sortKindLabel.textContent = sortKind;
  }
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  sortTimeLabel.textContent = 'sorting...';
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  sortTimeLabel.textContent = sortTime;
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});



/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  let combinedInput = {};
  combinedInput.kind = kindInput.value;
  combinedInput.color = colorInput.value;
  combinedInput.weight = Number.parseInt(weightInput.value);
  fruits.splice(fruits.length, 0, combinedInput);
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});