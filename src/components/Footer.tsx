import { useState } from "react";
import logo from "@/assets/logo-legacy.jfif";
import { Phone, Mail, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Proteja seus direitos agora
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Não deixe seu problema se agravar. Entre em contato e fale
              diretamente com um especialista.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-4">
                    Telefone
                  </h3>
                  <div className="text-muted-foreground space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 shadow-md flex-shrink-0 cursor-pointer hover:border-primary hover:scale-110 transition-all duration-200"
                        onClick={() => setLightbox("/gustavo.png")}
                        title="Ver foto"
                      >
                        <img src="/gustavo.png" alt="Gustavo" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Gustavo</p>
                        <a href="tel:+5517991951957" className="text-sm hover:text-primary transition-colors">+55 17 99195-1957</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 shadow-md flex-shrink-0 cursor-pointer hover:border-primary hover:scale-110 transition-all duration-200"
                        onClick={() => setLightbox("/Guilherme.png")}
                        title="Ver foto"
                      >
                        <img src="/Guilherme.png" alt="Guilherme" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Guilherme</p>
                        <a href="tel:+5514996099332" className="text-sm hover:text-primary transition-colors">+55 14 99609-9332</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    E-mail
                  </h3>
                  <a href="mailto:legacyassessoria@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">legacyassessoria@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    R. Vítor Curvello de Ávila Santos, 2-61 - Jardim Marambá
                    <br />
                    Bauru - SP, 17047-002
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 h-[400px] w-full rounded-lg overflow-hidden shadow-lg border border-border relative group"
            >
              <a
                href="https://maps.app.goo.gl/riC7d3m94MKDugnT9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <span className="bg-background/90 text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Ver no Google Maps
                </span>
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.695383963496!2d-49.0321289!3d-22.3274291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67a57a08f515%3A0x530948e658932679!2sR.%20V%C3%ADtor%20Curvello%20de%20%C3%81vila%20Santos%2C%202-61%20-%20Jardim%20Maramb%C3%A1%2C%20Bauru%20-%20SP%2C%2017047-002!5e0!3m2!1spt-BR!2sbr!4v1708290000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Localização"
                className="filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Legacy"
              className="h-10 w-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
            />
            <div>
              <span className="font-display font-bold text-primary">
                Legacy
              </span>
              <span className="block text-xs text-muted-foreground">
                Assessoria Especializada
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://www.instagram.com/legacyassessoria_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors relative group"
            >
              Instagram
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5517991951957"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors relative group"
            >
              WhatsApp
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {currentYear} Legacy Assessoria Especializada. Todos os
          direitos reservados.
        </div>
      </div>
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={lightbox}
              alt="Foto"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
