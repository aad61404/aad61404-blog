var result = [];
var columnCache = []; // 儲存已經有的列數就，重複不必再進行可行性判斷了
var board = [];   // 一個n*n的棋盤,初始化時不放置任何皇后

function dropQueen(currentRow) {    // 逐行對皇后進行放置
    var row = currentRow || 0;
    if (row >= 8) {
        //保存結果
        result.push(snapshot(board));
        return;
    }

    for (var column = 0; column < 8; column++) {
        // 如果當前列已經放置了皇后,直接跳過
        if (columnCache.includes(column)) {
            continue;
        }
        //第一行直接完成
        if (row === 0) {
            board[row][column] = "Q";
            columnCache.push(column);
            dropQueen(row + 1); // 重置棋盤,將當前棋子去除
            board[row][column] = "."; //
            columnCache.pop();
        } else {
            if (checkPosition(row, column)) {
                board[row][column] = "Q";
                columnCache.push(column);
                dropQueen(row + 1);
                board[row][column] = ".";
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
    for (var u = 0; u < source.length; u++) {
        target.push(source[u].join(''));
    }
    return target;
}

function Solution() {
    for (var i = 0; i < 8; i++) {
        var cols = [];
        for (var j = 0; j < 8; j++) {
            cols.push(".");
        }
        board.push(cols);
    }

    dropQueen();
    return result;
};

var result = Solution(8);
console.log("result", result);