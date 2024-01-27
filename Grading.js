const meanNumber = 58;

if (meanNumber>= 90 && meanNumber<100){
  console.log ("You got A");
}else if (meanNumber<90 && meanNumber>= 80) {
  console.log("You got B");
}else if (meanNumber>= 70 && meanNumber<80) {
  console.log ("You got C");
}else if (meanNumber < 70 && meanNumber >= 60) {
  console.log("You got D");
}else if (meanNumber>0 && meanNumber< 60) {
  console.log("You got F")
}else{
  console.log("You haven't got number. ")
}
