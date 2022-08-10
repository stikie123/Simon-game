const buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let level = 0
var started = false;

$(".btn").click(function(e) {

  const userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);

animatePress(userChosenColour);

playSound(userChosenColour);

checkAwnser(userClickedPattern.length-1);

});


$(document).keydown(function(e){
  if(!started && e.key == "a"){
    nextSequence()
    $("h1").text('level ' + level)
    started = true;
  }
});

function nextSequence() {

  userClickedPattern = [];

  level++;
  $("h1").text("level " + level);
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

};

function checkAwnser(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

  console.log("success");
  if (userClickedPattern.length === gamePattern.length) {


  setTimeout(function () {
    nextSequence();
  }, 1000);
}}

  else {
    $("body").addClass("game-over").delay(200).queue(function() {
      $(this).removeClass("game-over").dequeue();
    playSound("wrong");
  startOver();
  })}};

function startOver(){
level = 0;
gamePattern = [];
userClickedPattern = [];
started = false;
$("h1").text("Press A Key to Start")
  }

function playSound(e){
  audioClick = new Audio('sounds/' + e + '.mp3');
  audioClick.play();
};

function animatePress(e) {
  $("." + e).addClass("pressed").delay(100).queue(function() {
    $(this).removeClass("pressed").dequeue();
  })};
