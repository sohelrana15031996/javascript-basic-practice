

let burger = 400;
if (burger>500) {
  let message = "Coke is free";
  console.log(message + "\nYour payable amount is " + burger);
} else{
  message = "Coke is not free.\nYou have to pay 30 tk more";
  burger = burger + 30;
  console.log(message + "\nYour payable amount is " + burger);
}