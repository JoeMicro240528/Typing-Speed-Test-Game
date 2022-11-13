
// Array of Word 
const words=[
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkeden",
  "Github",
  "Twitter",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styleng",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
  ];

  //Setting Levels
  const lvls={
    "Easy":5,
    "Normal":3,
    "Hard":2
  };

  //default Level
  let defaultLevelName = "Easy";
  let defaultLevelSeconds = lvls[defaultLevelName];


  // Catch Selector
  let startButton   = document.querySelector(".start");
  let lvlNameSpan   = document.querySelector(".message .lvl");
  let secondsSpan   = document.querySelector(".message .seconds");
  let theWord       = document.querySelector(".the-word");
  let upcomingWord  = document.querySelector(".upcoming-words");
  let input         = document.querySelector(".input");
  let timeleftSpan  = document.querySelector(".time span");
  let scorGot       = document.querySelector(".score .got");
  let scoreTotal    = document.querySelector(".score .total");
  let finishMassage = document.querySelector(".finish");


// Setting level name + seconds + score
lvlNameSpan.innerHTML  = defaultLevelName;
secondsSpan.innerHTML  = defaultLevelSeconds;
timeleftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML   =  words.length;

//Disable Paste Event

input.onpaste = function(){
  return false;
}

// Start Game 

startButton.onclick = function(){
  this.remove();
  input.focus();
  getWord();
}

function getWord(){
  //Get Random Word From Array 
  let randomWord = words[Math.floor(Math.random()* words.length)];
   
  // Get Word Index
  let wordIndex = words.indexOf(randomWord);
  // Remove Word From Array 
   words.splice(wordIndex,1);
  // show the random word 
   theWord.innerHTML = randomWord;
  // Empty Upcoming Words 
   upcomingWord.innerHTML = '';
   // Generate Words 
     for(let i=0;i<words.length;i++){
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWord.appendChild(div);
     }

     //Call Start Play Function 
     startPlay();
}

function startPlay(){
  timeleftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
     timeleftSpan.innerHTML--;
     if(timeleftSpan.innerHTML === "0"){
        clearInterval(start);
        if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
            //Empty input
           input.value = '';
            // increse Score 
           scorGot.innerHTML++;
           if(words.length > 0){
            // call Generate  word function
               getWord();
            } else {
              let  p = document.createElement("p");
              let ptxt = document.createTextNode("Congratz");
              p.appendChild(ptxt);
              p.className="good";
              finishMassage.appendChild(p);
              // Remov Upcoming Word Box
              upcomingWord.remove();
           }
       } else {
          let span = document.createElement("span");
          let spantxt = document.createTextNode("Game Over!");
          span.appendChild(spantxt);
          span.className="bad";
          finishMassage.appendChild(span);
        }
     }
  },1200);
}
