let turn = 'x';
const board = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleSquareClick(index) {
    if (board[index] != 'blank') {
        return;
    }
    setSquare(index, turn);
    turn = turn === 'x' ? 'o' : 'x';
    checkForWinner();
}
function reset() {
    turn = 'x';
    for (let i = 0; i < 9; i++) {
        setSquare(i, 'blank');
        document.getElementById(i).style.border = '0px';
        document.getElementById(i).style.borderRadius = '0%';
    }
    document.getElementById('result-label').innerHTML = 'Next Turn';
    document.getElementById('result-img').src = `img/${turn}.png`;
}
function setSquare(index, value) {
    let square = document.getElementById(index);
    square.src = `img/${value}.png`;
    board[index] = value;
}
function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];
        if (board[a] != 'blank' && board[a] === board[b] && board[a] === board[c]) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(combo[j]).style.border = '1px solid green';
                document.getElementById(combo[j]).style.borderRadius = '100%';
            }
            document.getElementById('result-label').innerHTML = 'Winner';
            document.getElementById('result-img').src = `img/${board[a]}.png`;
            return;
        }
    }
    if (board.indexOf('blank') === -1) {
        document.getElementById('result-label').innerHTML = 'Cats Game';
        document.getElementById('result-img').src = `img/blank.png`;
        return;
    }
    document.getElementById('result-img').src = `img/${turn}.png`;
}