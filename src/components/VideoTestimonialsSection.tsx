import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_TESTIMONIALS = [
  {
    src: "/Carlos.mp4",
    name: "Lucas Durval",
    city: "Bebedouro, SP",
    case: "Negativação Indevida",
    quote: "Me tiraram de uma situação que eu achei que nunca teria saída.",
  },
  {
    src: "/Fernanda.mp4",
    name: "Caroline Lopes",
    city: "Paulistânia, SP",
    case: "Dívida Abusiva",
    quote: "A Legacy me devolveu a tranquilidade e o meu nome limpo!",
  },
  {
    src: "/Roberto.mp4",
    name: "Loussiquila Kibeni",
    city: "Olímpia, SP",
    case: "Score Negativado",
    quote: "Resultado em menos de 60 dias. Profissionais incríveis e humanos.",
  },
];

interface VideoCardProps {
  testimonial: (typeof VIDEO_TESTIMONIALS)[number];
  index: number;
}

const VideoCard = ({ testimonial, index }: VideoCardProps) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetHide = () => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 2000);
  };

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
    resetHide();
  };

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing && !videoRef.current.paused) {
      videoRef.current.pause();
      setPlaying(false);
      setShowControls(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    } else {
      videoRef.current.play();
      setPlaying(true);
      resetHide();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted((m) => !m);
    resetHide();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col gap-4"
    >
      {/* Video wrapper */}
      <div
        className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl aspect-[9/16] w-full max-w-[240px] mx-auto"
        onMouseMove={playing ? resetHide : undefined}
        onTouchStart={playing ? resetHide : undefined}
      >
        {/* Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-3 bg-gradient-to-tr from-[#C5A572]/50 to-black/0 rounded-[2rem] blur-xl pointer-events-none -z-10"
        />

        <video
          ref={videoRef}
          src={testimonial.src}
          className="w-full h-full object-cover"
          playsInline
          muted={muted}
          onEnded={() => {
            setPlaying(false);
            setShowControls(true);
          }}
        />

        {/* Cover overlay when not playing */}
        {!playing && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center cursor-pointer group"
          >
            {/* Thumbnail gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 w-14 h-14 rounded-full bg-[#C5A572]/20 border-2 border-[#C5A572] flex items-center justify-center shadow-[0_0_30px_rgba(197,165,114,0.4)] group-hover:bg-[#C5A572]/40 transition-colors"
            >
              <Play className="w-6 h-6 text-[#C5A572] fill-[#C5A572] ml-1" />
            </motion.div>
            {/* Name tag bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <p className="text-white font-semibold text-sm">{testimonial.name}</p>
              <p className="text-[#C5A572] text-xs">{testimonial.city}</p>
            </div>
          </div>
        )}

        {/* Controls overlay when playing */}
        <AnimatePresence>
          {playing && showControls && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 flex flex-col justify-between p-3"
            >
              {/* Top: mute */}
              <div className="flex justify-end">
                <button
                  onClick={toggleMute}
                  className="p-2 bg-black/50 rounded-full text-white hover:bg-black/80 backdrop-blur-sm transition-colors"
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Center: pause */}
              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlayPause}
                  className="p-3 bg-black/50 rounded-full text-white hover:bg-black/80 backdrop-blur-sm transition-colors"
                >
                  <Pause size={20} />
                </motion.button>
              </div>

              {/* Bottom: name */}
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-[#C5A572] text-xs">{testimonial.city}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info card below video */}
      <div className="bg-card border border-border rounded-xl p-4 max-w-[240px] mx-auto w-full">
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground/90 text-sm italic mb-3 leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C5A572] to-[#8B6914] flex items-center justify-center text-black font-bold text-xs">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
              {testimonial.case}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const VideoTestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C5A572]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Histórias Reais
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Veja o que nossos{" "}
            <span className="text-gradient-gold">clientes falam</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais de pessoas reais. Assista aos depoimentos de quem recuperou o que era seu.
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          {VIDEO_TESTIMONIALS.map((t, i) => (
            <VideoCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
