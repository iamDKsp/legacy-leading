import { useState, useRef, useEffect } from "react";
import { Play, Instagram, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const VIDEOS = ["/reel.mp4", "/reels2.mp4"];
const INSTAGRAM_URL = "https://www.instagram.com/legacyassessoria_/";

const InstagramVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Sync muted state manually to ensure it applies
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const nextVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    };

    const prevVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentVideoIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative group mx-auto lg:mx-0 w-[280px] sm:w-[320px] aspect-[9/16]"
        >
            {/* Infinite Glow / Backlight Effect */}
            <motion.div
                animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-tr from-[#C5A572] to-black/40 rounded-[2rem] blur-2xl pointer-events-none"
            />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                    {!isPlaying ? (
                        // Cover View
                        <motion.div
                            key="cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={handlePlay}
                            className="w-full h-full relative cursor-pointer group/cover"
                        >
                            <img
                                src={heroBg}
                                alt="Video Preview"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/cover:bg-black/30 transition-colors" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                >
                                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                                </motion.div>
                            </div>

                            {/* Social Overlay Elements (Decorative) */}
                            <div className="absolute bottom-6 left-4 right-4 flex justify-between items-end">
                                <div className="flex flex-col gap-2 text-white">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-[#C5A572] flex items-center justify-center text-[10px] font-bold">LG</div>
                                        <span className="text-sm font-medium">legacyassessoria_</span>
                                    </div>
                                    <p className="text-xs opacity-90">Avaliação Gratuita disponível...</p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        // Video Player View
                        <motion.div
                            key="player"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full relative group/player"
                        >
                            <video
                                ref={videoRef}
                                key={currentVideoIndex} // Force reload on change
                                src={VIDEOS[currentVideoIndex]}
                                className="w-full h-full object-cover"
                                autoPlay
                                playsInline
                                muted={isMuted}
                                onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length)} // Auto next
                            />

                            {/* Controls Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 bg-black/20">
                                {/* Top Controls */}
                                <div className="flex justify-between items-start">
                                    <button onClick={toggleMute} className="p-2 bg-black/40 rounded-full text-white hover:bg-black/60 backdrop-blur-sm transition">
                                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                    </button>
                                    <a href={INSTAGRAM_URL} target="_blank" className="p-2 bg-black/40 rounded-full text-white hover:bg-black/60 backdrop-blur-sm transition">
                                        <Instagram size={18} />
                                    </a>
                                </div>

                                {/* Navigation Arrows */}
                                <div className="absolute inset-y-0 left-0 flex items-center px-2">
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={prevVideo}
                                        className="p-2 bg-black/30 rounded-full text-white hover:bg-[#C5A572] hover:text-black transition-colors backdrop-blur-sm"
                                    >
                                        <ChevronLeft size={24} />
                                    </motion.button>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={nextVideo}
                                        className="p-2 bg-black/30 rounded-full text-white hover:bg-[#C5A572] hover:text-black transition-colors backdrop-blur-sm"
                                    >
                                        <ChevronRight size={24} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Playlist Indicator */}
            {isPlaying && (
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                    {VIDEOS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === currentVideoIndex ? 'bg-[#C5A572]' : 'bg-white/20'}`}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default InstagramVideo;
