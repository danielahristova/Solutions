const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    //  4, 4,
    // `1001`,
    // `1111`,
    // `0100`,
    // `1010`,
    // 2, 2,
    // 15
    3, 3,
    `000`,
    `111`,
    `000`,
    1, 0,
    10
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let matrix = [];
let width = +gets();
let height = +gets();

// filling the matrix
for (i = 0; i < height; i++) {
    let line = gets().split('').map(Number);
    matrix.push(line);
}
const nextGen = matrix.map(x => ([...x]));
let column = +gets();
let row = +gets();
let N = +gets();
let greenCells = 0;

while (N + 1 !== 0) {

    for (let r = 0; r < height; r++) {
        for (let col = 0; col < width; col++) {

            let changesG = 0;
            let changesR = 0;

            // in case the cell is green; checking for green neighbours
            if (matrix[r][col] == 1) {

                // if the cell is not in the last column
                if (col !== width - 1) {
                    if (matrix[r][col + 1] == 1) {
                        changesG++;
                    }
                    // if the cell is not in the lower right corner
                    if (r !== height - 1) {
                        if (matrix[r + 1][col + 1] == 1) {
                            changesG++;
                        }
                    }
                    // if the cell is not in the upper rigth corner
                    if (r !== 0) {
                        if (matrix[r - 1][col + 1] == 1) {
                            changesG++;
                        }
                    }
                }
                // if the cell is not in the first column
                if (col !== 0) {
                    if (matrix[r][col - 1] == 1) {
                        changesG++;
                    }
                    // if the cell is not in the lower left corner
                    if (r !== height - 1) {
                        if (matrix[r + 1][col - 1] == 1) {
                            changesG++;
                        }
                    }
                    // if the cell is not in the upper left corner
                    if (r !== 0) {
                        if (matrix[r - 1][col - 1] == 1) {
                            changesG++;
                        }
                    }
                }
                // if the cell is not in first row
                if (r !== 0) {
                    if (matrix[r - 1][col] == 1) {
                        changesG++;
                    }
                }

                // if the cell is not in the last row
                if (r !== height - 1) {
                    if (matrix[r + 1][col] == 1) {
                        changesG++;
                    }
                }

                // making the next generatin matrix
                if (changesG == 2 || changesG == 3 || changesG == 6) {
                    nextGen[r][col] = 1;
                } else {
                    nextGen[r][col] = 0;
                }

                // in case the cell is red; checking for green neighbours
            } else if (matrix[r][col] === 0) {

                if (col !== width - 1) {
                    if (matrix[r][col + 1] === 1) {
                        changesR++;
                    }
                    if (r !== height - 1) {
                        if (matrix[r + 1][col + 1] === 1) {
                            changesR++;
                        }
                    }
                    if (r !== 0) {
                        if (matrix[r - 1][col + 1] === 1) {
                            changesR++;
                        }
                    }
                }
                if (col !== 0) {
                    if (matrix[r][col - 1] === 1) {
                        changesR++;
                    }
                    if (r !== height - 1) {
                        if (matrix[r + 1][col - 1] === 1) {
                            changesR++;
                        }
                    }
                    if (r !== 0) {
                        if (matrix[r - 1][col - 1] === 1) {
                            changesR++;
                        }
                    }
                }
                if (r !== 0) {
                    if (matrix[r - 1][col] === 1) {
                        changesR++;
                    }
                }
                if (r !== height - 1) {
                    if (matrix[r + 1][col] === 1) {
                        changesR++;
                    }
                }

                if (changesR === 3 || changesR === 6) {
                    nextGen[r][col] = 1;
                } else {
                    nextGen[r][col] = 0;
                }
            }
        }
    }

    if (matrix[row][column] === 1) {
        greenCells++;
    }

    // applying the new values to the matrix
    for (let r = 0; r < height; r++) {
        for (let col = 0; col < width; col++) {
            matrix[r][col] = nextGen[r][col]
        }
    }

    N--;
}

console.log(greenCells);