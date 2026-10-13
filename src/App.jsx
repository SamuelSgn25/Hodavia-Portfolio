import discoverImage from '../assets/Hodavia.jpeg';
import brandImage from '../assets/Hodavia Univers Marque.jpeg';
import techImage from '../assets/Hodavia Univers Tech.jpeg';

const pillars = [
  {
    id: 'brand',
    title: 'Brand',
    label: 'Ambassadrice de marque',
    text: 'Je construis des identités fortes, lisibles et mémorables, à travers la présence, le storytelling et l’image.',
  },
  {
    id: 'tech',
    title: 'Tech',
    label: 'Entrepreneure tech',
    text: 'Je conçois des projets qui allient innovation, accessibilité et impact concret sur les jeunes et les communautés.',
  },
  {
    id: 'novaimpact',
    title: 'NovaImpact',
    label: 'Impact social & entrepreneuriat',
    text: 'Je veux transformer l’éducation numérique en moteur de création, de confiance et d’opportunités pour la prochaine génération.',
  },
];

const principles = [
  'Créer sans peur',
  'Comprendre avant de vendre',
  'Transformer les idées en réalité',
  'Construire avec les gens',
];

const strengths = [
  'Branding & storytelling',
  'Création de contenu',
  'Stratégie de présence',
  'Leadership & coordination',
  'Innovation & projet',
  'Education numérique',
  'Entrepreneuriat',
  'Créativité tech',
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#home" className="brand-mark">
          <span>H</span> Hodavia
        </a>

        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#about">À propos</a>
          <a href="#brand">Brand</a>
          <a href="#tech">Tech</a>
          <a href="#novaimpact">NovaImpact</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="top-cta">
          Collaborer
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HODAVIA BANGBOLA</p>
            <h1>
              Je crée des projets qui font bouger les lignes.
            </h1>
            <p className="lead">
              Entrepreneure, créative et ambassadrice de marque à la croisée du design, de la tech et de l’impact social.
            </p>

            <div className="hero-actions">
              <a href="#about" className="primary-btn">Découvrir</a>
              <a href="#novaimpact" className="secondary-btn">NovaImpact</a>
            </div>

            <div className="mini-stats">
              <div>
                <strong>03</strong>
                <span>axes</span>
              </div>
              <div>
                <strong>01</strong>
                <span>vision</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>perspectives</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <img src={discoverImage} alt="Portrait de Hodavia" />
            </div>
            <div className="floating-tag">Brand • Tech • Impact</div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">À propos</p>
            <h2>Hodavia n’est pas une marque figée. C’est une énergie en mouvement.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Je suis Hodavia, une jeune entrepreneure engagée dans la création, l’innovation et la transmission.
                J’aime les idées qui peuvent dépasser le cadre d’un simple projet pour devenir des leviers de changement.
              </p>
              <p>
                Mon parcours repose sur trois piliers : la créativité, la technologie et l’impact. Ce que je construis
                aujourd’hui, c’est une identité à la fois visuelle, stratégique et humaine.
              </p>
            </div>

            <div className="about-image-panel">
              <img src={brandImage} alt="Hodavia en image de marque" />
            </div>
          </div>
        </section>

        <section className="pillars-section" id="brand">
          <div className="section-heading">
            <p className="eyebrow">Mes univers</p>
            <h2>Une vision unique, portée par trois forces.</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.id}>
                <span className="pillar-kicker">{pillar.label}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="principles-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Ce qui me guide</p>
            <h2>Je construis avec intention. Pas avec bruit.</h2>
          </div>

          <div className="principles-grid">
            {principles.map((item) => (
              <div className="principle-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="tech-banner" id="tech">
          <div className="tech-copy">
            <p className="eyebrow">Tech & entrepreneuriat</p>
            <h2>La technologie n’est pas une fin en soi.</h2>
            <h2 className="accent-line">C’est un terrain pour créer l’avenir.</h2>
            <p>
              J’ai envie d’utiliser la technologie comme outil d’émancipation, de création et de développement humain.
              Je suis à la recherche de solutions qui changent la manière dont les jeunes apprennent, innovent et s’ouvrent au monde.
            </p>
          </div>

          <div className="tech-visual-card">
            <img src={techImage} alt="Hodavia en univers tech" />
            <div className="tech-orb" aria-hidden="true" />
          </div>
        </section>

        <section className="novaimpact-section" id="novaimpact">
          <div className="nova-panel">
            <p className="eyebrow">NovaImpact</p>
            <h2>Une vision qui transforme l’énergie d’aujourd’hui en opportunités pour demain.</h2>
            <p>
              NovaImpact est le cœur de mon ambition entrepreneuriale : un projet qui mobilise la technologie,
              l’éducation, l’innovation et l’accompagnement des jeunes pour faire émerger de nouvelles vocations,
              de nouvelles compétences et de nouveaux leaders.
            </p>
          </div>

          <div className="nova-grid">
            <div className="nova-card">
              <span className="card-index">01</span>
              <h3>NovaEdu</h3>
              <p>Rendre l’éducation numérique plus concrète, plus créative et plus accessible.</p>
            </div>
            <div className="nova-card">
              <span className="card-index">02</span>
              <h3>NovaGirls</h3>
              <p>Inspirer davantage de jeunes filles à s’approprier la technologie comme levier de pouvoir.</p>
            </div>
            <div className="nova-card">
              <span className="card-index">03</span>
              <h3>NovaCulture</h3>
              <p>Créer des ponts entre innovation, culture, talent et impact social.</p>
            </div>
          </div>
        </section>

        <section className="strengths-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Compétences</p>
            <h2>Un profil hybride, utile, structuré et tourné vers l’action.</h2>
          </div>

          <div className="strengths-grid">
            {strengths.map((strength) => (
              <span key={strength} className="strength-tag">{strength}</span>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Construisons quelque chose qui a du sens.</h2>
            <p>
              Pour une collaboration brand, un projet numérique, une opportunité de partenariat ou un cadre de création,
              je suis ouverte à la conversation.
            </p>

            <div className="contact-links">
              <a href="mailto:hello@hodavia-bangbola.com">hello@hodavia-bangbola.com</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
