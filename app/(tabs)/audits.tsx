import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { mockAudits } from '@/constants/mockData';
import { getScoreColor, getStatusLabel, getStatusColor, getRiskColor, formatDate } from '@/utils/formatters';

export default function AuditsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Audits</Text>
        <Text style={styles.subtitle}>{mockAudits.length} audits au total</Text>

        {mockAudits.map((audit) => (
          <Card key={audit.id} style={styles.card}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.clientName}>{audit.clientName}</Text>
                <Text style={styles.auditType}>
                  {audit.type === 'full' ? 'Audit complet' : audit.type === 'compliance' ? 'Conformité' : 'Rapide'}
                </Text>
              </View>
              <Badge label={getStatusLabel(audit.status)} color={getStatusColor(audit.status)} />
            </View>

            <View style={styles.details}>
              <View style={styles.detailRow}>
                <Ionicons name="calendar-outline" size={14} color={Colors.textMuted} />
                <Text style={styles.detailText}>
                  {formatDate(audit.startDate)}
                  {audit.completedDate ? ` → ${formatDate(audit.completedDate)}` : ''}
                </Text>
              </View>
              {audit.score !== null && (
                <View style={styles.detailRow}>
                  <Ionicons name="shield-checkmark-outline" size={14} color={getScoreColor(audit.score)} />
                  <Text style={[styles.detailText, { color: getScoreColor(audit.score), fontWeight: '700' }]}>
                    Score: {audit.score}/100
                  </Text>
                </View>
              )}
            </View>

            {audit.findings.length > 0 && (
              <View style={styles.findings}>
                <Text style={styles.findingsTitle}>
                  {audit.findings.length} constatation{audit.findings.length > 1 ? 's' : ''}
                </Text>
                {audit.findings.map((finding) => (
                  <View key={finding.id} style={styles.findingRow}>
                    <View style={[styles.severityDot, { backgroundColor: getRiskColor(finding.severity) }]} />
                    <Text style={styles.findingText} numberOfLines={1}>
                      {finding.title}
                    </Text>
                    <Badge label={getStatusLabel(finding.status)} color={getStatusColor(finding.status)} />
                  </View>
                ))}
              </View>
            )}
          </Card>
        ))}

        <View style={{ height: 24 }} />
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
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
    marginBottom: 20,
  },
  card: {
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  headerLeft: {
    flex: 1,
    marginRight: 12,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  auditType: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  details: {
    gap: 6,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  findings: {
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 12,
  },
  findingsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 8,
  },
  findingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  severityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  findingText: {
    flex: 1,
    fontSize: 13,
    color: Colors.textPrimary,
  },
});
