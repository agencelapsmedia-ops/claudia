# CLAUDIA — Frontend Skill & Design System
**LAPSMEDIA × CyberTIA | React Native + Expo**

---

## 🎯 STACK TECHNIQUE

- **Framework** : React Native + Expo (SDK 51+)
- **Navigation** : Expo Router (file-based)
- **UI Library** : Tamagui + Gluestack UI v2
- **Styling** : NativeWind (Tailwind pour RN)
- **Animations** : React Native Reanimated 3
- **Icônes** : @expo/vector-icons (Ionicons)
- **Charts** : Victory Native XL
- **TypeScript** : strict mode

---

## 🎨 PALETTE DE COULEURS CLAUDIA
```ts
export const Colors = {
  // Backgrounds
  bgPrimary: '#0A1628',      // Bleu marine profond
  bgSecondary: '#1C2333',    // Gris anthracite
  bgCard: '#141E30',         // Cards/surfaces

  // Accents
  electric: '#1E5FFF',       // Bleu électrique — CTAs, boutons
  cyan: '#00D4FF',           // Cyan — highlights, IA, actif

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#8A9BB5',
  textMuted: '#4A5568',

  // Status
  danger: '#FF3B30',         // Critique / Erreur
  success: '#34C759',        // Succès / OK
  warning: '#FF9500',        // Avertissement
  info: '#00D4FF',           // Info / IA

  // Gradients
  gradientPrimary: ['#0A1628', '#1E5FFF'],
  gradientCard: ['#141E30', '#1C2333'],
  gradientCyan: ['#1E5FFF', '#00D4FF'],
}
```

---

## ✍️ TYPOGRAPHIE

- **Font principale** : Inter (ou SF Pro sur iOS natif)
- **Font display** : Inter Bold / Black pour les titres
- **Hiérarchie** :
  - H1 : 32px Bold — scores, titres de page
  - H2 : 24px SemiBold — sections
  - H3 : 18px SemiBold — sous-sections
  - Body : 14px Regular — contenu
  - Caption : 12px Regular — labels, badges
  - Micro : 10px Medium — timestamps, meta

---

## 🏗️ ARCHITECTURE DES DOSSIERS
```
claudia-app/
├── app/
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── forgot-password.tsx
│   ├── (tabs)/
│   │   ├── dashboard.tsx
│   │   ├── audits.tsx
│   │   ├── projects.tsx
│   │   ├── clients.tsx
│   │   └── settings.tsx
│   ├── audit/
│   │   ├── [id].tsx
│   │   └── new.tsx
│   ├── project/
│   │   ├── [id].tsx
│   │   └── new.tsx
│   ├── client/
│   │   └── [id].tsx
│   └── _layout.tsx
├── components/
│   ├── ui/
│   │   ├── ClaudiaLogo.tsx
│   │   ├── PrimaryButton.tsx
│   │   ├── SecureInput.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Toast.tsx
│   │   └── SkeletonLoader.tsx
│   ├── dashboard/
│   │   ├── SecurityScoreCircle.tsx
│   │   ├── MetricCard.tsx
│   │   ├── AlertItem.tsx
│   │   └── ActivityChart.tsx
│   ├── audit/
│   │   ├── RiskBadge.tsx
│   │   ├── RecommendationCard.tsx
│   │   └── AuditCard.tsx
│   ├── project/
│   │   ├── TaskItem.tsx
│   │   ├── PhaseAccordion.tsx
│   │   └── BudgetIndicator.tsx
│   └── clients/
│       ├── ClientCard.tsx
│       └── SecurityTrendChart.tsx
├── constants/
│   ├── colors.ts
│   ├── typography.ts
│   └── mockData.ts
├── hooks/
│   ├── useTheme.ts
│   └── useAuth.ts
├── types/
│   ├── audit.types.ts
│   ├── project.types.ts
│   └── client.types.ts
└── utils/
    ├── formatters.ts
    └── helpers.ts
```

---

## 📦 DÉPENDANCES (package.json)
```json
{
  "dependencies": {
    "expo": "~51.0.0",
    "expo-router": "~3.5.0",
    "react-native": "0.74.0",
    "react-native-reanimated": "~3.10.0",
    "react-native-gesture-handler": "~2.16.0",
    "react-native-safe-area-context": "4.10.1",
    "react-native-screens": "3.31.1",
    "react-native-svg": "15.2.0",
    "@expo/vector-icons": "^14.0.0",
    "victory-native": "^41.0.0",
    "@react-native-async-storage/async-storage": "1.23.1",
    "expo-linear-gradient": "~13.0.2",
    "expo-blur": "~13.0.2",
    "expo-haptics": "~13.0.1",
    "nativewind": "^4.0.0",
    "tailwindcss": "^3.4.0"
  }
}
```

---

## 🖥️ RÈGLES DE DESIGN UI

### Cartes (Cards)
- Background : `#141E30`
- Border : `1px solid rgba(255,255,255,0.06)`
- Border radius : `16px`
- Padding : `16px`
- Shadow : `0 4px 24px rgba(0,0,0,0.4)`

### Boutons
- Primary : gradient `#1E5FFF → #00D4FF`, radius `12px`, height `52px`
- Secondary : border `#1E5FFF`, background transparent
- Danger : background `#FF3B30`
- Press animation : scale `0.97` avec Reanimated

### Inputs
- Background : `#1C2333`
- Border focus : `#1E5FFF` avec glow effect
- Border radius : `12px`
- Height : `52px`

### Espacement
- Système de 8px : 4, 8, 12, 16, 24, 32, 48, 64
- Screen padding horizontal : `16px`
- Gap entre cards : `12px`

### Effets spéciaux (look IA)
- Gradient text pour les titres principaux (cyan → bleu)
- Subtle glow sur les éléments actifs (cyan #00D4FF, opacity 0.3)
- Backdrop blur sur les modals
- Particules / grid en arrière-plan sur le splash (subtil)
- Animations staggered à l'entrée des listes

---

## 📊 MOCK DATA — Résumé

### Clients fictifs
1. **Groupe Beaumont Inc.** — Distribution, 85 employés, score 67/100
2. **Clinique Santé Nord** — Santé, 42 employés, score 54/100
3. **Transport Bélanger** — Transport, 120 employés, score 78/100

### Audits
- 2 complétés (Beaumont + Santé Nord)
- 1 en cours (Transport Bélanger)
- Scores : 67, 54, 78

### Projets actifs (5)
1. Migration serveur Windows Server 2022 — Beaumont
2. Déploiement Microsoft 365 — Clinique Santé Nord
3. Audit cybersécurité complet — Transport Bélanger
4. Installation pare-feu Fortinet — Beaumont
5. Onboarding nouveau client — Transport Bélanger

### Métriques dashboard
- Score global : 67/100
- Clients actifs : 12
- Tickets ouverts : 7 (2 critiques)
- Projets actifs : 5
- Licences à renouveler : 4

---

## 🚀 ORDRE DE DÉVELOPPEMENT

1. ✅ Setup architecture + mockData + types
2. ✅ Auth screens (login + splash animé)
3. ✅ Dashboard principal
4. ✅ Module Audits
5. ✅ Module Projets
6. ✅ Module Clients
7. ✅ Rapports + Portail client
8. ✅ Settings + Mode Démo investisseurs

---

## 🎯 OBJECTIF MVP

> Interface 100% frontend avec mock data.
> Aucun backend requis pour la démo.
> Prêt pour pitch investisseurs et démonstration clients.
> Design niveau enterprise : Palo Alto Networks × Linear.app

---

*CLAUDIA v1.0.0-beta | LAPSMEDIA × CyberTIA | Confidentiel*