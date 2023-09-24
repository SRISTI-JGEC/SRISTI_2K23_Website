"use client";
import { useEffect } from "react";

function Music() {
  useEffect(() => {
    const audio = new Audio("/bg-music.mp3");
    audio.volume = 0.3; // Adjust the volume as needed
    audio.loop = true; // Make the audio loop continuously
    audio.play(); // Start playing the audio

    // Clean up the audio element when the component unmounts
    return () => {
      audio.pause();
    };
  }, []);

  return null;
}

export default Music;
