function addIntegers(a ,b){
  return a + b;
}
 
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

if(isNaN(addIntegers(a ,b))){
  console.log("NaN");
}else{
  console.log(addIntegers(a , b));
}

