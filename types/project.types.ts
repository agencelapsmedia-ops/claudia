export interface Project {
  id: string;
  clientId: string;
  clientName: string;
  title: string;
  status: 'planned' | 'in_progress' | 'completed' | 'on_hold';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  startDate: string;
  dueDate: string;
  assignee: string;
}
