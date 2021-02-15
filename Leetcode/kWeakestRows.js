var kWeakestRows = function(mat, k) {
  let weakestToStrongest = [];
  
  mat.forEach((row, i) => {
      // create row obj
      const rowInfo = {
          index: i,
          soliders: 0
      };
      // count number of soldiers
      for (let j = 0; j < row.length; j++) {
          if (row[j] === 1) {
              rowInfo.soliders++;
          }
          if (row[j] === 0) {
              break;
          }
      }
      // insert into weakestToStrongest
      let indexToInsert = weakestToStrongest.length;
      for (let k = 0; k < weakestToStrongest.length; k++) {
          let currentRow = weakestToStrongest[k];
          if (rowInfo.soliders < currentRow.soliders) {
              indexToInsert = k;
              break;
          } else if (rowInfo.soliders === currentRow.soliders && rowInfo.index < currentRow.index) {
              indexToInsert = k;
              break;
          }
      }
      weakestToStrongest.splice(indexToInsert, 0, rowInfo)
       
  });
  
  // return the first k entries in weakestToStrongest (just the indices)
  
  let result = [];
  for (let i = 0; i < k; i++) {
      result.push(weakestToStrongest[i].index);
  }
  return result;
};