import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import WebLanding from '@/components/WebLanding';

export default function IndexScreen() {
  const router = useRouter();

  // Mobile: splash -> login après 2.5s
  useEffect(() => {
    if (Platform.OS !== 'web') {
      const timer = setTimeout(() => {
        router.replace('/(auth)/login');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Web: afficher la landing page
  if (Platform.OS === 'web') {
    return <WebLanding />;
  }

  // Mobile: splash screen
  return (
    <LinearGradient colors={[Colors.bgPrimary, '#0D1F3C', Colors.bgPrimary]} style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconRing}>
          <Ionicons name="shield-checkmark" size={48} color={Colors.cyan} />
        </View>
        <Text style={styles.title}>CLAUDIA</Text>
        <Text style={styles.subtitle}>Cybersecurity Intelligence Platform</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.brand}>LAPSMEDIA × CyberTIA</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  iconRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.cyan + '40',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: 8,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.cyan,
    marginTop: 8,
    letterSpacing: 2,
  },
  footer: {
    position: 'absolute',
    bottom: 48,
  },
  brand: {
    fontSize: 11,
    color: Colors.textMuted,
    letterSpacing: 1,
  },
});
