import { Shield, Scale, Users, Clock } from "lucide-react";

const features = [
  { icon: Shield, title: "Credibilidade", desc: "Anos de experiência em assessoria jurídica com resultados comprovados." },
  { icon: Scale, title: "Especialização", desc: "Foco em indenizações e direitos do consumidor, trabalhista e cível." },
  { icon: Users, title: "Atendimento Nacional", desc: "Atendemos clientes em todos os estados do Brasil, presencial ou online." },
  { icon: Clock, title: "Agilidade", desc: "Processos rápidos e comunicação constante em todas as etapas." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Sobre nós</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Por que escolher a <span className="text-gradient-gold">Legacy</span>?
          </h2>
          <p className="text-muted-foreground">
            A Legacy Assessoria Jurídica nasceu com a missão de democratizar o acesso à justiça, 
            garantindo que cada cliente receba a indenização que merece com transparência e dedicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-gold"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
