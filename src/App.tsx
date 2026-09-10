import {
  ArrowRight,
  CalendarDays,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Gem,
  ShieldCheck,
} from "lucide-react";

const LINKS = {
  booking: "https://online.maapp.com.br/Isabellareisnails",
  whatsapp: "https://wa.me/5515991889973",
  instagram: "https://instagram.com/isabellareis_nails",
};

const gallery = [
  { src: "/images/unha-01.jpg", alt: "Alongamento de unhas" },
  { src: "/images/unha-02.jpg", alt: "Esmaltação em gel" },
  { src: "/images/unha-03.jpg", alt: "Nail art" },
  { src: "/images/unha-04.jpg", alt: "Unhas delicadas" },
];

function App() {
  return (
    <div className="site">

      <main id="top">

        {/* =======================================================
            HERO
        ======================================================= */}
        <section className="hero">

          {/* CONTEÚDO ESQUERDO */}
          <div className="hero-copy">

            <p className="eyebrow">
              NAIL DESIGNER
            </p>

            <h1>
              Isabella
              <br />
              Reis Nails{" "}
              <span></span>
            </h1>

            {/* FRASE DECORATIVA */}
            <div className="hero-tagline">
              <span>♡</span>

              <em>
                Beleza
                <br />
                que realça
                <br />
                a sua essência.
              </em>

              <span>♡</span>
            </div>

            <p className="lead">
              Mais que unhas, é autoestima
              <br />
              em cada detalhe. 
            </p>

            {/* BOTÕES */}
            <div className="actions">

              <a
                className="action primary"
                href={LINKS.booking}
              >
                <CalendarDays size={19} />

                <span>
                  Agende seu horário
                </span>

                <ArrowRight size={18} />
              </a>

              <a
                className="action"
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />

                <span>
                  Fale comigo no WhatsApp
                </span>

                <ArrowRight size={18} />
              </a>

              <a
                className="action"
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />

                <span>
                  Veja meu Instagram
                </span>

                <ArrowRight size={18} />
              </a>

            </div>

            {/* LOCALIZAÇÃO */}
            <div className="location">
              <MapPin size={16} />

              <span>
                Sorocaba · SP
              </span>
            </div>

            {/* ASSINATURA */}
            <p className="signature-line">
              Você é seu maior projeto. ♡
            </p>

          </div>


          {/* =====================================================
              ÁREA DIREITA
          ===================================================== */}
          <div className="hero-visual">

            {/* FUNDO DECORATIVO */}
            <div
              className="hero-nail-background"
              aria-hidden="true"
            >
              <div className="nail-shape nail-shape-one" />
              <div className="nail-shape nail-shape-two" />
            </div>


            {/* FOTO DA ISABELLA */}
            <div className="portrait">

              <img
                src="/images/isabella.png"
                alt="Isabella Reis - Nail Designer"
              />

            </div>


            {/* CARD DE SERVIÇOS */}
            <aside className="service-card">

              <div>
                <Sparkles size={19} />

                <span>
                  Alongamento
                  <br />
                  de unhas
                </span>
              </div>

              <div>
                <Gem size={19} />

                <span>
                  Esmaltação
                  <br />
                  em gel
                </span>
              </div>

              <div>
                <Heart size={19} />

                <span>
                  Mais confiança
                  <br />
                  todos os dias
                </span>
              </div>

            </aside>

          </div>

        </section>


        {/* =======================================================
            TRABALHOS
        ======================================================= */}
        <section
          className="works"
          id="trabalhos"
        >

          <div className="section-heading">

            <p className="eyebrow">
              MEUS TRABALHOS
            </p>

            <h2>
              Unhas que falam por si
            </h2>

            <div className="heading-line" />

          </div>


          <div className="gallery">

            {gallery.map((item) => (

              <a
                className="work-card"
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                key={item.src}
              >

                <img
                  src={item.src}
                  alt={item.alt}
                />

                <span>
                  <PlusIcon />
                </span>

              </a>

            ))}

          </div>


          {/* CONFIANÇA */}
          <div className="trust">

            <div className="quote">

              <span className="quote-mark">
                “
              </span>

              <p>
                Cada cliente é única, e cada
                detalhe importa.
                <br />
                Obrigada por fazerem parte
                dessa história! ♡
              </p>

              <strong>
                Isabella Reis
              </strong>

            </div>


            <div className="trust-item">

              <ShieldCheck />

              <span>
                Atendimento
                <br />
                personalizado
              </span>

            </div>


            <div className="trust-item">

              <Heart />

              <span>
                Ambiente
                <br />
                acolhedor
              </span>

            </div>


            <div className="trust-item">

              <Gem />

              <span>
                Qualidade
                <br />
                e segurança
              </span>

            </div>

          </div>

        </section>


        {/* =======================================================
            CTA
        ======================================================= */}
        <section
          className="cta"
          id="contato"
        >

          <div className="cta-content">

            <p className="eyebrow">
              PRONTA PARA REALÇAR A SUA BELEZA?
            </p>

            <h2>
              Agende seu horário agora mesmo
            </h2>

            <div className="heading-line light" />

            <a
              className="cta-button"
              href={LINKS.booking}
            >

              <CalendarDays size={20} />

              Quero agendar

              <ArrowRight size={18} />

            </a>

          </div>

        </section>

      </main>


      {/* =======================================================
          FOOTER
      ======================================================= */}
      <footer className="footer">

        <a
          className="brand"
          href="#top"
        >
          <span>
            ISABELLA REIS
          </span>

          <small>
            NAILS
          </small>
        </a>


        <div className="footer-socials">

          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />
          </a>

          <span>
            <MapPin />
            Sorocaba · SP
          </span>

        </div>


        <p>
          Você é seu maior projeto. ♡
        </p>

      </footer>

    </div>
  );
}


/* ÍCONE + */
function PlusIcon() {
  return (
    <span className="plus">
      +
    </span>
  );
}


export default App;