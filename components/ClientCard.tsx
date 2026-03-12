import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card } from './Card';
import { Badge } from './Badge';
import { Colors } from '@/constants/colors';
import { Client } from '@/types/client.types';
import { getScoreColor, getRiskColor, getStatusLabel } from '@/utils/formatters';

interface ClientCardProps {
  client: Client;
  onPress?: () => void;
}

export function ClientCard({ client, onPress }: ClientCardProps) {
  const scoreColor = getScoreColor(client.securityScore);
  const riskColor = getRiskColor(client.riskLevel);

  return (
    <Card onPress={onPress} style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <Text style={styles.name}>{client.name}</Text>
          <Text style={styles.industry}>{client.industry} · {client.employees} employés</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={[styles.score, { color: scoreColor }]}>{client.securityScore}</Text>
          <Text style={styles.scoreLabel}>/100</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Badge label={getStatusLabel(client.status)} color={Colors.success} />
        <View style={styles.risk}>
          <Ionicons name="shield-checkmark" size={14} color={riskColor} />
          <Text style={[styles.riskText, { color: riskColor }]}>
            Risque {client.riskLevel}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  info: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  industry: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  score: {
    fontSize: 28,
    fontWeight: '700',
  },
  scoreLabel: {
    fontSize: 12,
    color: Colors.textMuted,
    marginLeft: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  risk: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  riskText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
