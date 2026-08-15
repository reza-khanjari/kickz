import { useRef, useState, type ChangeEvent } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { IoVolumeMuteSharp } from "react-icons/io5";
function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  const [isMuted, setMuted] = useState<boolean>(true);
  const [isControls, setControls] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  const handleFirstPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setPlaying(false));
    setPlaying(true);
    setControls(true);
  };
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => setPlaying(false));
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };
  const handleSound = (e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const value = Number(e.target.value);
    setVolume(value);
    video.volume = value;
    video.muted = value === 0;
    setMuted(value === 0);
  };
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const value = (video.currentTime / video.duration) * 100;
    setProgress(value);
  };
  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const value = Number(e.target.value);
    setProgress(value);
    video.currentTime = (value / 100) * video.duration;
  };
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setDuration(video.duration);
    setVolume(video.volume);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="bg-black-800 relative w-full">
      <video
        key={src}
        className="aspect-9/16 w-full object-cover md:aspect-2/1"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
        ref={videoRef}
        muted
        autoPlay
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute bottom-24 w-full px-24">
        {!isControls ? (
          <button
            onClick={handleFirstPlay}
            className="flex cursor-pointer items-center gap-x-1 rounded-full bg-white px-4 py-2 font-black text-black shadow-[0px_4px_6px_rgba(0,0,0,0.2)]"
          >
            Watch <FaPlay />
          </button>
        ) : (
          <div className="mx-auto flex w-full items-center gap-x-4 text-white">
            <button
              type="button"
              className="cursor-pointer"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <FaPause className="text-2xl" />
              ) : (
                <FaPlay className="text-2xl" />
              )}
            </button>
            <div className="group relative flex items-center">
              <button
                type="button"
                className="z-10 cursor-pointer text-2xl"
                onClick={toggleSound}
              >
                {isMuted ? <IoVolumeMuteSharp /> : <HiMiniSpeakerWave />}
              </button>
              <div className="flex-center pointer-events-none absolute bottom-1 left-1/2 h-36 w-9 -translate-x-1/2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100">
                <input
                  style={{
                    background: `linear-gradient(to right, rgb(255,255,255) ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%)`,
                  }}
                  className="h-4 w-21 -rotate-90 appearance-none rounded-full shadow-[0px_2px_6px_rgba(0,0,0,0.2)] [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={(e) => handleSound(e)}
                />
              </div>
            </div>

            <input
              style={{
                background: `linear-gradient(to right, rgb(255,255,255) ${progress}%, rgba(255,255,255,0.3) ${progress}%)`,
              }}
              className="w-full appearance-none rounded-full shadow-[0px_2px_6px_rgba(0,0,0,0.2)] [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-1.25 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => handleSeek(e)}
            />
            <div className="text-white">
              {duration > 0 ? formatTime(duration) : "0:00"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
