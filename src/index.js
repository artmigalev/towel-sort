// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0   ) return []
    let lenMatrix = matrix.length;
    for (let i = 0; i < lenMatrix; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        } else {
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        }
    }
    return result;
};

