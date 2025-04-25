// import logo from './logo.svg';
import { useState, useEffect } from "react";

const greetings = [
  "नमस्ते", // Hindi
  "Namaste", // English
  "নমস্কার", // Bengali
  "नमस्कार", // Marathi
  "નમસ્તે", // Gujarati
  "வணக்கம்", // Tamil
  "नमस्ते", // Sanskrit
  "నమస్తే", // Telugu
  "ನಮಸ್ಕಾರ", // Kannada
  "നമസ്കാരം", // Malayalam
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", // Punjabi
  "السلام علیکم", // Urdu
  "السلام عليكم", // Arabic
  "سلام", // Persian (Farsi)
  "नमस्ते", // Nepali
  "你好", // Mandarin
  "こんにちは", // Japanese
  "안녕하세요", // Korean
  "สวัสดี", // Thai
  "မင်္ဂလာပါ", // Burmese
  "Halo / Selamat", // Indonesian
  "Shikamoo", // Swahili
  "Hola", // Spanish
  "Bonjour", // French
  "Hallo / Guten Tag", // German
  "Здравствуйте", // Russian
  "Namaste", // English
];
function Namaste({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Only set interval if we haven't reached the last greeting
    if (index < greetings.length - 1) {
      const timer = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, (310 - (10 * index)));

      return () => clearInterval(timer);
    } 
    else{
        onComplete();
    }
    
  }, [index,onComplete]);
  return (
    <>
      <div className="flex items-center justify-center h-screen  bg-black ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white transition-all duration-500 ease-in-out">
          {greetings[index]}
        </h1>
      </div>
      <div className="text-red-600 ">
      Abhishek
      </div>
    </>
  );
}

export default Namaste;
