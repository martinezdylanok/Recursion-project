const mergeSortRec = (arr) => {
   if (arr.length === 0) return "Please provide a non empty array!";
   if (arr.length === 1) return arr;

   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid, arr.length);

   return merge(mergeSortRec(left), mergeSortRec(right));
};

const merge = (leftArr, rightArr) => {
   const result = [];

   let iL = 0;
   let iR = 0;

   while (iL < leftArr.length && iR < rightArr.length) {
      if (leftArr[iL] < rightArr[iR]) {
         result.push(leftArr[iL]);
         iL += 1;
      } else {
         result.push(rightArr[iR]);
         iR += 1;
      }
   }

   while (iL < leftArr.length) {
      result.push(leftArr[iL]);
      iL += 1;
   }

   while (iR < rightArr.length) {
      result.push(rightArr[iR]);
      iR += 1;
   }

   return result;
};

console.log(mergeSortRec([10, 7, 8, 9, 1, 5]));
