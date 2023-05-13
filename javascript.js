function saveWord() {
    let word = document.getElementById("inputWord").value;
    document.getElementById("inputWord").value = "";
    let displayWord = document.getElementById("displayWord");
    let displayMessage = document.getElementById("Display-message");
    displayMessage.innerText = "";
  
    let underscoreWord = "";
    for (let i = 0; i < word.length; i++) {
      underscoreWord += "_ ";
    }
  
    displayWord.innerHTML = underscoreWord;
  
    let lives = 7; // Initial number of lives
    localStorage.setItem("word", word); // Store the word in localStorage
    localStorage.setItem("underscoreWord", underscoreWord); // Store the underscoreWord in localStorage
    localStorage.setItem("lives", lives); // Store the number of lives in localStorage
    updateLivesDisplay(lives); // Update the lives display
  }
  
  function updateLivesDisplay(lives) {
    let livesElement = document.getElementById("lives");
    livesElement.innerHTML = "Lives: " + lives;
  }
  
  function showValues() {
    let letter = document.getElementById("inputLetter").value;
    document.getElementById("inputLetter").value = "";
    let displayWord = document.getElementById("displayWord");
  
    let underscoreWord = localStorage.getItem("underscoreWord"); // Retrieve the underscoreWord from localStorage
    let lives = localStorage.getItem("lives"); // Retrieve the value of lives from localStorage
    let word = localStorage.getItem("word"); // Retrieve the word from localStorage
  
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        underscoreWord = underscoreWord.substring(0, 2 * i) + letter + underscoreWord.substring(2 * i + 1);
      }
    } // Add the letter to the underscoreWord if there is a letter to add
  
    let thereIsNoLetterToAdd = true;
    for (let i = 0; i < underscoreWord.length; i++) { 
      if (underscoreWord[i] === "_") {
        thereIsNoLetterToAdd = false;
      }
    } // If all the letters have been found, we keep track of it 
  
    if (underscoreWord === localStorage.getItem("underscoreWord")) {
      --lives;
    } // If the underscoreWord remains unchanged, the value of lives decrease

    if (thereIsNoLetterToAdd === true) {
      let displayMessage = document.getElementById("Display-message");
      displayMessage.innerText = "You won!";
    } // If all the letters have been found, a victorious message will be displayed
  
    displayWord.innerHTML = underscoreWord;
    localStorage.setItem("underscoreWord", underscoreWord);  // Store the updated underscoreWord back into localStorage
    localStorage.setItem("lives", lives); // Store the updated value back into localStorage
    updateLivesDisplay(lives); // Update the lives display
  
    if (lives === "0") {
      let displayMessage = document.getElementById("Display-message");
      displayMessage.innerText = "You lose!"; // If we run out of lives, a losing message will be displayed
    }
  }
  
  