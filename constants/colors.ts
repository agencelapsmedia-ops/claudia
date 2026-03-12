export const Colors = {
  // Backgrounds — Charte CyberTIA v1.0
  bgPrimary: '#0D2340',      // Bleu Marine
  bgSecondary: '#112A45',    // Marine dérivé (surfaces)
  bgCard: '#143050',         // Marine éclairci (cards)

  // Accents — Charte CyberTIA v1.0
  acier: '#1E6FA8',          // Bleu Acier — boutons, titres, liens
  cyan: '#00AACC',           // Cyan Électrique — hover, soulignements, highlights

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#8A9BB5',  // Lisible sur fonds sombres
  textSlate: '#3A4A5A',      // Gris Slate — texte sur fonds clairs
  textMuted: '#4A5568',

  // Surfaces claires (portail client, rapports)
  bgLight: '#FFFFFF',
  bgLightCard: '#EDF1F5',    // Gris Clair — cartes sur fond blanc

  // Status — Charte CyberTIA v1.0
  danger: '#E03C3C',         // Rouge Alerte
  success: '#2DB87A',        // Vert Succès — CTA principal
  warning: '#FF9500',        // Avertissement
  info: '#00AACC',           // Info / IA = Cyan Électrique

  // Gradient — seul dégradé autorisé par la charte
  gradientPrimary: ['#0D2340', '#1E6FA8'] as const,  // Marine → Acier
  gradientCard: ['#143050', '#112A45'] as const,
  gradientCyan: ['#1E6FA8', '#00AACC'] as const,     // Acier → Cyan (accent)

  // Borders
  border: 'rgba(255,255,255,0.06)',
  borderFocus: '#1E6FA8',
};
