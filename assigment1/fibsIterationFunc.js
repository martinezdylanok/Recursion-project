function fibsIteration(n) {
   const array = [];
   let n1 = 0;
   let n2 = 1;
   for (let i = 0; i < n; i++) {
      array.push(n1);
      const next = n1 + n2;
      n1 = n2;
      n2 = next;
   }
   console.log(array);
}

fibsIteration(8);
