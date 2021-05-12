var result = []
var columnCache = [];
var board = [];


function Solution() {
    for (let i = 0; i < 8; i++) {
        var cols = [];
        for (let j = 0; j < 8; j++) {
            cols.push('.');
        }
        board.push(cols);
    }
    dropQueen()
    return result;
}


function dropQueen(currentRow) {
    var row = currentRow || 0;
    if(row >= 8) {
        result.push(snapshot(board))
        return;
    }

    for (let column = 0; column < 8; column++) {
        if(columnCache.includes(column)) {
            continue;
        }
        // 
        if(row === 0) {
            board[row][column] = 'Q';
            columnCache.push(column);
            console.log('columnCache:', columnCache)
            console.log('board:', board)
            dropQueen(row+ 1);
            board[row][column];
            columnCache.pop();
        } else {
            if(checkPosition(row, column)) {
                board[row][column] = 'Q';
                columnCache.push(column);
                console.log('columnCache:', columnCache)
                console.log('board:', board)
                dropQueen(row +1);
                board[row][column] = '.';
                columnCache.pop();
            }
        }
    }
}


//檢查在當前行/列上放置皇后是否合法
function checkPosition(row, column) {
    //檢查同一列上是否有皇后
    for (var i = 0; i < row; i++) {
        if (board[i][column] === "Q") {
            return false;
        }
    }
    //檢查左對角線上是否有皇后
    for (var j = column - 1; j >= 0; j--) {
        var curRow = row - (column - j);
        if (curRow < 0) {
            break;
        }
        if (board[curRow][j] === "Q") {
            return false;
        }
    }
    //檢查右對角線上是否有皇后
    for (var k = column + 1; k <= 8; k++) {
        var curRow1 = row - (k - column);
        if (row === 2 && column === 1) {
        }
        if (curRow1 < 0) {
            break;
        }
        if (board[curRow1][k] === "Q") {
            return false;
        }
    }
    // 不需要判斷左下與右上的情況
    return true;
}



function snapshot(source) {
    var target = [];
    for (let i = 0; i < source.length; i++) {
        target.push()
        
    }
}

var result = Solution(8);
console.log('result:', result)