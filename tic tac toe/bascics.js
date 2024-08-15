const cells = document.querySelectorAll('input[type="text"]');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (this.value === '') {
            this.value = currentPlayer;
            if (checkWinner()) {
                alert(currentPlayer + ' wins!');
                resetBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => cells[index].value === currentPlayer);
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.value = '';
    });
    currentPlayer = 'X';
}

document.querySelector('button').addEventListener('click', resetBoard);
