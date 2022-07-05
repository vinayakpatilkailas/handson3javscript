//Find the number of digits





const Find_Digits = (N) => 
{
  for ( count = 0; N !== 0; count++){
    N = parseInt(N/10);
  }
  return count;
	 
};

