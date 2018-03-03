function forLoop(array){
  var newArray = array;
  for(i=0; i<25;i++){
   array.push("I am "+ i + "strange loop"+ (i ===0 ? '' : 's'));
  }
  
}