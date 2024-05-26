document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sentenceForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Get the input value
        var sentence = document.getElementById('sentenceInput').value;
        // Display the sentence in the UI
        displaySentence(sentence);
        // Clear the input field
        document.getElementById('sentenceInput').value = '';
    });

    // Function to display the entered sentence
    function displaySentence(sentence) {
        var sentenceDisplay = document.getElementById('sentenceDisplay');
        var sentenceParagraph = document.createElement('p');
        sentenceParagraph.textContent = "---> " + sentence;
        // Add the new paragraph element to the sentenceDisplay div
        sentenceDisplay.appendChild(sentenceParagraph);
        // Add a line break after each quote
        sentenceDisplay.appendChild(document.createElement('br'));
    }
});