//for every indice, do n operations. so, as n grows, so does the runtime by a factor of N.

function addUpTo(n) {
    let total = 0;
   for(let i = 1; i <= n; i++){
   total +=i;
  }
 return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`time elapsed : ${(t2 - t1)/ 1000} seconds.`)


//same here:

function countUpAndDown(n) {
  for(var i = 0; i < n; i++){
    console.log(i);
  }
  for(var j = n - 1; j >= 0; j--){
    console.log(j);
  }
  console.log('went up then back down, byeeee');
}
