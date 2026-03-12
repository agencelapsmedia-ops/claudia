import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { ScoreRing } from '@/components/ScoreRing';
import { MetricCard } from '@/components/MetricCard';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { dashboardMetrics, mockAudits, mockProjects } from '@/constants/mockData';
import { getScoreColor, getStatusLabel, getStatusColor, formatDate } from '@/utils/formatters';

export default function DashboardScreen() {
  const recentAudits = mockAudits.slice(0, 3);
  const activeProjects = mockProjects.filter((p) => p.status === 'in_progress');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Bonjour, Alexandre</Text>
            <Text style={styles.date}>Tableau de bord CyberTIA</Text>
          </View>
          <View style={styles.notifBadge}>
            <Ionicons name="notifications-outline" size={24} color={Colors.textPrimary} />
            <View style={styles.notifDot} />
          </View>
        </View>

        {/* Global Score */}
        <Card style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <ScoreRing score={dashboardMetrics.globalScore} size={110} label="Global" />
            <View style={styles.scoreInfo}>
              <Text style={styles.scoreTitle}>Score de sécurité</Text>
              <Text style={styles.scoreDesc}>
                Moyenne pondérée de vos {dashboardMetrics.activeClients} clients actifs
              </Text>
              <View style={styles.scoreTrend}>
                <Ionicons name="trending-up" size={16} color={Colors.success} />
                <Text style={styles.trendText}>+3 pts ce mois</Text>
              </View>
            </View>
          </View>
        </Card>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          <MetricCard
            title="Clients actifs"
            value={dashboardMetrics.activeClients}
            icon="people"
            color={Colors.electric}
          />
          <MetricCard
            title="Tickets ouverts"
            value={dashboardMetrics.openTickets}
            icon="alert-circle"
            color={Colors.warning}
            subtitle={`${dashboardMetrics.criticalTickets} critiques`}
          />
        </View>
        <View style={styles.metricsGrid}>
          <MetricCard
            title="Projets actifs"
            value={dashboardMetrics.activeProjects}
            icon="folder-open"
            color={Colors.cyan}
          />
          <MetricCard
            title="Licences"
            value={dashboardMetrics.licensesToRenew}
            icon="key"
            color={Colors.danger}
            subtitle="À renouveler"
          />
        </View>

        {/* Recent Audits */}
        <Text style={styles.sectionTitle}>Audits récents</Text>
        {recentAudits.map((audit) => (
          <Card key={audit.id} style={styles.listCard}>
            <View style={styles.listRow}>
              <View style={styles.listInfo}>
                <Text style={styles.listName}>{audit.clientName}</Text>
                <Text style={styles.listSub}>{formatDate(audit.startDate)}</Text>
              </View>
              <View style={styles.listRight}>
                {audit.score !== null && (
                  <Text style={[styles.listScore, { color: getScoreColor(audit.score) }]}>
                    {audit.score}/100
                  </Text>
                )}
                <Badge label={getStatusLabel(audit.status)} color={getStatusColor(audit.status)} />
              </View>
            </View>
          </Card>
        ))}

        {/* Active Projects */}
        <Text style={styles.sectionTitle}>Projets en cours</Text>
        {activeProjects.map((project) => (
          <Card key={project.id} style={styles.listCard}>
            <View style={styles.listRow}>
              <View style={styles.listInfo}>
                <Text style={styles.listName}>{project.title}</Text>
                <Text style={styles.listSub}>{project.clientName}</Text>
              </View>
              <Text style={styles.progressText}>{project.progress}%</Text>
            </View>
            <View style={styles.progressTrack}>
              <View
                style={[styles.progressFill, { width: `${project.progress}%` }]}
              />
            </View>
          </Card>
        ))}

        <View style={styles.bottomSpacer} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  date: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  notifBadge: {
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.danger,
  },
  scoreCard: {
    marginBottom: 16,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  scoreInfo: {
    flex: 1,
  },
  scoreTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  scoreDesc: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
    lineHeight: 18,
  },
  scoreTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  trendText: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: '600',
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginTop: 16,
    marginBottom: 12,
  },
  listCard: {
    marginBottom: 10,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listInfo: {
    flex: 1,
    marginRight: 12,
  },
  listName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  listSub: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  listRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  listScore: {
    fontSize: 16,
    fontWeight: '700',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.cyan,
  },
  progressTrack: {
    height: 4,
    backgroundColor: Colors.bgSecondary,
    borderRadius: 2,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    backgroundColor: Colors.cyan,
    borderRadius: 2,
  },
  bottomSpacer: {
    height: 24,
  },
});
