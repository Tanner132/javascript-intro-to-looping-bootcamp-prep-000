function forLoop(array) {
  for (var i=0; i < 25; i++) {
    if (i===1){
      array.push("I am 1 strange loop.")}
      else {
         array.push("I am " + i + " strange loops.");
    }
 } 
 return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n > 0);
  }return 'done';
}


function doWhileLoop(array) {
  function incrementVariable() {
  i = i + 1;
}
 do { array.unshift();}
 while (array > 0 && incrementVariable(array));
}