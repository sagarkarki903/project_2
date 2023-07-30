import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const textToType = "Welcome to my Portfolio Website...";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 100; // Adjust the typing speed here (in milliseconds)

    const typeText = () => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, typingInterval);
      }
    };

    typeText();
  }, [textToType]);

  return (
    <div className="text-white text-2xl my-10">
      <p align="center">{typedText}</p>
    </div>
  );
};

export default Typewriter;
