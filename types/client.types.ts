export interface Client {
  id: string;
  name: string;
  industry: string;
  employees: number;
  securityScore: number;
  status: 'active' | 'inactive' | 'onboarding';
  contactName: string;
  contactEmail: string;
  lastAuditDate: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}
