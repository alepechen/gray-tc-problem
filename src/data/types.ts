export interface Activity {
  id: string;
  technique: string;
  description: string;
  kind: string;
  modality: string;
  duration: number;
  default_duration: number;
  default_staff: string | null;
  default_location: string | null;
  default_time: string | null;
  category: string;
  tags: string[];
  color: string;
  overlap_allowed: boolean;
  characteristics: string[];
  cluster: Cluster["id"] | null;
}

export interface Appointment {
  id: string;
  pat_id: string;
  scheduled_time: string;
  duration: number;
  apt_status: string;
  technique: Activity["technique"];
  technique_label: Activity["description"];
  kind: string;
  location: Resource["name"];
  staff_booked: string | null;
  comments: string;
  time_constraint: string | null;
  last_notified_time: string;
  overlap_allowed: boolean;
  date_modified: string;
  date_when_booked: string;
  state: Record<string, string>;
}

export interface Cluster {
  id: number;
  activities: string[];
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
}

export interface OperatingHours {
  open_time: string;
  close_time: string;
}

export interface Resource {
  id: string;
  name: string;
  pretty_name: string;
  abbreviation: string;
  category: string;
  tags: string[];
  is_planning: boolean;
  is_treatment: boolean;
  is_consult: boolean;
  operating_hours: OperatingHours[];
  emergency_minutes: number;
}
