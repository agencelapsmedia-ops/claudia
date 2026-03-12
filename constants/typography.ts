import { TextStyle } from 'react-native';

// Charte CyberTIA v1.0 — Police: Inter
// Couleurs: H1 #0D2340, H2 #1E6FA8, H3-H6 #0D2340/#3A4A5A, Body #3A4A5A
export const Typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 32,
    fontWeight: '800',    // ExtraBold (charte)
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',    // Bold (charte)
    lineHeight: 32,
  },
  h3: {
    fontSize: 18,
    fontWeight: '700',    // Bold (charte)
    lineHeight: 24,
  },
  h4: {
    fontSize: 16,
    fontWeight: '700',    // Bold (charte)
    lineHeight: 22,
  },
  h5: {
    fontSize: 14,
    fontWeight: '600',    // SemiBold (charte)
    lineHeight: 20,
  },
  h6: {
    fontSize: 13,
    fontWeight: '500',    // Medium (charte)
    lineHeight: 18,
  },
  body: {
    fontSize: 14,
    fontWeight: '400',    // Regular
    lineHeight: 22,       // 1.6x (charte: interlignage 1.6x)
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  micro: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
  },
  button: {
    fontSize: 14,
    fontWeight: '700',    // Bold (charte)
    lineHeight: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
};
