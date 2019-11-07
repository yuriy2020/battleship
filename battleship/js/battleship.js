

let view = {
    // показывает промахи на поле
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    },
    // показывает попадания на поле
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hitShip');
    },
    // показывает сообщения в строке
    displayMsg: function (msg) {
        let messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    }
};

// хранит данные и состояние игры
let model = {
    // размер поля
    boardSize: 7,
    // кол-во кораблей
    numShips: 3,
    // позиция и состояние кораблей
    ships: [
        { location: [0, 0, 0], hits: ["", "", ""] },
        { location: [0, 0, 0], hits: ["", "", ""] },
        { location: [0, 0, 0], hits: ["", "", ""] }
    ],
    // потоплено
    shipsSunk: 0,
    // длина корабля
    shipLength: 3,
    //fire 
    fire: function (guess) {
        //получаем объект корабля
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            //  каждый корабль вытаскивается из массива: ship[0] = { location:[10,20,30], hits:["","",""] }  
            let location = ship.location;
            // indexOf возвращает -1 если нет guess в location
            let index = location.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMsg("Попал !!!")
                // проверка потоплен ли корабль
                if (this.isSunk(ship)) {
                    view.displayMsg("Ты потопил корабль!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMsg("Мимо !")
        return false;
    },

    //метод получает свойства корабля и проверяет есть ли попадания
    isSunk: function (ship) {
        /*Если есть хотя бы одна клетка, в которую еще не попал 
        игрок, то корабль еще жив и метод возвращает false.*/
        for (i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") return false;
        }
        return true;
    },

    // генерируем корабли
    generateShip: function () {
        let numberShips = 0;
        while (numberShips < this.numShips) {

            let directionShip = Math.floor(Math.random() * 2);

            let charOne = Math.floor(Math.random() * (this.boardSize - 2));   // 0-5
            let charTwo = Math.floor(Math.random() * (this.boardSize - 2));   // 0-5


            // goriz
            if (directionShip === 0 && coinsidence()) {
                (this.ships[numberShips]).location[0] = String(charOne) + String(charTwo);
                (this.ships[numberShips]).location[1] = String(charOne) + String(Number(charTwo) + 1);
                (this.ships[numberShips]).location[2] = String(charOne) + String(Number(charTwo) + 2);
                numberShips++;

                //vert
            } else if (directionShip === 1 && coinsidence()) {
                (this.ships[numberShips]).location[0] = String(charOne) + String(charTwo);
                (this.ships[numberShips]).location[1] = String(Number(charOne) + 1) + String(charTwo);
                (this.ships[numberShips]).location[2] = String(Number(charOne) + 2) + String(charTwo);;
                numberShips++;
            };

            // если 1 поле 2 корабля === 1,2,3 полю 1го корабля
            // если 2 поле 2 корабля === 1,2,3 полю 1го корабля
            //      3 поле 2 корабля === 1,2,3 полю 1го корабля
            //      1 поле 3 корабля === 1,2,3 полю 1го корабля  ИЛИ === 1,2,3 полю 2го корабля
            //      2 поле 3 корабля === 1,2,3 полю 1го корабля  ИЛИ === 1,2,3 полю 2го корабля
            //      3 поле 3 корабля === 1,2,3 полю 1го корабля  ИЛИ === 1,2,3 полю 2го корабля

            function coinsidence() {
                
                return true;
            }
        }

    }

};


// контроллер. действия игрока. логика игры
let contr = {
    guesses: 0,
    processGuess: function (guess) {
        let location = this.parseGuess(guess);
        if (location) {
            this.guesses++;
            console.log("guesses " + this.guesses);

            // стреляем 
            //  model.fire(location) возвращает true
            let hit = model.fire(location);  // ??? не понятный момент почему location
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMsg("Ты потопил все мои корабли за " + this.guesses + " попыток");

            }
        }
    },
    //преобразование. проверка и возврат введенных координат 
    parseGuess: function (guess) {
        guess = guess.toUpperCase();
        let alphavet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        // фильтр валидности
        if (guess == null || guess.length !== 2) {
            alert("Неправильная команда! ");
        } else {
            // получем первую букву из введенного пользователем
            fiirstChar = guess.charAt(0);
            // присваивает букве соотв цифру
            let row = alphavet.indexOf(fiirstChar);
            // получаем вторую цифру
            let col = guess.charAt(1);
            // супер проверка
            if (isNaN(row) || isNaN(col) || row < 0 || col < 0 || row >= model.boardSize || col >= model.boardSize) {
                alert('Что-то пошло не так...(( \nНеправильная команда!   : ' + guess)
            } else return row + col;
        }
        return null;  // если не пройдет проверку
    }
}

// вызывается каждый раз при нажатии на кнопку 
function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value
    contr.processGuess(guess);
    guessInput.value = "";
};
// фунция кнопки Fire
function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    // ???  я не понял как это рабоает
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = pressEnter;
}
window.onload = init;


function pressEnter(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
};


model.generateShip();
console.log((model.ships[0]).location)
console.log((model.ships[1]).location)
console.log((model.ships[2]).location)



