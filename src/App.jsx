import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import discoverImage from '../assets/Hodavia.jpeg';
import brandImage from '../assets/Hodavia Univers Marque.jpeg';
import techImage from '../assets/Hodavia Univers Tech.jpeg';

const universeMeta = {
  discover: {
    label: 'ME DÉCOUVRIR',
    subtitle: 'La femme derrière les projets.',
    theme: 'discover',
  },
  brand: {
    label: 'AMBASSADRICE DE MARQUE',
    subtitle: 'Image • Créativité • Storytelling',
    theme: 'brand',
  },
  tech: {
    label: 'ENTREPRENEURE TECH',
    subtitle: 'Innovation • NovaImpact • Impact',
    theme: 'tech',
  },
};

const discoverValues = [
  {
    title: 'Créative',
    text: 'J’aime imaginer de nouvelles façons de raconter, présenter et construire les choses.',
  },
  {
    title: 'Curieuse',
    text: 'Je suis constamment attirée par les nouveaux domaines, les idées et les expériences.',
  },
  {
    title: 'Entrepreneure',
    text: 'J’aime partir d’un problème et réfléchir à une solution qui puisse réellement servir.',
  },
  {
    title: 'Leader',
    text: 'Je crois profondément en la force d’une équipe et en ce que l’on peut accomplir ensemble.',
  },
  {
    title: 'Technophile',
    text: 'La technologie m’intéresse moins comme simple outil que comme moyen de créer et transformer.',
  },
];

const timeline = [
  {
    label: '01',
    title: 'Epitech Bénin',
    text: 'Une formation qui m’a permis de développer mes compétences techniques, l’innovation et la création de projets.',
  },
  {
    label: '02',
    title: 'Premières expériences',
    text: 'Des missions concrètes m’ont permis de passer de la théorie à la création, au travail d’équipe et à la communication.',
  },
  {
    label: '03',
    title: 'Leadership & communauté',
    text: 'Mon engagement au sein d’Epitech Alumni a renforcé ma capacité à coordonner, communiquer et inspirer.',
  },
  {
    label: '04',
    title: 'Univers de l’image',
    text: 'La photographie, le modeling et la création de contenu m’ont ouvert une autre dimension de la création : l’image et la représentation.',
  },
  {
    label: '05',
    title: 'NovaImpact',
    text: 'Une nouvelle étape : entreprendre à la croisée de la technologie, de l’éducation et de l’impact social.',
  },
];

const brandServices = [
  'Campagne photo',
  'Création de contenu',
  'Représentation de marque',
  'Événementiel',
  'Lancement de produit',
  'Storytelling',
  'Contenu social media',
];

const techSkills = {
  Technologie: ['HTML', 'CSS', 'ReactJS', 'Web', 'No-code', 'Low-code'],
  Projet: ['Gestion de projet', 'Organisation', 'Coordination', 'Planification'],
  Humain: ['Leadership', 'Communication', 'Négociation', 'Travail d’équipe'],
  Création: ['Storytelling', 'Branding', 'Design thinking', 'Création de contenu'],
  Entrepreneuriat: ['Innovation', 'Idéation', 'Stratégie', 'Développement de projet'],
};

function TechScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x050b16, 5, 15);

    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x8ec5ff, 1.5);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x7dd3fc, 18, 40);
    pointLight.position.set(3, 3, 5);
    scene.add(pointLight);

    const group = new THREE.Group();
    const geometry = new THREE.IcosahedronGeometry(1.35, 1);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x5eead4,
      emissive: 0x0a2640,
      metalness: 0.45,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x8be9fd, transparent: true, opacity: 0.9 }),
    );
    group.add(edges);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.02, 16, 220),
      new THREE.MeshBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.7 }),
    );
    ring.rotation.x = Math.PI / 2.5;
    group.add(ring);

    scene.add(group);

    const animate = () => {
      group.rotation.x += 0.004;
      group.rotation.y += 0.006;
      ring.rotation.z += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      edges.geometry.dispose();
      edges.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="tech-scene" aria-label="Visualisation 3D" />;
}

function App() {
  const [activeUniverse, setActiveUniverse] = useState('discover');
  const [portalOpen, setPortalOpen] = useState(true);

  const navLinks = useMemo(
    () => [
      { label: 'ME DÉCOUVRIR', href: '#discover' },
      { label: 'AMBASSADRICE', href: '#brand' },
      { label: 'TECH', href: '#tech' },
      { label: 'CONTACT', href: '#contact' },
    ],
    [],
  );

  const setUniverse = (key) => {
    setActiveUniverse(key);
    setPortalOpen(false);
  };

  return (
    <div className={`app-shell theme-${activeUniverse}`}>
      {portalOpen && (
        <div className="portal-overlay">
          <div className="portal-backdrop" />
          <div className="portal-content">
            <div className="portal-title-wrap">
              <p className="eyebrow">HODAVIA BANGBOLA</p>
              <h1>Trois univers. Une même vision.</h1>
            </div>

            <div className="portal-choices">
              <button type="button" className="portal-choice discover" onClick={() => setUniverse('discover')}>
                <span className="choice-label">ME DÉCOUVRIR</span>
                <span className="choice-subtitle">La femme derrière les projets.</span>
              </button>

              <button type="button" className="portal-choice brand" onClick={() => setUniverse('brand')}>
                <span className="choice-label">MON UNIVERS DE MARQUE</span>
                <span className="choice-subtitle">Ambassadrice de marque • Image • Créativité</span>
              </button>

              <button type="button" className="portal-choice tech" onClick={() => setUniverse('tech')}>
                <span className="choice-label">MON UNIVERS TECH</span>
                <span className="choice-subtitle">Entrepreneure • Innovation • NovaImpact</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="topbar">
        <div className="brand-mark">HODAVIA</div>
        <nav className="main-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button type="button" className="switch-button" onClick={() => setPortalOpen(true)}>
          ◉ SWITCH UNIVERSE
        </button>
      </header>

      <main>
        <section id="discover" className="page-section discover-section">
          <div className="section-shell">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">01 / WHO IS HODAVIA?</p>
                <h2>Je suis Hodavia.</h2>
                <p className="lead">Curieuse par nature. Créative par essence. Entrepreneure par conviction.</p>
                <p>
                  Je suis Hodavia BANGBOLA, une jeune entrepreneure béninoise évoluant à la croisée de la technologie,
                  de la créativité et de l’innovation.
                </p>
                <p>
                  Mon parcours m’a appris à ne pas choisir entre créer, comprendre et transmettre. J’aime explorer de
                  nouveaux univers, transformer les idées en projets et utiliser mes compétences pour construire quelque
                  chose qui serve vraiment.
                </p>
                <a href="#story" className="cta-link">DÉCOUVRIR MON HISTOIRE ↓</a>
              </div>
              <div className="portrait-panel">
                <div
                  className="portrait-card"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(13, 17, 19, 0.28), transparent), url(${discoverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="page-section story-section">
          <div className="section-shell narrow">
            <p className="eyebrow text-center">AVANT LES TITRES</p>
            <h3 className="section-title centered">Avant les titres, il y a une personne.</h3>
            <div className="story-layout">
              <div className="story-text">
                <p>J’aime apprendre des choses que je ne connais pas encore.</p>
                <p>J’aime les idées qui commencent modestement mais qui peuvent devenir grandes.</p>
                <p>
                  J’aime créer, expérimenter, prendre des initiatives et surtout comprendre comment une idée peut passer
                  de l’imagination à la réalité.
                </p>
                <p>
                  Plusieurs univers semblent aujourd’hui composer mon parcours. Pourtant, ils ont un point commun : <strong>la création.</strong>
                </p>
              </div>
              <div
                className="story-photo"
                aria-label="Portrait de Hodavia"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.15), transparent), url(${discoverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        <section className="page-section values-section">
          <div className="section-shell">
            <p className="eyebrow text-center">MES UNIVERS</p>
            <h3 className="section-title centered">Créer. Construire. Transmettre.</h3>
            <div className="three-cards">
              <article className="value-card">
                <span>CRÉER</span>
                <p>Imaginer des concepts, raconter des histoires, créer des expériences.</p>
              </article>
              <article className="value-card">
                <span>CONSTRUIRE</span>
                <p>Transformer une idée en projet, coordonner, expérimenter et avancer.</p>
              </article>
              <article className="value-card">
                <span>TRANSMETTRE</span>
                <p>Partager ce que j’apprends et contribuer à faire grandir les autres.</p>
              </article>
            </div>
            <p className="value-line">C’est probablement ce qui relie toutes les choses que je fais.</p>
          </div>
        </section>

        <section className="page-section timeline-section">
          <div className="section-shell">
            <p className="eyebrow">MON PARCOURS</p>
            <h3 className="section-title">Une histoire en construction.</h3>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.label} className="timeline-item">
                  <span className="timeline-label">{item.label}</span>
                  <div className="timeline-card">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section quote-section">
          <div className="section-shell narrow quote-shell">
            <p className="quote-main">Je veux créer des choses qui existent.</p>
            <div className="quote-list">
              <span>Des projets.</span>
              <span>Des expériences.</span>
              <span>Des opportunités.</span>
              <span>Des connexions.</span>
              <span>Des solutions.</span>
            </div>
            <p className="quote-note">Je crois qu’une idée n’a véritablement de valeur que lorsqu’elle rencontre le réel.</p>
          </div>
        </section>

        <section className="page-section keywords-section">
          <div className="section-shell narrow">
            <div className="word-stack">
              <span>CRÉATIVE</span>
              <span>CURIEUSE</span>
              <span>AUDACIEUSE</span>
              <span>TECH</span>
              <span>ENTREPRENEURE</span>
              <span>LEADER</span>
              <span>COMMUNICANTE</span>
              <span>RÊVEUSE</span>
            </div>
            <p className="keyword-tag">Et encore en construction.</p>
          </div>
        </section>

        <section className="page-section transition-section">
          <div className="section-shell narrow text-center">
            <p>Vous avez rencontré Hodavia.</p>
            <p>Maintenant, découvrez ce qu’elle crée.</p>
            <div className="transition-actions">
              <a href="#brand">MON UNIVERS DE MARQUE →</a>
              <a href="#tech">MON UNIVERS TECH →</a>
            </div>
          </div>
        </section>

        <section id="brand" className="page-section brand-section">
          <div className="section-shell">
            <div className="hero-grid brand-hero">
              <div className="hero-copy">
                <p className="eyebrow">02 / BRAND AMBASSADOR</p>
                <h2>Je ne porte pas seulement une image.</h2>
                <h2 className="accent-title">Je raconte une marque.</h2>
                <p className="lead">Ambassadrice de marque • Modeling • Création de contenu • Image</p>
              </div>
              <div
                className="cover-visual cover-brand"
                aria-label="Amabassadrice de marque"
                style={{
                  backgroundImage: `linear-gradient(145deg, rgba(255,255,255,0.2), transparent), url(${brandImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </section>

        <section className="page-section brand-identity">
          <div className="section-shell identity-layout">
            <div
              className="identity-image"
              style={{
                backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.3), transparent), url(${brandImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="identity-copy">
              <p className="eyebrow">MON RAPPORT À L’IMAGE</p>
              <h3 className="section-title">Une image attire. Une identité reste.</h3>
              <p>
                Pour moi, représenter une marque ne consiste pas simplement à apparaître sur une photographie. Une
                marque possède une histoire, une personnalité et une émotion.
              </p>
              <p>
                Mon rôle est de comprendre cet univers et de trouver la manière juste de l’incarner.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section brand-universe">
          <div className="section-shell">
            <p className="eyebrow text-center">MON UNIVERS</p>
            <div className="brand-list">
              <div className="brand-item">
                <span>IMAGE</span>
                <p>Présence visuelle, photographie et esthétique.</p>
              </div>
              <div className="brand-item">
                <span>PERSONNALITÉ</span>
                <p>Une présence naturelle qui permet à l’identité de la marque de rester humaine.</p>
              </div>
              <div className="brand-item">
                <span>STORYTELLING</span>
                <p>Donner un contexte et une émotion au produit ou au message.</p>
              </div>
              <div className="brand-item">
                <span>CONNEXION</span>
                <p>Créer un lien entre la marque et son audience.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section experience-section">
          <div className="section-shell">
            <p className="eyebrow">MON EXPÉRIENCE</p>
            <h3 className="section-title">Quelques étapes de mon parcours créatif</h3>
            <div className="experience-block">
              <div>
                <p className="experience-label">SUPRÊME ACADEMY</p>
                <p className="experience-tags">Photo • Modeling • Content Creation • Influence Marketing • Brand Representation</p>
              </div>
              <p>
                Une expérience qui m’a permis d’explorer plus profondément les univers de l’image, de la création de
                contenu et de la représentation de marque.
              </p>
            </div>
            <div className="winner-box">
              <div className="winner-number">01</div>
              <div>
                <p className="winner-title">Top Model Photo</p>
                <p className="winner-rank">1ère place</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section gallery-section">
          <div className="section-shell">
            <div className="gallery-grid">
              <div className="gallery-tile tall" />
              <div className="gallery-tile small" />
              <div className="gallery-tile small" />
              <div className="gallery-tile wide" />
            </div>
          </div>
        </section>

        <section className="page-section collaboration-section">
          <div className="section-shell narrow">
            <p className="eyebrow">CE QUE JE PEUX APPORTER</p>
            <h3 className="section-title">Une collaboration, pas simplement une apparition.</h3>
            <div className="collab-list">
              {brandServices.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section callout-section">
          <div className="section-shell narrow">
            <div
              className="callout-media"
              style={{
                backgroundImage: `linear-gradient(140deg, rgba(255,255,255,0.20), transparent), url(${brandImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="callout-copy">
              <p className="callout-quote">Votre marque a une histoire.</p>
              <p className="callout-quote">Construisons la manière de la raconter.</p>
              <div className="cta-group">
                <button type="button" className="cta-button">COLLABORER AVEC MOI</button>
                <a href="#tech" className="cta-link light">VOIR MON UNIVERS TECH →</a>
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="page-section tech-section">
          <div className="section-shell">
            <div className="hero-grid tech-hero">
              <div className="hero-copy">
                <p className="eyebrow">03 / TECH ENTREPRENEUR</p>
                <h2>Je ne veux pas seulement utiliser la technologie.</h2>
                <h2 className="accent-title">Je veux construire avec elle.</h2>
                <p className="lead">Entrepreneure tech • Innovation • Éducation numérique • NovaImpact</p>
                <a href="#novaimpact" className="cta-link tech-link">DÉCOUVRIR NOVAIMPACT ↓</a>
              </div>
              <div
                className="tech-visual"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 25%, rgba(125, 211, 252, 0.18), transparent 30%), url(${techImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <TechScene />
              </div>
            </div>
          </div>
        </section>

        <section id="novaimpact" className="page-section vision-section">
          <div className="section-shell narrow">
            <p className="eyebrow">MA VISION</p>
            <h3 className="section-title">Et si les jeunes n’apprenaient plus seulement à utiliser le numérique...</h3>
            <h3 className="section-title accent">mais à le créer ?</h3>
            <p>
              C’est autour de cette question que s’inscrit NovaImpact. Je crois que l’éducation numérique doit permettre
              aux jeunes de comprendre, expérimenter, créer et résoudre des problèmes grâce à la technologie.
            </p>
            <p>
              L’objectif n’est pas seulement de former des utilisateurs du numérique. Il s’agit de faire émerger ses
              futurs créateurs.
            </p>
          </div>
        </section>

        <section className="page-section novaimpact-section">
          <div className="section-shell">
            <div className="nova-logo">NOVAIMPACT</div>
            <p className="nova-tag">Réveiller. Inspirer. Construire.</p>
            <p>
              NovaImpact est mon projet entrepreneurial dans lequel je souhaite utiliser la technologie, l’éducation et
              l’innovation pour créer des opportunités et accompagner une nouvelle génération vers le monde numérique.
            </p>
          </div>
        </section>

        <section className="page-section projects-section">
          <div className="section-shell">
            <div className="project-grid">
              <article className="project-card">
                <div className="project-badge">NOVAEDU</div>
                <h4>Réinventer l’apprentissage du numérique.</h4>
                <p>
                  NovaEdu vise à permettre aux jeunes de découvrir le numérique de manière concrète, créative et orientée
                  vers la création.
                </p>
                <div className="tag-group">
                  <span>Code</span>
                  <span>Design</span>
                  <span>IA</span>
                  <span>Cybersécurité</span>
                  <span>Web</span>
                  <span>Robotique</span>
                  <span>Entrepreneuriat</span>
                </div>
                <a href="#contact">DÉCOUVRIR NOVAEDU →</a>
              </article>

              <article className="project-card alt">
                <div className="project-badge">NOVAGIRLS</div>
                <h4>Les filles sont les visages du numérique de demain.</h4>
                <p>
                  NovaGirls souhaite encourager davantage de jeunes filles à découvrir la technologie, développer leurs
                  compétences et se projeter comme actrices du monde numérique.
                </p>
                <a href="#contact">DÉCOUVRIR NOVAGIRLS →</a>
              </article>
            </div>
          </div>
        </section>

        <section className="page-section construct-section">
          <div className="section-shell narrow">
            <p className="eyebrow">MA FAÇON DE CONSTRUIRE</p>
            <h3 className="section-title">Observer. Comprendre. Imaginer. Construire.</h3>
            <div className="flow-chart">
              <span>OBSERVER</span>
              <span>COMPRENDRE</span>
              <span>IMAGINER</span>
              <span>CONSTRUIRE</span>
              <span>TESTER</span>
              <span>AMÉLIORER</span>
              <span>DÉPLOYER</span>
            </div>
            <p className="flow-note">Je crois davantage aux projets qui évoluent qu’aux idées parfaites qui restent sur papier.</p>
          </div>
        </section>

        <section className="page-section skills-section">
          <div className="section-shell">
            <p className="eyebrow">MES COMPÉTENCES</p>
            <div className="skills-grid">
              {Object.entries(techSkills).map(([title, items]) => (
                <div key={title} className="skill-column">
                  <span>{title}</span>
                  <div className="skill-tags">
                    {items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section soon-section">
          <div className="section-shell narrow">
            <p className="eyebrow">LES PROJETS QUI VIENDRONT APRÈS</p>
            <h3 className="section-title">Ce n’est que le début.</h3>
            <p>
              NovaImpact n’est pas seulement un projet que je construis aujourd’hui. C’est un terrain d’expérimentation
              pour imaginer de nouvelles façons d’utiliser la technologie afin de créer de l’impact.
            </p>
            <div className="soon-grid">
              <div className="coming-soon">COMING SOON / 01</div>
              <div className="coming-soon">COMING SOON / 02</div>
            </div>
          </div>
        </section>

        <section className="page-section common-vision">
          <div className="section-shell narrow">
            <p className="eyebrow">UNE MÊME VISION</p>
            <h3 className="section-title">Créer. Représenter. Transformer.</h3>
            <p>
              Trois univers peuvent sembler différents. Pourtant, ils racontent la même chose.
            </p>
            <p>
              J’aime créer des expériences, porter des idées et transformer des visions en projets concrets. Que je sois
              devant une caméra, derrière un projet numérique ou au milieu d’une équipe, je reste guidée par la même
              envie : faire émerger quelque chose qui a du sens.
            </p>
          </div>
        </section>

        <footer id="contact" className="page-section footer-section">
          <div className="section-shell">
            <div className="footer-card">
              <p className="eyebrow">CONTACT</p>
              <h3 className="section-title centered">Tu veux travailler avec moi ?</h3>
              <div className="contact-options">
                <a href="#brand" className="contact-card">
                  <span className="contact-card-label">Une marque ?</span>
                  <strong>Collaborer</strong>
                </a>
                <a href="#tech" className="contact-card">
                  <span className="contact-card-label">Un projet tech ?</span>
                  <strong>Parlons-en</strong>
                </a>
                <a href="#discover" className="contact-card">
                  <span className="contact-card-label">Une opportunité ?</span>
                  <strong>Me contacter</strong>
                </a>
              </div>
              <div className="contact-links">
                <a href="mailto:hello@hodavia-bangbola.com">EMAIL</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a>
              </div>
              <p className="footer-meta">Hodavia BANGBOLA • Cotonou, Bénin • Available for collaborations & opportunities</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
