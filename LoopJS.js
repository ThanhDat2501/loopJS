function caculatePriceShoppingBudget(listProduct) {
    let sum = 0;
    let unit = 0;
    let price = 0;
    for (let i = 0; i < listProduct.length; i++) {
        unit = listProduct[i][0];
        price = listProduct[i][1];
        sum += unit * price;
    }
    return sum;

}

const listProduct = [[2, 3], [3, 5], [4, 5]];
console.log("Bought =", caculatePriceShoppingBudget(listProduct))


//snail function
function snail(square) {
    let list = [];
    let rowLength = square.length - 1;
    let columnLength = square.length - 1;
    let row = 0;
    let column = 0;
    let i = j = 0;
    address = 'right';
    check = true;
    while (check) {
        if (address == 'right') {
            i = row;
            for (j = column; j <= columnLength; j++) {
                list.push(square[i][j])
            }
            address = 'down';
            row++;
        }
        if (address == 'down') {
            j = columnLength;
            for (i = row; i <= rowLength; i++) {
                list.push(square[i][j])
            }
            address = 'left';
            columnLength--;
        }
        if (address == 'left') {
            i = rowLength;
            for (j = columnLength; j >= column; j--) {
                list.push(square[i][j])
            }
            address = 'up';
            rowLength--;
        }
        if (address == 'up') {
            j = column;
            for (i = rowLength; i >= row; i--) {
                list.push(square[i][j])
            }
            address = 'right';
            column++;
        }
        if (row > rowLength || column > columnLength) {
            check = false;
        }

    }
    console.log(list)
}

const square = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
snail(square)
