# JarvisAIChatBot 🤖

## 📌 Introduction

**JARVIS** is an advanced AI-powered virtual assistant web application, similar to Siri, Alexa, and Google Assistant. This project demonstrates the implementation of cutting-edge web technologies including speech recognition, natural language processing (NLP), and text-to-speech conversion. Users can interact with JARVIS through voice commands to open websites, search the web, retrieve information, and perform various system operations. The assistant greets users based on the time of day and responds with intelligently processed voice outputs.

**Key Features:**
- ✅ Voice-based input using Web Speech Recognition API
- ✅ Natural Language Processing (NLP) for command interpretation
- ✅ Text-to-Speech (TTS) audio responses
- ✅ Time-based greeting (morning, afternoon, evening)
- ✅ Open popular websites (Google, GitHub, LinkedIn, YouTube, ChatGPT, Gemini, Gmail)
- ✅ Open AI tools (Google AI Studio, Gemini)
- ✅ Google Search integration
- ✅ Wikipedia search functionality
- ✅ Open system applications (Calculator, Settings, Clock, Weather, Maps, Calendar, Notepad, Camera)
- ✅ Current date and time retrieval
- ✅ Responsive and intuitive UI with animations
- ✅ Dark theme with modern design

---

## 🎯 Live Demo

**Try JARVIS Now:** [https://garvita2003.github.io/JarvisAIChatBot/](https://garvita2003.github.io/JarvisAIChatBot/)

Simply click the microphone button and speak to interact with JARVIS!

---

## 🔄 Process / Flow

**User Interaction Flow:**
1. User clicks the microphone button on the webpage
2. Web Speech Recognition API activates and listens for voice input
3. Spoken words are converted to text
4. Text is displayed on the screen
5. Natural Language Processing (NLP) analyzes the command
6. Appropriate action is triggered based on keywords
7. Text-to-Speech converts the response to audio
8. Response is spoken back to the user
9. Web page updates with the action result

**Speech Recognition Flow:**
1. Browser detects microphone input
2. Speech Recognition API processes audio stream
3. Transcript is captured and displayed
4. Command is passed to `takeCommand()` function
5. Pattern matching identifies user intent
6. Corresponding action is executed

**Command Processing:**
1. User voice input captured as text transcript
2. Text converted to lowercase for case-insensitive matching
3. Keywords checked using `.includes()` method
4. Matching command triggers appropriate function
5. External websites opened in new tabs or apps launched
6. Voice feedback provided via Text-to-Speech

---

## 🛠️ Technology Used

| Component | Technology |
|-----------|-----------|
| **Frontend Framework** | Vanilla HTML/CSS/JavaScript |
| **Speech Recognition** | Web Speech Recognition API |
| **Text-to-Speech** | Web Speech Synthesis API |
| **Icons** | Font Awesome |
| **Styling** | CSS3, Responsive Design |
| **Fonts** | Google Fonts (Roboto Mono) |

**Language Composition:**
- JavaScript: 67.1%
- CSS: 18.3%
- HTML: 14.6%

**Core Technologies:**
- `SpeechRecognition API` - Voice input processing
- `SpeechSynthesis API` - Voice output generation
- `window.open()` - URL/app launching
- `child_process.exec()` - System app execution
- `DOM Manipulation` - Dynamic UI updates

---

## 🎓 Skills Gained

**Frontend Development:**
- ✅ HTML semantic structure and form design
- ✅ CSS styling and responsive layout
- ✅ Advanced CSS animations and transitions
- ✅ DOM manipulation and event handling
- ✅ Modern UI/UX design principles

**JavaScript Programming:**
- ✅ Web Speech Recognition API implementation
- ✅ Web Speech Synthesis API for TTS
- ✅ Event listeners and callback functions
- ✅ String methods and pattern matching
- ✅ Conditional logic and control flow
- ✅ Array and object manipulation
- ✅ ES6+ JavaScript features

**Natural Language Processing:**
- ✅ Command pattern recognition
- ✅ Keyword extraction from user input
- ✅ Intent identification
- ✅ Context-aware responses
- ✅ Case-insensitive matching

**Voice & Audio:**
- ✅ Speech Recognition implementation
- ✅ Text-to-Speech conversion
- ✅ Audio configuration (rate, pitch, volume)
- ✅ Browser audio APIs
- ✅ Voice quality optimization

**Integration & APIs:**
- ✅ External URL handling
- ✅ Window object manipulation
- ✅ System app launching protocols
- ✅ Google Search integration
- ✅ Wikipedia integration
- ✅ Google Maps integration

---

## 📂 Project Structure

```
JarvisAIChatBot/
├── index.html               # Main HTML structure
├── style.css                # Styling and layout
├── app.js                   # Core JavaScript logic
├── giphy.gif                # JARVIS animation GIF
├── icons/                   # Favicon and icon files
│   └── apple-touch-icon.png
├── README.md                # Documentation
└── .gitignore               # Git ignore file
```

---

## 📋 Supported Commands

### Greetings
- "Hey" / "Hello" → Responds with greeting

### Website & App Opening
- "Open Google" → Opens google.com
- "Open GitHub" → Opens github.com
- "Open YouTube" → Opens youtube.com
- "Open LinkedIn" → Opens linkedin.com
- "Open Facebook" → Opens facebook.com
- "Open Gmail" / "Open Email" → Opens Gmail
- "Open ChatGPT" → Opens chatgpt.com
- "Open Gemini" → Opens Google Gemini
- "Open Google AI Studio" → Opens ai.google.dev/aistudio
- "Open Maps" → Opens Google Maps

### System Applications (Windows)
- "Open Calculator" → Launches Calculator
- "Open Settings" → Launches Settings
- "Open Clock" → Launches Clock app
- "Open Weather" → Opens Weather app
- "Open Calendar" → Launches Calendar
- "Open Notepad" → Opens Notepad
- "Open Camera" → Launches Camera app

### Information & Search
- "What is [topic]" → Google Search with topic
- "Who is [person]" → Google Search with person name
- "What are [topic]" → Google Search with topic
- "Wikipedia [topic]" → Wikipedia search
- "Time" → Tells current time
- "Date" → Tells today's date
- Any other input → Default Google Search

---

## 📸 Demonstration

**Live Application:**
Experience JARVIS in action with interactive voice commands and real-time responses.

![JARVIS AI ChatBot Demo](https://github.com/user-attachments/assets/4ca1dee7-ae80-4619-9dcc-685c7f2e0535)

---

## ⚙️ Setup Instructions

### Prerequisites:
- Modern web browser with Web Speech API support (Chrome, Edge, Safari, Firefox)
- Microphone access enabled
- Stable internet connection
- JavaScript enabled in browser

### Installation Steps:

**Option 1: Using Live Demo (No Setup Required)**
```
Simply visit: https://garvita2003.github.io/JarvisAIChatBot/
```

**Option 2: Local Setup**

```bash
# 1. Clone the repository
git clone https://github.com/garvita2003/JarvisAIChatBot.git
cd JarvisAIChatBot

# 2. Open index.html in a web browser
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Option 3: Using a Local Server**

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if http-server is installed)
npx http-server

# Then open: http://localhost:8000 in your browser
```

---

## 🎮 How to Use

1. **Visit the Application**
   - Open [https://garvita2003.github.io/JarvisAIChatBot/](https://garvita2003.github.io/JarvisAIChatBot/)

2. **Allow Microphone Access**
   - Grant permission for microphone access when prompted

3. **Click the Microphone Button**
   - Click the microphone icon in the center of the screen
   - The app will display "Listening..."

4. **Speak Your Command**
   - Say your command clearly (e.g., "Open Google" or "What is the weather?")
   - Your speech is converted to text

5. **Wait for Response**
   - JARVIS processes your command
   - Executes the corresponding action
   - Responds with voice feedback

6. **View Results**
   - Websites open in new tabs
   - System applications launch
   - Information is displayed and spoken

---

## 🔐 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best performance and stability |
| Edge | ✅ Full | Chromium-based, full support |
| Firefox | ✅ Full | Full Web Speech API support |
| Safari | ✅ Full | iOS and macOS supported |
| Opera | ✅ Full | Chromium-based support |

**System Specific Features:**
- Windows: Calculator, Settings, Clock, Weather, Camera, Calendar, Notepad work natively
- macOS: Web-based commands work; system apps require adaptation
- Linux: Web-based commands work; system apps require adaptation

---

## 💡 Code Highlights

### Speech Recognition Implementation
```javascript
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const transcript = event.results[event.resultIndex][0].transcript;
    takeCommand(transcript.toLowerCase());
};
```

### Text-to-Speech Implementation
```javascript
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
```

### Time-based Greeting
```javascript
function wishMe() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Boss...");
    } else {
        speak("Good Evening Boss...");
    }
}
```

### Command Processing
```javascript
function takeCommand(message) {
    if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { 
            hour: "numeric", 
            minute: "numeric" 
        });
        speak("The current time is " + time);
    }
    // ... more commands
}
```

---

## 🎨 UI/UX Features

**Visual Design:**
- Dark theme with cyan accents (#00bcd4)
- Centered, minimalist layout
- Animated GIF representing JARVIS
- Responsive design for all screen sizes
- Smooth color transitions
- Modern Roboto Mono typography

**Interactive Elements:**
- Microphone button with hover effects
- Real-time text display of recognized speech
- Dynamic status updates ("Listening...", "Click here to speak")
- Cyan-colored heading and text
- Semi-transparent input container with rounded corners
- Font Awesome icons for better UX

---

## 🐛 Troubleshooting

### Microphone Not Working
- Check browser permissions for microphone access
- Ensure microphone is connected and not muted
- Try refreshing the page
- Close other apps using the microphone

### Speech Recognition Not Detected
- Use a modern browser (Chrome, Edge, Firefox, Safari)
- Ensure JavaScript is enabled
- Check internet connection (required for some APIs)
- Try a different browser

### No Audio Response
- Check system volume
- Ensure speakers/headphones are connected
- Verify Speech Synthesis API is supported
- Check browser settings for audio permissions

### Website Not Opening
- Check your internet connection
- Verify the URL is correct
- Try opening the website manually
- Clear browser cache if issues persist

---

## 🚀 Performance Optimization

- Lightweight codebase with minimal dependencies
- Fast speech recognition using native browser APIs
- Optimized CSS for smooth animations
- Efficient event handling
- No external libraries required (except Font Awesome for icons)
- Instant command processing

---

## 📊 API Features Used

| API | Purpose | Browser Support |
|-----|---------|-----------------|
| Web Speech Recognition | Voice input capture | Chrome, Edge, Firefox, Safari |
| Web Speech Synthesis | Text-to-Speech | All modern browsers |
| Window.open() | Open URLs in new tabs | All browsers |
| DOM APIs | UI manipulation | All browsers |
| Date/Time APIs | Current date/time | All browsers |

---

## 🔮 Future Enhancements

- ✨ Integration with real AI APIs (GPT, Gemini)
- 🎵 Background music and sound effects
- 🌍 Multi-language support
- 📱 Mobile app version
- 🔊 Voice customization (different voices, accents)
- 💾 Command history and favorites
- 🎤 Noise cancellation
- 🤖 Machine learning for better command recognition
- 🔐 User authentication and personalization
- 📊 Analytics and usage statistics

---

## 📝 Notes

- The Web Speech API works best on Chrome and Edge browsers
- Speech Recognition requires an active internet connection
- Some system-specific commands (like opening Notepad) work only on Windows
- For best experience, speak clearly and at normal pace
- Average recognition accuracy is 90%+ in quiet environments

---

## 🔗 Useful Resources

- [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [SpeechRecognition MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
- [SpeechSynthesis MDN](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

## 👩‍💻 Developer

Created by **Garvita Kesarwani** | [GitHub Profile](https://github.com/garvita2003)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Web Speech APIs provided by modern browsers
- Font Awesome for icons
- Google Fonts for typography
- Inspired by virtual assistants like Siri, Alexa, and Google Assistant

---

**Last Updated:** June 2026 | **Version:** 1.0.0

*Start using JARVIS today and experience the power of voice-controlled AI!* 🎤✨
