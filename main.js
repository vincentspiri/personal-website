const squareList = arr => {
    const newArr = arr.filter(num => {
      return num * 10 % 10 == 0 && num > 0;
    }).map(num => num*num)
    return newArr;
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);