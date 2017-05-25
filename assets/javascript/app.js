$(document).ready(function(){
//Variables Defined

 var qcount= 0; 
 var guessRight = 0; 
 var guessWrong = 0;
 var unanswered = 0;
 var myinterval;

 var questions = [
 question1 = {
 question: "<p>What is the fastest bird (in the air) in the world?</p>",
 answers: ["<div class = 'row wrong'><p>Ruby Throated Hummingbird.</p></div>","<div class ='row wrong'><p>North African ostrich.</p></div>","<div class = 'row wrong'><p>Red-billed quelea.</p></div>", "<div id = 'right' class = 'row'><p>Peregrine Falcon.</p></div>"],
 right: "<div id = 'right' class = 'row'><p>Peregrine Falcon.</p></div>"
 },
 question2= {
 question: "How many stomachs does a cow have?",
 answers: ["<div class = 'row wrong'><p>2</p></div>","<div class ='row wrong'><p>6</p></div>","<div id = 'right' class = 'row'><p>4</p></div>","<div id = 'right' class = 'row'><p>0</p></div>"],
 right: "<div id = 'right' class = 'row'><p>4</p></div>"
 },
 question3 = {
 question: "What is the largest Frog?",
 answers: ["<div class = 'row wrong'><p>Cane Toad</p></div>","<div id = 'right' class = 'row'><p>African Goliath Frog</p></div>","<div class = 'row wrong'><p>North American Bullfrog</p></div>","<div id = 'right' class = 'row'><p>North Poison Dart Frog</p></div>"],
 right: "<div id = 'right' class = 'row'><p>African Goliath Frog</p></div>"
 },
 question4 = {
 question: "What bird has the fastest wing beat?",
 answers: ["<div id = 'right' class = 'row'><p>Ruby Throated Hummingbird</p></div>","<div class = 'row wrong'><p>Albatross</p></div>","<div class = 'row wrong'><p>Arctic Tern</p></div>","<div class = 'row wrong'><p>Ruppells Vulture</p></div>",],
 right: "<div id = 'right' class = 'row'><p>Ruby Throated Hummingbird</p></div>"
 },
 question5 = {
 question: "What is the longest snake?",
 answers: ["<div class = 'row wrong'><p>Anaconda</p></div>","<div class = 'row wrong'><p>Green tree snake</p></div>","<div id = 'right' class = 'row'><p>Reticulated python</p></div>","<div class = 'row wrong'><p>Corn snake</p></div>"],
 right: "<div id = 'right' class = 'row'><p>Reticulated python</p></div>"
 },

 question6 = {
 question: "What is the tallest and longest dog?",
 answers:["<div class = 'row wrong'><p>30.7 in tall and 74.7 in long</p></div>","<div class = 'row wrong'><p>44.5 in tall and 97 in long</p></div>","<div id = 'right' class = 'row'><p>41.5 in tall and 91 in long</p></div>","<div class = 'row wrong'><p>48.6 in tall and 100 in long</p></div>"],
 right: "<div id = 'right' class = 'row'><p>41.5 in tall and 91 in long</p></div>"
 },
 question7 = {
 question: "What was the name of the oldest goat?",
 answers: ["<div class = 'row wrong'><p>Gadget</p></div>","<div class = 'row wrong'><p>McGruff</p></div>","<div id = 'right' class = 'row'><p>McGinty</p></div>","<div class = 'row wrong'><p>Gizmo</p></div>"],
 right: "<div id = 'right' class = 'row'><p>McGinty</p></div>"
 },
  question8 = {
 question: "What is the most popular purebred cat breed?",
 answers: ["<div class = 'row wrong'><p>Maine Coon</p></div>","<div class = 'row wrong'><p>Russian Blue</p></div>","<div id = 'right' class = 'row'><p>Persian</p></div>","<div class = 'row wrong'><p>Siamese</p></div>"],
 right: "<div id = 'right' class = 'row'><p>Persian</p></div>"
 },
  question9 = {
 question: "What are Sea Monkeys?",
 answers: ["<div class = 'row wrong'><p>Fish Lice</p></div>","<div class = 'row wrong'><p>Tongue Worms</p></div>","<div id = 'right' class = 'row'><p>Brine Shrimp</p></div>","<div class = 'row wrong'><p>Spider Crabs</p></div>"],
 right: "<div id = 'right' class = 'row'><p>Brine Shrimp</p></div>"
 },
  question10 = {
 question: "Which of these pets has become an invasive species in the U.S.",
 answers: ["<div class = 'row wrong'><p>European Rabbit</p></div>","<div class = 'row wrong'><p>Sugar Glider</p></div>","<div id = 'right' class = 'row'><p>Burmese Python</p></div>","<div class = 'row wrong'><p>Cockatiel</p></div>"],
 right: "<div id = 'right' class = 'row'><p>Burmese Python</p></div>"
 },
 ];


//Functions
//================================================================================================================================================================

 function insertQ() {
 $("#question").html(questions[qcount].question);
 $("#answers").html(questions[qcount].answers);
 }

 function countDown() {
 var i = 10;
 myinterval = setInterval(function() {
 $("#time").html("<p>Time Left: " + i + "</p>");

 if (i === 0) {
 clearInterval(myinterval);
 unanswered++;
  $('#time').empty();
 qcount++;
 setTimeout(nextQ, 3	*1000);
 }
 else {
 i--;
 }
 }, 1000);
 }



 function endOfGame(){
 $('#answers').append('<div class= "row results">Questions guessed right: '+guessRight+'<div>');
 $('#answers').append('<div class= "row results">Questions guessed wrong: '+guessWrong+'<div>');
 $('#answers').append('<div class= "row results">Questions not guessed in time: '+unanswered+'<div>');
 $('#answers').append('<div class = "row results" id = "reset">Retake the quiz</div>');
 $('#reset').on("click",function(){
 qcount= 0;
 guessRight=0;
 guessWrong=0;
 unanswered=0;
 $('#question').empty();
 start();
 });
 }

 function nextQ() {
 clearInterval(myinterval);
 $('#time').empty();
 if (qcount < 10) {
 insertQ();
 countDown();
 clicks();
 }
 else {
 $('#answers').empty();
 if (guessRight >= 7) {
 $('#question').html("You know a lot about Animals");
 endOfGame();

 }
 else {
 $('#question').html("You should probally learn more about Animals");
 endOfGame();
 }
 }
 }

 function clicks(){
 $('.wrong').on("click", function(){
 $('#time').empty();
 console.log("clicked");
 rightImage();
 qcount++;
 guessWrong++;
 clearInterval(myinterval);
 setTimeout(nextQ, 5*1000);
 });
 $('#right').on("click",function(){
 $('#time').empty();
 rightImage();
 qcount++;
 guessRight++;
 clearInterval(myinterval);
 setTimeout(nextQ, 1*1000);
 console.log(qcount);
 console.log(guessRight);

 });
 $('#start').on("click",function(){
 nextQ();
 });
 }

 function start() {
 $('#answers').html('<div class= "row results" id = "start">Start Game</div>');
 clicks();
 }
 start();

});