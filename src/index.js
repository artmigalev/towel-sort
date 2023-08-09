
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let r = [];
  if (arguments.length === 0){
    return ([]);
  }else if ( Array.isArray(matrix[0])) {
      for ( i in matrix ) {
          if ( i%2===0) {
              matrix[i].sort(function(a, b) {
                  return a-b;
              })
          }else {
              matrix[i].sort(function(a,b) {
                  return b-a;
              })
          }
      }
      matrix.forEach(function (elem) {
          return [...elem];
      })

      matrix.map(function(el) {
          return r.push(...el)
      });


  }
  return r;
}
