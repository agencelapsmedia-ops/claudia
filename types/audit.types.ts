export interface Audit {
  id: string;
  clientId: string;
  clientName: string;
  type: 'full' | 'quick' | 'compliance';
  status: 'pending' | 'in_progress' | 'completed';
  score: number | null;
  startDate: string;
  completedDate: string | null;
  findings: Finding[];
}

export interface Finding {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low' | 'info';
  title: string;
  description: string;
  status: 'open' | 'resolved' | 'accepted';
}
