//Print the Odds.

const Print_Odd = (N) => 
{
  let i=2;
  console.log(i);
  
  for(let i=2; i<N; i++){
    if(i%2 === 0){
      i++;
    }
    console.log(i);
  }
}; 

