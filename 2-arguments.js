const args = process.argv.slice(2);

/* const message = args.length === 0 ? "No argument" : args.length === 1 ?"Argument found" : "Arguments found";
 console.log(message); */


// by if else statement

if(args.length === 0){
 console.log("No argument")
}else if (args.length === 1){
  console.log("Argument found")
}else{
  console.log("Arguments found");
}
