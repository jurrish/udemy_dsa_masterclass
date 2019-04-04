//nested loop = Ohh of nsquared!

//prints pairs of the same number from 0 to n
//if n = 5, it prints (5,5), (4,4), (3,3) etc..

function printAllPairs(n){
  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      console.log(i, j);
    }
  }
}

//2 = 4pairs, 4 = 16pairs,
//so, as increases, n increases quadratically
//the growth is parabolic - or a half-u shaped as we increase to infinity

//as n grows, RUN TIME GROWS N times N! or N squared.
