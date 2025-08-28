import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(300); // default 5 min
  const [isRunning, setIsRunning] = useState(false);
  const [selectedSound, setSelectedSound] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const sounds = [
    { name: "Rain", file: "rain.mp3" },
    { name: "Ocean Waves", file: "ocean.mp3" },
    { name: "Forest", file: "forest.mp3" },
    { name: "Bell Chime", file: "bell.mp3" },
  ];

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 0) {
      setIsRunning(false);
      if (audioRef.current) audioRef.current.play();
      setAudioPlaying(true);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  };

 
  const toggleTimer = () => setIsRunning(!isRunning);
  const setPresetTime = (sec) => { setTime(sec); setIsRunning(false); };


  const handleSoundChange = (e) => {
    const soundFile = e.target.value;
    setSelectedSound(soundFile);
    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.load(); 
      audioRef.current.play();  
      setAudioPlaying(true);
    }
  };

  
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        audioRef.current.play();
        setAudioPlaying(true);
      }
    }
  };

  return (
    <div className="card">
      <h2>Timer</h2>
      <div className="timer">{formatTime(time)}</div>
      <div>
        <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={() => setPresetTime(300)}>5 min</button>
        <button onClick={() => setPresetTime(600)}>10 min</button>
        <button onClick={() => setPresetTime(900)}>15 min</button>
      </div>

      <div>
        <h3>Background Sound</h3>
        <select value={selectedSound} onChange={handleSoundChange}>
          <option value="">-- Select Sound --</option>
          {sounds.map((s) => (
            <option key={s.file} value={s.file}>{s.name}</option>
          ))}
        </select>
        <button onClick={toggleAudio} disabled={!selectedSound}>
          {audioPlaying ? "Pause Sound" : "Play Sound"}
        </button>

        <audio ref={audioRef} loop>
          {selectedSound && <source src={`/assets/${selectedSound}`} type="audio/mp3" />}
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default Timer;
