import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { ProgressBar } from '@/components/ProgressBar';
import { mockProjects } from '@/constants/mockData';
import { getStatusLabel, getStatusColor, formatDate } from '@/utils/formatters';

function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'urgent': return Colors.danger;
    case 'high': return '#FF6B35';
    case 'medium': return Colors.warning;
    case 'low': return Colors.success;
    default: return Colors.textSecondary;
  }
}

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Projets</Text>
        <Text style={styles.subtitle}>{mockProjects.length} projets</Text>

        {mockProjects.map((project) => (
          <Card key={project.id} style={styles.card}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.clientName}>{project.clientName}</Text>
              </View>
              <Badge label={getStatusLabel(project.status)} color={getStatusColor(project.status)} />
            </View>

            <View style={styles.meta}>
              <Badge label={project.priority.toUpperCase()} color={getPriorityColor(project.priority)} />
              <Text style={styles.assignee}>{project.assignee}</Text>
            </View>

            <View style={styles.progressSection}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Progression</Text>
                <Text style={styles.progressValue}>{project.progress}%</Text>
              </View>
              <ProgressBar progress={project.progress} color={getStatusColor(project.status)} />
            </View>

            <View style={styles.dates}>
              <Text style={styles.dateText}>Début: {formatDate(project.startDate)}</Text>
              <Text style={styles.dateText}>Échéance: {formatDate(project.dueDate)}</Text>
            </View>
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
    marginBottom: 10,
  },
  headerLeft: {
    flex: 1,
    marginRight: 12,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  clientName: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  assignee: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  progressSection: {
    marginBottom: 12,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  progressValue: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.cyan,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 11,
    color: Colors.textMuted,
  },
});
