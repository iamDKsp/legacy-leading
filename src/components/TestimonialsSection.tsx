import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "São Paulo, SP",
    text: "Recebi minha indenização em menos de 3 meses. Equipe extremamente competente e atenciosa. Recomendo a todos!",
  },
  {
    name: "João Oliveira",
    role: "Belo Horizonte, MG",
    text: "Achei que não tinha direito a nada, mas a Legacy conseguiu uma indenização que mudou minha vida. Profissionais incríveis.",
  },
  {
    name: "Ana Costa",
    role: "Curitiba, PR",
    text: "Atendimento humanizado e resultado excelente. Foram transparentes do início ao fim. Gratidão eterna!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 italic">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
