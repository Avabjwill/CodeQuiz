// create elem
const strtbtn = document.getElementById("bgn-quiz");
const quiz = document.getElementById("quiz");

const ques = document.getElementById("questions");

const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");

const countDown = document.getElementById("countdown");

const shwProgress = document.getElementById("progress");
const scoreBox = document.getElementById("scoreBox");

get.addEventListener("click", function provQues () {
    srtbtn = generateQues("questions");
    document.getElementById("strtbtn").placeholder = ques;
});

// questions
let ques = [
    {
        question : "What does HTML mean?",
        optionA : "Correct",
        optionB : "Incorrect",
        optionC : "Incorrect",
        correct : "A"
    },
    {
        question: "Is HTML considered a programming language?",
        optionA :"correct",
        optionB :"Incorrect",
        correct : "A"
    },
    {
        question : "What does CSS mean?",
        optionA : "incorrect",
        optionB : "Correct",
        optionC : "Incorrect",
        correct : "B"
    },
    {
        question : "What does JS mean?",
        optionA : "Incorrect",
        optionB : "Incorrect",
        optionC : "Correct",
        correct : "C"
    },
];



const fnlques = questions.length - 1;
let currQues = 0;
let fnlcnt = 0;

const perQues = 10; // 10s
const clockWid = 200;
const clockSize = clockWid / perQues;
let Clock;
let score = 0;

// show question
function provQues(){
    let ques = questions[currQues];
    optionA.innerHTML = ques.optionA;
    optionB.innerHTML = ques.optionB;
    optionC.innerHTML = ques.optionC;
}

start.addEventListener("click",bgn-Quiz);


function bgnQuiz(){
    start.style.display = "none";
    shwQues();
    quiz.style.display = "block";
    shwProgress();
    shwTimerr();
    // 1000ms = 1s
    Clock = maxTimeClock(shwTimerr,1000); 
}

// show quiz progress
function shwProgress(){
    for(let quesStor = 0; quesStor <= fnlques; quesStor++)
    {
        qprog.innerHTML += "<div class='qprog'></div>";
    }
}

// show timer 
function shwTimerr(){
    if(count <= perQues){
        counter.innerHTML = count;
    }
    else{
        count = 0;
        ansIsIncorrect();
    }    
    if(currQues < fnlques){
            currQues++;
            return "";
        
    }
    else{
            
        setTimer(TIMER);
        //display score recieved
        shwScore();
    }
    
}


function solAns(answer){
    if( answer == questions[currQues].correct){
        score++;
        ansCorrect();
    }else{
        ansWrong();
    }
    count = 0;
    if(currQues < fnlQuestion){
        currQues++;
        provQues();
    }else{
        clearClock(Clock);
        shwScore();
    }
}

// func for right ans
function ansIsCorrect(){
    document.getElementById(currQues).style.backgroundColor = "#1f0";
}

//func for worng ans
function ansIsWrong(){
    document.getElementById(currQues).style.backgroundColor = "#f01";
}


function shwScore(){
    scoreBox.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const fnlPercnt = Math.round(100 * score/questions.length);
    
    scoreBox.innerHTML += "<p>"+ fnlPercnt +"%</p>";
}
