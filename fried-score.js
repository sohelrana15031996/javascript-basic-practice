const myScore = 80;
const myFriendScore = 88;

if (myScore > 80) {
  if (myFriendScore > 80) {
    console.log("Let's go for a lunch.");
  } else if (myFriendScore < 80 && myFriendScore >= 60) {
    console.log("Good luck next time bro!");
  } else if (myFriendScore < 60 && myFriendScore>= 40) {
    console.log("Not his message.")
  }else if (myFriendScore<40) {
    console.log("Block him.")
  }

}else{
  console.log("go to home and sleep and act sad.")
}