

function scrambleWords () {

    //get the value of the original text entered by the user
    const originalText = document.getElementById("original-words").value;

    //get the value of the words that the user wants to scramble
    const wordsToScramble = document.getElementById("words-to-scramble").value;

    //select the container that will contain the scrambled words
    let TextContainer = document.getElementById("text-container");

  //turn the words to scramle into a an array, map through and remove whitespaces.
  const scrambleWordsValue = wordsToScramble.split("").map((string) => string.trim());

  //assign originalText entered by the user to firstText
  let firstText = originalText;

  //turn the originalText assigned to firstText into an array using split.
  let Words = firstText.split("");

  //check if the user entered any content
    if (scrambleWordsValue) {

        //iterate through the content that the user entered
      scrambleWordsValue.forEach((text) => {
        // check if the words is in the original words
        if (firstText.includes(text)) {
          let regExp = new RegExp(text, "gi");
          firstText = firstText.replace(regExp, "**");
          TextContainer.innerHTML = `<p>${firstText}</p>`;

        } 
    }    
  )}
}

//add an eventlistener to the form and prevent form default function
document.getElementById("form").addEventListener("click", (event) => {
    event.preventDefault();
    scrambleWords();
  });