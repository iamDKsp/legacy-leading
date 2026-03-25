import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Instagram, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const VIDEOS = ["/reel.mp4", "/reels2.mp4"];
const INSTAGRAM_URL = "https://www.instagram.com/legacyassessoria_/";
const AUTOPLAY_DELAY = 5000;   // 5 segundos para iniciar automaticamente
const CONTROLS_HIDE_DELAY = 2000; // 2 segundos para esconder controles

const InstagramVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true); // muted para autoplay funcionar no browser
    const [showControls, setShowControls] = useState(true);

    const videoRef = useRef<HTMLVideoElement>(null);
    const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // ─── Auto-play após 5 segundos ───────────────────────────────────────────
    useEffect(() => {
        const autoplayTimer = setTimeout(() => {
            setIsPlaying(true);
            setIsPaused(false);
        }, AUTOPLAY_DELAY);
        return () => clearTimeout(autoplayTimer);
    }, []);

    // ─── Inicializa vídeo como muted (necessário para autoplay) ──────────────
    // Nota: não usamos a prop muted={isMuted} do React pois há bug conhecido
    // onde React seta o HTML attribute mas não a DOM property. Controlamos
    // diretamente via ref para garantir funcionamento.

    // ─── Ao trocar de vídeo, dá play automaticamente ─────────────────────────
    useEffect(() => {
        if (videoRef.current && isPlaying && !isPaused) {
            videoRef.current.play().catch(() => {});
        }
    }, [currentVideoIndex]);

    // ─── Lógica de esconder controles ────────────────────────────────────────
    const resetHideTimer = useCallback(() => {
        setShowControls(true);
        if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        hideControlsTimer.current = setTimeout(() => {
            setShowControls(false);
        }, CONTROLS_HIDE_DELAY);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            resetHideTimer();
        }
        return () => {
            if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
        };
    }, [isPlaying, resetHideTimer]);

    // ─── Handlers ────────────────────────────────────────────────────────────
    const handleCoverClick = () => {
        setIsPlaying(true);
        setIsPaused(false);
    };

    const togglePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (isPaused) {
            videoRef.current.play().catch(() => {});
            setIsPaused(false);
        } else {
            videoRef.current.pause();
            setIsPaused(true);
        }
        resetHideTimer();
    };

    const handleVideoEnded = () => {
        const nextIndex = currentVideoIndex + 1;
        if (nextIndex >= VIDEOS.length) {
            setIsPlaying(false);
            setIsPaused(false);
            setCurrentVideoIndex(0);
        } else {
            setCurrentVideoIndex(nextIndex);
        }
    };

    const nextVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
        resetHideTimer();
    };

    const prevVideo = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentVideoIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
        resetHideTimer();
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        // Manipula diretamente a DOM property (não o HTML attribute)
        const next = !isMuted;
        videoRef.current.muted = next;
        setIsMuted(next);
        resetHideTimer();
    };


    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto lg:mx-0 w-[280px] sm:w-[320px] aspect-[9/16]"
        >
            {/* Glow animado */}
            <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 bg-gradient-to-tr from-[#C5A572] to-black/40 rounded-[2rem] blur-2xl pointer-events-none"
            />

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <AnimatePresence mode="wait">
                    {!isPlaying ? (
                        /* ── COVER ── */
                        <motion.div
                            key="cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={handleCoverClick}
                            className="w-full h-full relative cursor-pointer group/cover"
                        >
                            <img
                                src={heroBg}
                                alt="Video Preview"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/cover:bg-black/30 transition-colors" />

                            {/* Botões do topo — sempre visíveis no cover */}
                            <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                                <div className="p-2 bg-black/40 rounded-full text-white/40 backdrop-blur-sm">
                                    <Volume2 size={18} />
                                </div>
                                <a
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2 bg-black/40 rounded-full text-white hover:bg-[#C5A572] hover:text-black backdrop-blur-sm transition-colors flex items-center justify-center"
                                    title="Ver no Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                            </div>

                            {/* Botão Play central */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                >
                                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                                </motion.div>
                            </div>

                            <div className="absolute bottom-6 left-4 right-4">
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
                        /* ── PLAYER ── */
                        <motion.div
                            key="player"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full relative"
                            onMouseMove={resetHideTimer}
                            onTouchStart={resetHideTimer}
                        >
                            <video
                                ref={videoRef}
                                key={currentVideoIndex}
                                src={VIDEOS[currentVideoIndex]}
                                className="w-full h-full object-cover"
                                autoPlay
                                playsInline
                                muted={isMuted}
                                onCanPlay={(e) => {
                                    // Sincroniza DOM property ao carregar o video
                                    (e.target as HTMLVideoElement).muted = isMuted;
                                }}
                                onEnded={handleVideoEnded}
                            />

                            {/* Overlay de controles — some após 2s */}
                            <AnimatePresence>
                                {showControls && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"
                                    >
                                        {/* Topo: mute + instagram */}
                                        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                                            <button
                                                onClick={toggleMute}
                                                className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 backdrop-blur-sm transition-colors"
                                                title={isMuted ? "Ativar som" : "Silenciar"}
                                            >
                                                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                            </button>
                                            <a
                                                href={INSTAGRAM_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2 bg-black/50 rounded-full text-white hover:bg-[#C5A572] hover:text-black backdrop-blur-sm transition-colors flex items-center justify-center"
                                                title="Ver no Instagram"
                                            >
                                                <Instagram size={18} />
                                            </a>
                                        </div>

                                        {/* Centro: pause/play */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={togglePlayPause}
                                                className="p-3 bg-black/50 rounded-full text-white hover:bg-black/80 backdrop-blur-sm transition-colors pointer-events-auto"
                                            >
                                                {isPaused
                                                    ? <Play size={22} className="fill-white ml-0.5" />
                                                    : <Pause size={22} />}
                                            </motion.button>
                                        </div>

                                        {/* Setas prev / next */}
                                        <div className="absolute inset-y-0 left-2 flex items-center">
                                            <motion.button
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={prevVideo}
                                                className="p-2 bg-black/30 rounded-full text-white hover:bg-[#C5A572] hover:text-black transition-colors backdrop-blur-sm"
                                            >
                                                <ChevronLeft size={24} />
                                            </motion.button>
                                        </div>
                                        <div className="absolute inset-y-0 right-2 flex items-center">
                                            <motion.button
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={nextVideo}
                                                className="p-2 bg-black/30 rounded-full text-white hover:bg-[#C5A572] hover:text-black transition-colors backdrop-blur-sm"
                                            >
                                                <ChevronRight size={24} />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Indicador de playlist */}
            {isPlaying && (
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
                    {VIDEOS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                idx === currentVideoIndex ? "bg-[#C5A572]" : "bg-white/20"
                            }`}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default InstagramVideo;
