import { Briefcase, Scale, ShieldAlert, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const services = [
  {
    icon: Briefcase,
    title: "Área Trabalhista",
    desc: [
      "Rescisão indireta",
      "Insalubridade (incluindo análise e perícia técnica)",
      "Demais direitos trabalhistas em geral"
    ]
  },
  {
    icon: Scale,
    title: "Área Cível / Direito do Consumidor",
    desc: [
      "Limpeza de nome (negativação indevida)",
      "Cobranças abusivas",
      "Ações buscando retirada da negativação e indenização por danos morais"
    ]
  },
  {
    icon: ShieldAlert,
    title: "Golpes e Crimes Cibernéticos",
    desc: [
      "Recuperação de contas hackeadas ou invadidas (Instagram, Facebook, WhatsApp, entre outras)",
      "Ações judiciais com pedido de indenização por danos morais"
    ]
  },
  {
    icon: Smartphone,
    title: "Golpes do Pix",
    desc: [
      "Atuação para recuperação de valores perdidos em golpes",
      "Pedido de indenização por danos morais quando cabível"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="areas" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Áreas de atuação</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Especialistas em <span className="text-gradient-gold">recuperar seus direitos</span>
          </h2>
          <p className="text-muted-foreground">
            Nós atuamos como assessoria, trabalhando em conjunto com advogados parceiros, prestando suporte e intermediação dos atendimentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-gold flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <s.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-3 mb-6 flex-grow w-full">
                {s.desc.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 mt-auto group-hover:gap-2 transition-all"
              >
                Saiba mais <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
