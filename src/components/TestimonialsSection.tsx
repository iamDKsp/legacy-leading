import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Lucas Durval",
    role: "Bebedouro, SP",
    text: "Recebi minha indenização em menos de 3 meses. Equipe extremamente competente e atenciosa. Recomendo a todos!",
  },
  {
    name: "Caroline Lopes",
    role: "Paulistânia, SP",
    text: "Achei que não tinha direito a nada, mas a Legacy conseguiu uma indenização que mudou minha vida. Profissionais incríveis.",
  },
  {
    name: "Loussiquila Kibeni",
    role: "Olímpia, SP",
    text: "Atendimento humanizado e resultado excelente. Foram transparentes do início ao fim. Gratidão eterna!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-gold/20 transition-all duration-300 relative group"
            >
              <div className="absolute -top-4 -right-4 bg-primary/10 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="text-primary w-8 h-8" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 italic text-lg leading-relaxed">"{t.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
