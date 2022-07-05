//Find the Fives.
const Find_Five = (N) => 
{
  let c = 0;
  
  while(N > 0){
    
    r = N % 10;
    
    N = parseInt(N / 10);
    if (r == 5){
      c++;
    }
  }
	 return c;
};

