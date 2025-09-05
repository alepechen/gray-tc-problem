export interface Activity {
  id: string;
  technique: string;
  description: string;
  kind: string;
  modality: string;
  duration: number;
  defaultDuration: number;
  defaultStaff: string | null;
  defaultLocation: string | null;
  defaultTime: string | null;
  category: string;
  tags: string[];
  color: string;
  overlapAllowed: boolean;
  characteristics: string[];
  cluster: Cluster["id"] | null;
}

export interface Appointment {
  id: string;
  patId: string;
  scheduledTime: string;
  duration: number;
  aptStatus: string;
  technique: Activity["technique"];
  techniqueLabel: Activity["description"];
  kind: string;
  location: Resource["name"];
  staffBooked: string | null;
  comments: string;
  timeConstraint: string | null;
  lastNotifiedTime: string;
  overlapAllowed: boolean;
  dateModified: string;
  dateWhenBooked: string;
  state: Record<string, string>;
}

export interface Cluster {
  id: number;
  activities: Activity["technique"][];
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface OperatingHours {
  openTime: string;
  closeTime: string;
}

export interface Resource {
  id: string;
  name: string;
  prettyName: string;
  abbreviation: string;
  category: string;
  tags: string[];
  isPlanning: boolean;
  isTreatment: boolean;
  isConsult: boolean;
  operatingHours: OperatingHours[];
  emergencyMinutes: number;
}
