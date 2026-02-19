import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import InstagramVideo from "./InstagramVideo";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 md:bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6"
            >
              Assessoria Especializada
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Sua <span className="text-gradient-gold">indenização</span> é o nosso compromisso
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Atuamos em todo o Brasil com foco em resultados. Recupere o que é seu por direito com quem entende do assunto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-base font-bold shadow-gold-lg hover:shadow-gold transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle size={20} className="relative z-10" />
                <span className="relative z-10">Fale com um especialista</span>
              </a>
              <a
                href="https://www.instagram.com/legacyassessoria_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground px-8 py-4 rounded-full text-base font-medium hover:border-primary hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
              >
                Siga no Instagram
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: "+5.000", label: "Clientes" },
                { value: "98%", label: "Sucesso" },
                { value: "R$50M+", label: "Indenizações" },
                { value: "Nacional", label: "Atendimento" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left border-l border-primary/20 pl-4"
                >
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Instagram Video Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex-none lg:mt-0 relative z-10"
          >
            <div className="relative">
              {/* Shadow removed - now handled internally by InstagramVideo with animation */}
              <InstagramVideo />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
