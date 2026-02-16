import { Briefcase, Car, Plane, HeartPulse, Home, FileText } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const services = [
  { icon: HeartPulse, title: "Erro Médico", desc: "Indenizações por negligência, imprudência ou imperícia em procedimentos médicos." },
  { icon: Car, title: "Acidentes de Trânsito", desc: "Reparação de danos materiais, morais e estéticos decorrentes de acidentes." },
  { icon: Plane, title: "Direito do Consumidor", desc: "Voos cancelados, cobranças indevidas, produtos com defeito e muito mais." },
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Verbas rescisórias, horas extras, assédio e demais direitos trabalhistas." },
  { icon: Home, title: "Direito Imobiliário", desc: "Atraso na entrega, vícios construtivos e problemas com construtoras." },
  { icon: FileText, title: "Negativação Indevida", desc: "Remoção do nome de órgãos de proteção ao crédito e indenização por danos." },
];

const ServicesSection = () => {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Áreas de atuação</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Especialistas em <span className="text-gradient-gold">recuperar seus direitos</span>
          </h2>
          <p className="text-muted-foreground">
            Atuamos nas principais áreas do direito com foco em indenizações e reparação de danos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/40 transition-all duration-300 group hover:shadow-gold"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                <s.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
