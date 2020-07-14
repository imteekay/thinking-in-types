const arraySum = (arr: number[]) => {
  let sum = 0, num;

  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }

  return sum;
}

const printTriangles = (n: number) => {
  const nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}

// ------------------------------------------

const readonlyArraySum = (arr: readonly number[]) => {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

const readonlyPrintTriangles = (n: number) => {
  const nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(readonlyArraySum(nums));
  }
}
