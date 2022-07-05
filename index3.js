//Find Sum

const findSum = (n) => {
    let sum = 0;
    for(ni = 0; ni <= n; ni += 2){
      sum = sum + ni;
    }
    return sum;
};

