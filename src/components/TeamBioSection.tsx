import { motion } from "framer-motion";
import { Award, Heart, Target, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5517991951957";

const highlights = [
  { icon: Target,      text: "Mais de 5.000 clientes atendidos em todo o Brasil" },
  { icon: Award,       text: "98% de taxa de sucesso nos casos assumidos" },
  { icon: CheckCircle2, text: "Atuação 100% digital — sem precisar sair de casa" },
  { icon: Heart,       text: "Atendimento humanizado, transparente e sem surpresas" },
];

const TeamBioSection = () => {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C5A572]/6 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#C5A572]/6 blur-[100px]" />
        {/* Linha decorativa dourada */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#C5A572]/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Quem Somos
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            A dupla por trás da{" "}
            <span className="text-gradient-gold">Legacy</span>
          </h2>
        </motion.div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 max-w-6xl mx-auto">

          {/* ── Esquerda: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            {/* Parágrafo principal */}
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                A <span className="text-foreground font-semibold">Legacy Assessoria Especializada</span> nasceu
                da união entre <span className="text-primary font-semibold">Gustavo</span> e{" "}
                <span className="text-primary font-semibold">Guilherme</span> — dois profissionais com a mesma
                convicção: <em>ninguém deveria perder seus direitos por falta de informação ou acesso.</em>
              </p>
              <p>
                Com atuação em todo o Brasil, a Legacy conecta pessoas prejudicadas por negativações
                indevidas, cobranças abusivas, golpes digitais e injustiças trabalhistas com os melhores
                especialistas, conduzindo cada caso com transparência, agilidade e resultado.
              </p>
              <p>
                Não somos apenas uma assessoria — somos o canal que <span className="text-foreground font-semibold">
                devolve o que é seu por direito</span>, sem burocracia e sem surpresas no final.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <h.icon className="text-primary" size={18} />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {h.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-bold shadow-gold-lg hover:shadow-gold hover:-translate-y-1 transition-all duration-300"
              >
                Fale com nossa equipe
              </a>
            </motion.div>
          </motion.div>

          {/* ── Direita: Foto dos fundadores ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="flex-none w-full max-w-sm lg:max-w-md"
          >
            <div className="relative">
              {/* Glow atrás da foto */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 bg-gradient-to-br from-[#C5A572]/40 to-transparent rounded-3xl blur-2xl pointer-events-none"
              />

              {/* Foto principal */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/GUILHER E GUSTAVO.png"
                  alt="Gustavo e Guilherme — Fundadores da Legacy"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Tag na parte de baixo */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-display font-bold text-lg leading-tight">
                    Gustavo &amp; Guilherme
                  </p>
                  <p className="text-[#C5A572] text-sm font-medium">
                    Fundadores · Legacy Assessoria
                  </p>
                </div>
              </div>

              {/* Stat card flutuante — lateral esquerda central */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 -left-14 bg-card border border-border rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm"
              >
                <p className="text-2xl font-display font-bold text-gradient-gold">+5.000</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Clientes
                </p>
              </motion.div>

              {/* Stat card flutuante 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-card border border-border rounded-xl px-5 py-4 shadow-xl backdrop-blur-sm"
              >
                <p className="text-2xl font-display font-bold text-gradient-gold">98%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Taxa de sucesso
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamBioSection;
