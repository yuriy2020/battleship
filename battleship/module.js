function myfield() {
    const arr = generateArr();
    const field = `             A   B   C   D   E   F   G   H   I   J
           +---------------------------------------+
         1 | ${arr[0][0]} | ${arr[0][1]} | ${arr[0][2]} | ${arr[0][3]} | ${arr[0][4]} | ${arr[0][5]} | ${arr[0][6]} | ${arr[0][7]} | ${arr[0][8]} | ${arr[0][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         2 | ${arr[1][0]} | ${arr[1][1]} | ${arr[1][2]} | ${arr[1][3]} | ${arr[1][4]} | ${arr[1][5]} | ${arr[1][6]} | ${arr[1][7]} | ${arr[1][8]} | ${arr[1][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         3 | ${arr[2][0]} | ${arr[2][1]} | ${arr[2][2]} | ${arr[2][3]} | ${arr[2][4]} | ${arr[2][5]} | ${arr[2][6]} | ${arr[2][7]} | ${arr[2][8]} | ${arr[2][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         4 | ${arr[3][0]} | ${arr[3][1]} | ${arr[3][2]} | ${arr[3][3]} | ${arr[3][4]} | ${arr[3][5]} | ${arr[3][6]} | ${arr[3][7]} | ${arr[3][8]} | ${arr[3][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         5 | ${arr[4][0]} | ${arr[4][1]} | ${arr[4][2]} | ${arr[4][3]} | ${arr[4][4]} | ${arr[4][5]} | ${arr[4][6]} | ${arr[4][7]} | ${arr[4][8]} | ${arr[4][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         6 | ${arr[5][0]} | ${arr[5][1]} | ${arr[5][2]} | ${arr[5][3]} | ${arr[5][4]} | ${arr[5][5]} | ${arr[5][6]} | ${arr[5][7]} | ${arr[5][8]} | ${arr[5][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         7 | ${arr[6][0]} | ${arr[6][1]} | ${arr[6][2]} | ${arr[6][3]} | ${arr[6][4]} | ${arr[6][5]} | ${arr[6][6]} | ${arr[6][7]} | ${arr[6][8]} | ${arr[6][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         8 | ${arr[7][0]} | ${arr[7][1]} | ${arr[7][2]} | ${arr[7][3]} | ${arr[7][4]} | ${arr[7][5]} | ${arr[7][6]} | ${arr[7][7]} | ${arr[7][8]} | ${arr[7][9]} |
           |---|---|---|---|---|---|---|---|---|---|
         9 | ${arr[8][0]} | ${arr[8][1]} | ${arr[8][2]} | ${arr[8][3]} | ${arr[8][4]} | ${arr[8][5]} | ${arr[8][6]} | ${arr[8][7]} | ${arr[8][8]} | ${arr[8][9]} |
           |---|---|---|---|---|---|---|---|---|---|
        10 | ${arr[9][0]} | ${arr[9][1]} | ${arr[9][2]} | ${arr[9][3]} | ${arr[9][4]} | ${arr[9][5]} | ${arr[9][6]} | ${arr[9][7]} | ${arr[9][8]} | ${arr[9][9]} |
           +---------------------------------------+`;
    return field;
}
module.exports = myfield;
manualShipPosition();    // call

function generateArr() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        const pos = [];
        for (let j = 0; j < 10; j++) {
            pos.push(' ');
        }
        arr.push(pos);
    }
    arr[3][5] = 'Y';
    // console.log(arr);
    return arr;
}

function autoShipPosition() {
    const rand = Math.floor(Math.random() * 10);
}

function manualShipPosition() {
    let readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Введите координаты первого корабля (а1):  ', (answer) => {
        if (validAnswer(answer)) {    //  проверка правильности ввода координат
            rl.question('Введите координаты второго корабля ', (answer2) => {
                console.log("first coord :",answer);
                console.log("second coord :",answer2);

                rl.close();

            });
        }
        else {

        }
    });

}

function validAnswer(answer) {  //  проверка правильности ввода координат
    return (answer == "2") ? false : true
}


// module.exports = generateArr;
