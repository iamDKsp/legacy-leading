import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Não deixe seus <span className="text-gradient-gold">direitos</span> para depois
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Fale agora mesmo com um de nossos especialistas. A consulta inicial é gratuita e sem compromisso. 
            Atendemos em todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-md text-lg font-bold shadow-gold-lg hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-gold"
            >
              <MessageCircle size={22} />
              Fale com um especialista agora
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Consulta gratuita</span>
            <span className="flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Sem compromisso</span>
            <span className="flex items-center gap-2"><ArrowRight size={14} className="text-primary" /> Atendimento nacional</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
