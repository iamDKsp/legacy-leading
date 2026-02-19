import { Shield, Scale, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Credibilidade",
    desc: "Anos de experiência em assessoria especializada com resultados comprovados."
  },
  {
    icon: Scale,
    title: "Especialização",
    desc: "Foco em indenizações e garantia de seus direitos."
  },
  {
    icon: Users,
    title: "Atendimento Nacional",
    desc: "Atendemos clientes em todos os estados do Brasil, presencial ou online."
  },
  {
    icon: Clock,
    title: "Agilidade",
    desc: "Processos rápidos e comunicação constante em todas as etapas."
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Sobre nós</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Por que escolher a <span className="text-gradient-gold">Legacy</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Legacy Assessoria nasceu com a missão de democratizar o acesso aos seus direitos,
            garantindo que cada cliente receba a indenização que merece com transparência e dedicação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
