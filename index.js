var chalk = require('chalk');
var readlineSync = require("readline-sync");
var log = console.log;
score=0;

var name = readlineSync.question("What is your name? "); // name input
log("Welcome "+name+"!")
log("Let us see how much you know about Olympics 2020")
log("---")
log("Instructions:")
log("There are 3 levels and you will be able to proceed to the next level if you get all the answers of previous level correct. Each level has 5 questions so 15 questions in total");
log("---")

//function 

function play(question,answer)
{
  var ans = readlineSync.question(question)
  if(ans === answer)
  {
    log(chalk.green("Your answer is correct"));
    console.log("---")
    score++
  }
  else
  {
    log(chalk.red("Your answer is wrong"));
    console.log("The correct answer is: " + answer);
    console.log("---")
    score--
  }
  log(chalk.hex('#7D3C98')("Your current score is "+ score));
}

//arrays

var highScores=[

   {
     name: "Naga",
     score: 14,
   },

   {
     name: "Satya",
     score: 12,
   },

   {
     name: "Geeth",
     score: 10,
   }
]

var questions=[
   {
     question:"Where is Olympics 2020 being conducted? ",
     answer:"tokyo"//1
   } ,
   {
     question:"How many medals has India won in Olympics 2020 till now: ",
     answer:"7"//2
   } , 
   {
     question:"How many gold medals did India win in Olympics 2020: ",
     answer:"1"//3
   },
   {
     question:"In which game did Neeraj participate in? ",
     answer:"javelin throw"//4
   },
  {
     question:"Which medal did PV Sindhu win in 2020 olympics? ",
     answer:"bronze"//5
   },
  {
     question:"After how many years did India win a medal in hockey again? ",
     answer:"41"//6
   },
   {
     question:"Who sponsered India hockey teams? ",
     answer:"naveen patnaik"//7
   },
   {
     question:"Who coached India's mens hockey team? ",
     answer:"graham reid"//8
   },
  {
     question:"Who coached PV Sindhu for 2020 olympics? ",
     answer:"park tae-sang"//9
   },
   {
     question:"Cricket has been an olympics sport only once. In which year?  ",
     answer:"1900"//10
   },
   {
     question:"How many medals has India won in Hockey in the history of olympics? ",
     answer:"12" //11
   },
   {
     question:"How many medals has India won in total in the history of olympics? ",
     answer:"35" //12
   },
   {
     question:"Under which weight category did Deepak Punia represent India? ",
     answer:"86" //13
   },
   {
     question:"What do the 5 rings in olympic symbol represent? ",
     answer:"continents" //14
   },
   {
     question:"In which year were the first olympics games held? ",
     answer:"1896"
   }
]


for (var i=0;i<5;i++)
 { 
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
   
 } 
if(score<5)
{
  log(chalk.red("Due to wrong answers, you couldnt make it to the next level"));
}
if(score>5&&score<10)
{
  log(chalk.red("Due to wrong answers, you couldnt make it to the next level"));
}
if(score===5)
   {
     log(chalk.bgHex('#CD7F32')("Congratulations! You have finished level one"))
      for (var i=5;i<10;i++)
       { 
         var currentQuestion = questions[i];
         play(currentQuestion.question,currentQuestion.answer)
       } 
   }

if(score===10)
   {
     log(chalk.bgHex('#C0C0C0')("Congratulations! You have finished level two"))
      for (var i=10;i<15;i++)
       { 
         var currentQuestion = questions[i];
         play(currentQuestion.question,currentQuestion.answer)
       } 
   }
if(score===15)
   {
     log(chalk.bgHex('#FFD700')("Congratulations! You have answered all the questions correctly"))
    }
function scores()
{
   console.log("check out the high scores:")
   highScores.map(score => console.log(score.name, ":",score.score));
}

scores();
   
//to make it better--
// add options to questions
//make a medal with stars corresponding to colour of bronze,silver and gold if they have beaten the highscore 
