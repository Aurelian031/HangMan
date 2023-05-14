    function saveWord() {
        let word = document.getElementById("inputWord").value;
        document.getElementById("inputWord").value = "";

        let underscoreWord = "";
        for (let i = 0; i < word.length; ++i) {
            underscoreWord += "_ ";
        }

        let displayWord = document.getElementById("displayWord");
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
  
    function addLetter() {
        let letter = document.getElementById("inputLetter").value;
        document.getElementById("inputLetter").value = "";

        let word = localStorage.getItem("word"); // Retrieve the word from localStorage
        let underscoreWord = localStorage.getItem("underscoreWord"); // Retrieve the underscoreWord from localStorage
        let lives = localStorage.getItem("lives"); // Retrieve the value of lives from localStorage

        for (let i = 0; i < word.length; ++i) {
            if (word[i] === letter) {
                underscoreWord = underscoreWord.substring(0, 2 * i) + letter + underscoreWord.substring(2 * i + 1); // Add the letter to the underscoreWord if there is a letter to add
            }
        } 
        if (underscoreWord === localStorage.getItem("underscoreWord")) { // If the underscoreWord remains unchanged, the value of lives decrease
            --lives;
        } 

        localStorage.setItem("underscoreWord", underscoreWord);
        localStorage.setItem("lives", lives); // Store the updated value back into localStorage
        updateLivesDisplay(lives); // Update the lives display
        hiddenWord();  
    }

    function hiddenWord() { 
        let displayWord = document.getElementById("displayWord");
        let underscoreWord = localStorage.getItem("underscoreWord"); // Retrieve the underscoreWord from localStorage
        displayWord.innerHTML = underscoreWord;
        let lives = localStorage.getItem("lives"); // Retrieve the value of lives from localStorage
        let thereIsNoLetterToAdd = true;

        for (let i = 0; i < underscoreWord.length; ++i) {  // If all the letters have been found, we keep track of it 
            if (underscoreWord[i] === "_") {
            thereIsNoLetterToAdd = false;
            }
        }
  
        if (thereIsNoLetterToAdd === true) { // If all the letters have been found, a victorious message will be displayed
            let displayMessage = document.getElementById("Display-message");
            displayMessage.innerText = "You won!";
        } 
  
        if (lives === "0") {
            let displayMessage = document.getElementById("Display-message");
            displayMessage.innerText = "You lose!"; // If we run out of lives, a losing message will be displayed
        }
    }
  
  