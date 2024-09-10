const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Boss...");
    } else {
        speak("Good Evening Boss...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

const { exec } = require('child_process');

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello , How May I Help You?");
    } else if (message.includes("open ai studio")) {
        window.open("https://ai.google.dev/aistudio", "_blank");
        speak("Opening Google AI Studio...");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open github")) {
        window.open("https://github.com/", "_blank");
        speak("Opening GitHub...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open chat gpt")) {
        window.open("https://chatgpt.com/", "_blank");
        speak("Opening ChatGPT...");
    } else if (message.includes("open gemini")) {
        window.open("https://gemini.google.com/?hl=en-IN", "_blank");
        speak("Opening Gemini...");
    } else if (message.includes("open linkedin")) {
        window.open("https://in.linkedin.com/", "_blank");
        speak("Opening LinkedIn...");
    } else if (message.includes("open gmail") || message.includes("open email")) {
        window.open("https://mail.google.com/mail/u/0/", "_blank");
        message.includes("open gmail") ? speak("Opening Gmail...") : speak("Opening Email...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }else if (message.includes('settings')) {
        window.open('ms-settings:');
        const finalText = "Opening Settings";
        speak(finalText);
    } else if (message.includes('clock')) { 
        window.open('ms-clock:///'); 
        const finalText = "Opening Clock"; 
        speak(finalText); 
    } else if (message.includes('weather')) { 
        window.open('ms-windows-store://pdp/?PFN=Microsoft.BingWeather_8wekyb3d8bbwe'); 
        const finalText = "Opening Weather"; 
        speak(finalText); 
    } else if (message.includes('map')) { 
        window.open('https://www.google.com/maps'); 
        const finalText = "Opening Google Map"; 
        speak(finalText); 
    } else if (message.includes('calendar')) {
        window.open('outlookcal:'); 
        const finalText = "Opening Calendar"; 
        speak(finalText);
    } else if (message.includes('notepad')) {
        exec('start notepad.exe', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err}`);
            return;
        }
        console.log("Notepad opened successfully");
        });
        const finalText = "Opening Notepad";
        speak(finalText);
    }  else if (message.includes('camera')) {
        const cameraApp = 'Microsoft.Windows.Camera:'; 
        window.open(cameraApp);
        const finalText = "Opening Camera";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}