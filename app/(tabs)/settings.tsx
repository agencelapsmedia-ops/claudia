import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/colors';
import { Card } from '@/components/Card';

interface SettingsItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  color?: string;
  onPress?: () => void;
}

function SettingsItem({ icon, label, value, color = Colors.textSecondary, onPress }: SettingsItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.settingsItem}>
      <Ionicons name={icon} size={20} color={color} />
      <Text style={styles.settingsLabel}>{label}</Text>
      <View style={styles.settingsRight}>
        {value && <Text style={styles.settingsValue}>{value}</Text>}
        <Ionicons name="chevron-forward" size={16} color={Colors.textMuted} />
      </View>
    </Pressable>
  );
}

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Réglages</Text>

        {/* Profile */}
        <Card style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AD</Text>
          </View>
          <View>
            <Text style={styles.profileName}>Alexandre Dupont</Text>
            <Text style={styles.profileEmail}>alex@cybertia.ca</Text>
            <Text style={styles.profileRole}>Administrateur</Text>
          </View>
        </Card>

        {/* General */}
        <Text style={styles.sectionTitle}>Général</Text>
        <Card style={styles.sectionCard}>
          <SettingsItem icon="person-outline" label="Profil" />
          <SettingsItem icon="notifications-outline" label="Notifications" value="Activées" />
          <SettingsItem icon="moon-outline" label="Thème" value="Sombre" />
          <SettingsItem icon="language-outline" label="Langue" value="Français" />
        </Card>

        {/* Security */}
        <Text style={styles.sectionTitle}>Sécurité</Text>
        <Card style={styles.sectionCard}>
          <SettingsItem icon="lock-closed-outline" label="Mot de passe" />
          <SettingsItem icon="finger-print-outline" label="Biométrie" value="Activée" />
          <SettingsItem icon="shield-checkmark-outline" label="MFA" value="Activé" color={Colors.success} />
        </Card>

        {/* About */}
        <Text style={styles.sectionTitle}>À propos</Text>
        <Card style={styles.sectionCard}>
          <SettingsItem icon="information-circle-outline" label="Version" value="1.0.0" />
          <SettingsItem icon="document-text-outline" label="Conditions d'utilisation" />
          <SettingsItem icon="shield-outline" label="Politique de confidentialité" />
        </Card>

        {/* Logout */}
        <Pressable
          onPress={() => router.replace('/(auth)/login')}
          style={styles.logoutButton}
        >
          <Ionicons name="log-out-outline" size={20} color={Colors.danger} />
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </Pressable>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textPrimary,
    paddingTop: 16,
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.electric,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  profileEmail: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  profileRole: {
    fontSize: 11,
    color: Colors.cyan,
    marginTop: 2,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionCard: {
    marginBottom: 24,
    padding: 0,
    overflow: 'hidden',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  settingsLabel: {
    flex: 1,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  settingsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  settingsValue: {
    fontSize: 13,
    color: Colors.textMuted,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.danger + '40',
    backgroundColor: Colors.danger + '10',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.danger,
  },
});
