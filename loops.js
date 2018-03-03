function forLoop(array){
  for(i=0; i<25;i++){
   array.push("I am "+ i + " strange loop"+ (i ===0 ? '' : 's'));
  }
  return array;
}

function whileLoop(n){
 while(n > 0){
   console.log(n);
   n--;
 }
 return 'done';
}

function doWhileLoop(array){
 do{
   array.splice(-1,1);
 }
 while(array.length > 0);
}