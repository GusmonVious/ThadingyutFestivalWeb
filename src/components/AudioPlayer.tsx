import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  autoPlay?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, autoPlay = true }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    
    if (autoPlay) {
      // Try to autoplay, but handle if blocked by browser
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    }

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [autoPlay, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-slate-900/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-3 sm:p-4 shadow-lg shadow-amber-500/20">
      <audio ref={audioRef} src={src} loop />
      
      <div className="flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={togglePlay}
          className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 focus-visible:focus"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause size={14} className="text-white" /> : <Play size={14} className="text-white ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="w-6 sm:w-8 h-6 sm:h-8 text-amber-400 hover:text-amber-300 transition-colors duration-300 focus-visible:focus"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-12 sm:w-16 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer slider"
          aria-label="Volume control"
        />
      </div>

      <div className="text-xs text-amber-300 mt-1 sm:mt-2 text-center font-medium">
        Festival Music
      </div>
    </div>
  );
};