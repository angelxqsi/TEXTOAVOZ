document.getElementById('speak-button').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const language = document.getElementById('language-select').value;
    const utterance = new SpeechSynthesisUtterance(text);


    utterance.lang = language;


    utterance.onend = function() {
        console.log('El discurso ha terminado');
    };

    speechSynthesis.speak(utterance);
});

