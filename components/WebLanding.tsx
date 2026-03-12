import React from 'react';
import { Platform } from 'react-native';

const LANDING_HTML = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bleu-marine: #0D2340;
    --bleu-acier: #1E6FA8;
    --cyan: #00AACC;
    --gris-slate: #3A4A5A;
    --gris-clair: #EDF1F5;
    --white: #FFFFFF;
    --vert-succes: #2DB87A;
    --rouge-alerte: #E03C3C;
    --warning: #FF9500;
    --bg-primary: #0D2340;
    --bg-secondary: #112A45;
    --bg-card: #143050;
    --text-secondary: #8A9BB5;
  }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-primary);
    color: var(--white);
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image:
      linear-gradient(rgba(30, 111, 168, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 111, 168, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    pointer-events: none; z-index: 0;
  }
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
    padding: 20px 64px;
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(13, 35, 64, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .logo-icon {
    width: 36px; height: 36px;
    background: linear-gradient(135deg, var(--bleu-acier), var(--cyan));
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center; font-size: 18px;
  }
  .logo-text {
    font-size: 22px; font-weight: 800; letter-spacing: 3px;
    background: linear-gradient(90deg, #fff, var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .logo-badge { font-size: 10px; font-weight: 500; color: var(--text-secondary); letter-spacing: 1px; margin-top: 2px; }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; letter-spacing: 0.5px; }
  .nav-links a:hover { color: var(--white); }
  .nav-cta { display: flex; gap: 12px; align-items: center; }
  .btn-ghost {
    padding: 10px 20px; background: transparent;
    border: 1px solid rgba(255,255,255,0.15); color: var(--white);
    border-radius: 8px; font-size: 14px; font-weight: 500;
    cursor: pointer; transition: all 0.2s; font-family: 'Inter', sans-serif;
    text-decoration: none; display: inline-flex; align-items: center;
  }
  .btn-ghost:hover { border-color: var(--bleu-acier); color: var(--bleu-acier); }
  .btn-primary {
    padding: 10px 24px;
    background: var(--vert-succes);
    border: none; color: var(--white); border-radius: 8px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all 0.2s; font-family: 'Inter', sans-serif;
    box-shadow: 0 0 20px rgba(45, 184, 122, 0.3);
    text-decoration: none; display: inline-flex; align-items: center;
  }
  .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 0 30px rgba(45, 184, 122, 0.4); filter: brightness(1.08); }
  .btn-accent {
    padding: 10px 24px;
    background: linear-gradient(135deg, var(--bleu-acier), var(--cyan));
    border: none; color: var(--white); border-radius: 8px;
    font-size: 14px; font-weight: 600; cursor: pointer;
    transition: all 0.2s; font-family: 'Inter', sans-serif;
    box-shadow: 0 0 20px rgba(30, 111, 168, 0.3);
    text-decoration: none; display: inline-flex; align-items: center;
  }
  .btn-accent:hover { transform: translateY(-1px); box-shadow: 0 0 30px rgba(0, 170, 204, 0.4); }
  .hero {
    position: relative; min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 120px 64px 80px; text-align: center; z-index: 1;
  }
  .hero-glow {
    position: absolute; top: 20%; left: 50%; transform: translateX(-50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(30, 111, 168, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-glow-2 {
    position: absolute; top: 30%; left: 60%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(0, 170, 204, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 16px;
    background: rgba(30, 111, 168, 0.1);
    border: 1px solid rgba(30, 111, 168, 0.3);
    border-radius: 100px; font-size: 12px; font-weight: 600;
    color: var(--cyan); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 32px;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; background: var(--cyan);
    border-radius: 50%; animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
  }
  .hero h1 {
    font-size: clamp(48px, 7vw, 88px); font-weight: 900;
    line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px;
  }
  .gradient-text {
    background: linear-gradient(135deg, var(--white) 0%, var(--cyan) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero-sub {
    font-size: 20px; color: var(--text-secondary);
    max-width: 600px; margin: 0 auto 48px; line-height: 1.7; font-weight: 400;
  }
  .hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 80px; }
  .btn-large { padding: 16px 36px; font-size: 16px; font-weight: 600; border-radius: 12px; }
  .hero-stats { display: flex; gap: 64px; justify-content: center; flex-wrap: wrap; }
  .stat { text-align: center; }
  .stat-number {
    font-size: 36px; font-weight: 800;
    background: linear-gradient(135deg, var(--white), var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .stat-label { font-size: 13px; color: var(--text-secondary); margin-top: 4px; letter-spacing: 0.5px; }
  .security-badges { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }
  .sec-badge {
    display: flex; align-items: center; gap: 8px; padding: 8px 16px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 100px; font-size: 12px; color: var(--text-secondary);
  }
  .trusted {
    position: relative; z-index: 1; padding: 40px 64px; text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .trusted p { font-size: 12px; color: var(--text-secondary); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 24px; }
  .trusted-logos { display: flex; gap: 48px; justify-content: center; align-items: center; flex-wrap: wrap; }
  .trusted-logo { font-size: 14px; font-weight: 700; color: rgba(255,255,255,0.25); letter-spacing: 2px; text-transform: uppercase; }
  .section {
    position: relative; z-index: 1; padding: 120px 64px;
    max-width: 1280px; margin: 0 auto;
  }
  .section-label { font-size: 12px; font-weight: 600; color: var(--cyan); letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px; }
  .section-title { font-size: clamp(32px, 4vw, 52px); font-weight: 800; line-height: 1.1; letter-spacing: -1px; margin-bottom: 16px; }
  .section-sub { font-size: 18px; color: var(--text-secondary); max-width: 560px; line-height: 1.7; }
  .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 64px; }
  .feature-card {
    background: var(--bg-card);
    border: 1px solid rgba(30, 111, 168, 0.25);
    border-radius: 20px; padding: 32px;
    transition: all 0.3s; cursor: default;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);
  }
  .feature-card:hover {
    background: #1A3A5E;
    border-color: rgba(0, 170, 204, 0.4);
    transform: translateY(-4px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(30,111,168,0.15), inset 0 1px 0 rgba(255,255,255,0.08);
  }
  .feature-icon {
    width: 52px; height: 52px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; margin-bottom: 20px;
  }
  .icon-blue { background: rgba(30,111,168,0.25); border: 1px solid rgba(30,111,168,0.3); }
  .icon-cyan { background: rgba(0,170,204,0.2); border: 1px solid rgba(0,170,204,0.3); }
  .icon-green { background: rgba(45,184,122,0.2); border: 1px solid rgba(45,184,122,0.3); }
  .icon-orange { background: rgba(255,149,0,0.2); border: 1px solid rgba(255,149,0,0.3); }
  .icon-red { background: rgba(224,60,60,0.2); border: 1px solid rgba(224,60,60,0.3); }
  .icon-purple { background: rgba(30,111,168,0.15); border: 1px solid rgba(30,111,168,0.2); }
  .feature-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
  .feature-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
  .score-section { position: relative; z-index: 1; padding: 0 64px 120px; }
  .score-container {
    max-width: 1280px; margin: 0 auto;
    background: var(--bg-card);
    border: 1px solid rgba(30,111,168,0.25);
    border-radius: 28px; padding: 64px;
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: center; overflow: hidden; position: relative;
    box-shadow: 0 4px 40px rgba(0,0,0,0.4);
  }
  .score-container::before {
    content: ''; position: absolute; top: -100px; right: -100px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(0,170,204,0.06) 0%, transparent 70%);
    pointer-events: none;
  }
  .score-visual { display: flex; align-items: center; justify-content: center; }
  .score-ring { position: relative; width: 240px; height: 240px; }
  .score-ring svg { transform: rotate(-90deg); }
  .score-ring-bg { fill: none; stroke: rgba(255,255,255,0.05); stroke-width: 12; }
  .score-ring-fill {
    fill: none; stroke: url(#scoreGradient); stroke-width: 12;
    stroke-linecap: round; stroke-dasharray: 628; stroke-dashoffset: 201;
    filter: drop-shadow(0 0 8px rgba(0,170,204,0.5));
  }
  .score-center {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%); text-align: center;
  }
  .score-number {
    font-size: 56px; font-weight: 900;
    background: linear-gradient(135deg, var(--white), var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1;
  }
  .score-label { font-size: 12px; color: var(--text-secondary); letter-spacing: 1px; }
  .score-content h2 { font-size: 36px; font-weight: 800; line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.5px; }
  .score-content p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 32px; font-size: 16px; }
  .risk-items { display: flex; flex-direction: column; gap: 12px; }
  .risk-item {
    display: flex; align-items: center; gap: 12px; padding: 12px 16px;
    background: rgba(255,255,255,0.03); border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
  }
  .risk-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .risk-item span { font-size: 14px; color: var(--text-secondary); flex: 1; }
  .risk-count { font-size: 14px; font-weight: 700; color: var(--white) !important; }
  .ai-section { position: relative; z-index: 1; padding: 0 64px 120px; }
  .ai-container { max-width: 1280px; margin: 0 auto; }
  .ai-header { text-align: center; margin-bottom: 64px; }
  .ai-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .ai-card {
    background: var(--bg-card);
    border: 1px solid rgba(30,111,168,0.25);
    border-radius: 20px; padding: 32px;
    position: relative; overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.4);
  }
  .ai-card.featured { border-color: rgba(0,170,204,0.3); box-shadow: 0 0 40px rgba(0,170,204,0.07); }
  .ai-card.featured::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--bleu-acier), var(--cyan));
  }
  .ai-tag {
    display: inline-block; padding: 4px 12px;
    background: rgba(0,170,204,0.1); border: 1px solid rgba(0,170,204,0.2);
    border-radius: 100px; font-size: 11px; font-weight: 600;
    color: var(--cyan); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;
  }
  .ai-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
  .ai-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
  .ai-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .ai-list li { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-secondary); }
  .ai-list li::before { content: '\\2192'; color: var(--cyan); font-weight: 700; }
  .cta-section { position: relative; z-index: 1; padding: 0 64px 120px; }
  .cta-box {
    max-width: 1280px; margin: 0 auto;
    background: linear-gradient(135deg, rgba(30,111,168,0.15), rgba(0,170,204,0.08));
    border: 1px solid rgba(30,111,168,0.3);
    border-radius: 28px; padding: 80px; text-align: center;
    position: relative; overflow: hidden;
    box-shadow: 0 0 60px rgba(30,111,168,0.1);
  }
  .cta-box::before {
    content: ''; position: absolute; top: -150px; left: 50%; transform: translateX(-50%);
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(30,111,168,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-box h2 { font-size: clamp(32px, 4vw, 52px); font-weight: 900; margin-bottom: 16px; letter-spacing: -1px; }
  .cta-box p { font-size: 18px; color: var(--text-secondary); margin-bottom: 40px; }
  .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
  footer {
    position: relative; z-index: 1; padding: 40px 64px;
    border-top: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: space-between;
  }
  .footer-logo {
    font-size: 18px; font-weight: 800; letter-spacing: 3px;
    background: linear-gradient(90deg, #fff, var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .footer-tagline { font-size: 12px; color: var(--text-secondary); margin-top: 4px; }
  .footer-links { display: flex; gap: 32px; list-style: none; }
  .footer-links a { font-size: 13px; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; }
  .footer-links a:hover { color: var(--white); }
  .footer-copy { font-size: 12px; color: rgba(255,255,255,0.2); }
  @media (max-width: 1024px) {
    nav { padding: 20px 32px; }
    .nav-links { display: none; }
    .hero, .section { padding: 120px 32px 80px; }
    .features-grid { grid-template-columns: repeat(2, 1fr); }
    .score-container { grid-template-columns: 1fr; gap: 40px; padding: 40px; }
    .ai-cards { grid-template-columns: 1fr; }
    .score-section, .ai-section, .cta-section { padding: 0 32px 80px; }
    .cta-box { padding: 48px 32px; }
    footer { padding: 32px; flex-direction: column; gap: 24px; text-align: center; }
  }
  @media (max-width: 640px) {
    .features-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 32px; }
    .cta-buttons { flex-direction: column; align-items: center; }
  }
</style>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

<nav>
  <a href="#" class="logo">
    <div class="logo-icon">&#x1f6e1;&#xfe0f;</div>
    <div>
      <div class="logo-text">CLAUDIA</div>
      <div class="logo-badge">LAPSMEDIA &times; CyberTIA</div>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="#features">Fonctionnalit&eacute;s</a></li>
    <li><a href="#audit">Audit IA</a></li>
    <li><a href="#dashboard">Dashboard</a></li>
    <li><a href="#security">S&eacute;curit&eacute;</a></li>
  </ul>
  <div class="nav-cta">
    <a href="/login" class="btn-ghost">Connexion</a>
    <a href="/register" class="btn-primary">Cr&eacute;er mon compte</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-glow"></div>
  <div class="hero-glow-2"></div>
  <div>
    <div class="hero-badge">
      <div class="hero-badge-dot"></div>
      Propuls&eacute; par l'Intelligence Artificielle
    </div>
    <h1>
      <span class="gradient-text">Cybers&eacute;curit&eacute;</span><br/>
      Intelligente pour<br/>
      les PME du Qu&eacute;bec
    </h1>
    <p class="hero-sub">
      CLAUDIA audite, prot&egrave;ge et optimise votre infrastructure IT en temps r&eacute;el.
      Recommandations IA prioris&eacute;es. Rapports professionnels. Z&eacute;ro complexit&eacute;.
    </p>
    <div class="hero-buttons">
      <a href="/register" class="btn-primary btn-large">Cr&eacute;er mon compte gratuitement</a>
      <a href="#dashboard" class="btn-ghost btn-large">Voir la d&eacute;mo &rarr;</a>
    </div>
    <div class="hero-stats">
      <div class="stat"><div class="stat-number">98%</div><div class="stat-label">Taux de d&eacute;tection</div></div>
      <div class="stat"><div class="stat-number">&lt; 5min</div><div class="stat-label">Audit complet</div></div>
      <div class="stat"><div class="stat-number">200+</div><div class="stat-label">Points de contr&ocirc;le</div></div>
      <div class="stat"><div class="stat-number">Loi 25</div><div class="stat-label">Conforme</div></div>
    </div>
    <div class="security-badges">
      <div class="sec-badge">&#x1f512; Chiffrement TLS 1.3</div>
      <div class="sec-badge">&#x1f1e8;&#x1f1e6; Donn&eacute;es au Canada</div>
      <div class="sec-badge">&#x2705; MFA Obligatoire</div>
      <div class="sec-badge">&#x1f4cb; Conforme Loi 25</div>
    </div>
  </div>
</section>

<div class="trusted">
  <p>Partenaires technologiques de confiance</p>
  <div class="trusted-logos">
    <span class="trusted-logo">Microsoft 365</span>
    <span class="trusted-logo">NinjaOne RMM</span>
    <span class="trusted-logo">Autotask PSA</span>
    <span class="trusted-logo">Azure Canada</span>
    <span class="trusted-logo">Fortinet</span>
  </div>
</div>

<section class="section" id="features">
  <div class="section-label">Fonctionnalit&eacute;s</div>
  <h2 class="section-title">Tout ce dont votre<br/><span class="gradient-text">infrastructure a besoin</span></h2>
  <p class="section-sub">Une plateforme unifi&eacute;e pour g&eacute;rer, auditer et s&eacute;curiser l'environnement IT de vos clients.</p>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon icon-blue">&#x1f50d;</div>
      <h3>Audit d'Infrastructure IA</h3>
      <p>Analyse compl&egrave;te de votre environnement IT en moins de 5 minutes. Serveurs, r&eacute;seau, cloud, endpoints.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon icon-cyan">&#x1f4ca;</div>
      <h3>Score de S&eacute;curit&eacute; en Temps R&eacute;el</h3>
      <p>Un score unique de 0 &agrave; 100 qui refl&egrave;te l'&eacute;tat r&eacute;el de votre cybers&eacute;curit&eacute;, mis &agrave; jour en continu.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon icon-green">&#x1f916;</div>
      <h3>Recommandations IA</h3>
      <p>CLAUDIA g&eacute;n&egrave;re des actions concr&egrave;tes avec effort estim&eacute; et co&ucirc;t. Exactement quoi faire, dans quel ordre.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon icon-orange">&#x1f4cb;</div>
      <h3>Gestion de Projets IT</h3>
      <p>Suivez tous vos projets informatiques &mdash; migrations, d&eacute;ploiements, incidents &mdash; avec t&acirc;ches et budget.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon icon-red">&#x1f6a8;</div>
      <h3>Alertes Critiques</h3>
      <p>D&eacute;tection proactive des vuln&eacute;rabilit&eacute;s : antivirus, serveurs en fin de support, sauvegardes non test&eacute;es.</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon icon-purple">&#x1f4c4;</div>
      <h3>Rapports PDF Professionnels</h3>
      <p>G&eacute;n&eacute;rez des rapports d'audit complets en 1 clic. R&eacute;sum&eacute; ex&eacute;cutif, plan 30/60/90 jours.</p>
    </div>
  </div>
</section>

<section class="score-section" id="dashboard">
  <div class="score-container">
    <div class="score-visual">
      <div class="score-ring">
        <svg width="240" height="240" viewBox="0 0 240 240">
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#1E6FA8"/>
              <stop offset="100%" style="stop-color:#00AACC"/>
            </linearGradient>
          </defs>
          <circle class="score-ring-bg" cx="120" cy="120" r="100"/>
          <circle class="score-ring-fill" cx="120" cy="120" r="100"/>
        </svg>
        <div class="score-center">
          <div class="score-number">67</div>
          <div class="score-label">/100</div>
        </div>
      </div>
    </div>
    <div class="score-content">
      <div class="section-label">Score de S&eacute;curit&eacute;</div>
      <h2>Votre posture de<br/><span class="gradient-text">cybers&eacute;curit&eacute; en un coup d'oeil</span></h2>
      <p>CLAUDIA analyse en continu votre infrastructure et calcule un score global bas&eacute; sur 200+ points de contr&ocirc;le.</p>
      <div class="risk-items">
        <div class="risk-item"><div class="risk-dot" style="background:#E03C3C"></div><span>Risques critiques</span><span class="risk-count">2</span></div>
        <div class="risk-item"><div class="risk-dot" style="background:#FF9500"></div><span>Risques &eacute;lev&eacute;s</span><span class="risk-count">5</span></div>
        <div class="risk-item"><div class="risk-dot" style="background:#FFD60A"></div><span>Risques moyens</span><span class="risk-count">8</span></div>
        <div class="risk-item"><div class="risk-dot" style="background:#2DB87A"></div><span>Faibles / R&eacute;solus</span><span class="risk-count">12</span></div>
      </div>
    </div>
  </div>
</section>

<section class="ai-section" id="audit">
  <div class="ai-container">
    <div class="ai-header">
      <div class="section-label">Intelligence Artificielle</div>
      <h2 class="section-title"><span class="gradient-text">CLAUDIA pense.</span><br/>Vous agissez.</h2>
      <p style="color:var(--text-secondary);font-size:18px;margin-top:16px;">Notre IA analyse votre infrastructure et vous dit exactement quoi faire, dans quel ordre.</p>
    </div>
    <div class="ai-cards">
      <div class="ai-card featured">
        <div class="ai-tag">IA G&eacute;n&eacute;rative</div>
        <h3>Recommandations Intelligentes</h3>
        <p>CLAUDIA g&eacute;n&egrave;re un plan d'action prioris&eacute; bas&eacute; sur votre profil de risque et les meilleures pratiques.</p>
        <ul class="ai-list">
          <li>Priorisation automatique par niveau de risque</li>
          <li>Estimation d'effort et de co&ucirc;t pour chaque action</li>
          <li>Timeline sugg&eacute;r&eacute;e : 30, 60 et 90 jours</li>
          <li>Cr&eacute;ation de projets en 1 clic</li>
        </ul>
      </div>
      <div class="ai-card featured">
        <div class="ai-tag">Analyse Profonde</div>
        <h3>Audit en 5 Dimensions</h3>
        <p>Chaque audit couvre les 5 domaines critiques de votre infrastructure IT.</p>
        <ul class="ai-list">
          <li>Serveurs &amp; syst&egrave;mes d'exploitation</li>
          <li>S&eacute;curit&eacute; r&eacute;seau &amp; pare-feu</li>
          <li>Cloud, licences &amp; sauvegardes</li>
          <li>Endpoints &amp; antivirus/EDR</li>
          <li>Gestion des acc&egrave;s &amp; MFA</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="cta-section" id="security">
  <div class="cta-box">
    <div class="section-label">Pr&ecirc;t &agrave; s&eacute;curiser votre infrastructure?</div>
    <h2>Commencez votre<br/><span class="gradient-text">premier audit gratuit</span></h2>
    <p>Rejoignez les PME qu&eacute;b&eacute;coises qui font confiance &agrave; CLAUDIA pour leur cybers&eacute;curit&eacute;.</p>
    <div class="cta-buttons">
      <a href="/register" class="btn-primary btn-large">Cr&eacute;er mon compte &mdash; Gratuit</a>
      <a href="/login" class="btn-ghost btn-large">J'ai d&eacute;j&agrave; un compte</a>
    </div>
  </div>
</section>

<footer>
  <div>
    <div class="footer-logo">CLAUDIA</div>
    <div class="footer-tagline">LAPSMEDIA &times; CyberTIA &mdash; Cybers&eacute;curit&eacute; pour PME</div>
  </div>
  <ul class="footer-links">
    <li><a href="#features">Fonctionnalit&eacute;s</a></li>
    <li><a href="#">Tarification</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Confidentialit&eacute;</a></li>
  </ul>
  <div class="footer-copy">&copy; 2026 CyberTIA. Tous droits r&eacute;serv&eacute;s.</div>
</footer>
`;

export default function WebLanding() {
  if (Platform.OS !== 'web') return null;

  return (
    <div
      style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
      dangerouslySetInnerHTML={{ __html: LANDING_HTML }}
    />
  ) as any;
}
