import { Colors } from '@/constants/colors';

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getScoreColor(score: number): string {
  if (score >= 80) return Colors.success;
  if (score >= 60) return Colors.warning;
  return Colors.danger;
}

export function getRiskColor(risk: string): string {
  switch (risk) {
    case 'critical': return Colors.danger;
    case 'high': return '#FF6B35';
    case 'medium': return Colors.warning;
    case 'low': return Colors.success;
    default: return Colors.textSecondary;
  }
}

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    active: 'Actif',
    inactive: 'Inactif',
    onboarding: 'Intégration',
    pending: 'En attente',
    in_progress: 'En cours',
    completed: 'Complété',
    planned: 'Planifié',
    on_hold: 'En pause',
    open: 'Ouvert',
    resolved: 'Résolu',
    accepted: 'Accepté',
  };
  return labels[status] || status;
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'active':
    case 'completed':
    case 'resolved':
      return Colors.success;
    case 'in_progress':
      return Colors.cyan;
    case 'pending':
    case 'planned':
    case 'on_hold':
      return Colors.warning;
    case 'inactive':
    case 'open':
      return Colors.danger;
    default:
      return Colors.textSecondary;
  }
}
