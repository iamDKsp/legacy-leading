import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <motion.div
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(234, 187, 69, 0.05), transparent, rgba(234, 187, 69, 0.05))",
            "linear-gradient(to bottom right, rgba(234, 187, 69, 0.1), transparent, rgba(234, 187, 69, 0.1))",
            "linear-gradient(to bottom right, rgba(234, 187, 69, 0.05), transparent, rgba(234, 187, 69, 0.05))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Não deixe seus <span className="text-gradient-gold">direitos</span> para depois
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fale agora mesmo com um de nossos especialistas. A consulta inicial é gratuita e sem compromisso.
            Atendemos em todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-full text-lg font-bold shadow-gold-lg hover:shadow-gold transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={22} />
              Fale com um especialista agora
            </motion.a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="bg-primary/10 p-1 rounded-full"><ArrowRight size={14} className="text-primary" /></div>
              Consulta gratuita
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="bg-primary/10 p-1 rounded-full"><ArrowRight size={14} className="text-primary" /></div>
              Sem compromisso
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="bg-primary/10 p-1 rounded-full"><ArrowRight size={14} className="text-primary" /></div>
              Atendimento nacional
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
