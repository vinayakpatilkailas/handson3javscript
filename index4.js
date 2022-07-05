//Find the sum of the digits of a given number.


const Number_Sum = (N) => 
{
  let add = 0;
  while(N!==0){
    let value = N % 10;
    N = parseInt(N/10);
    add = add + value;
  }
  return (add);
	
};
