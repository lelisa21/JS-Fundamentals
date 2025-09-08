const args = process.argv;
const firstArgument = args[2];
if(firstArgument === undefined){
  console.log("No argument");
}else{
  console.log(firstArgument);
}
