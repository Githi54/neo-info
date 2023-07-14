interface EstimatedDiametrMax {
  estimated_diameter_max: number;
}

interface EstimatedDiameter {
  kilometers: EstimatedDiametrMax;
}

interface MissDistance {
  kilometers: string;
}

interface Relative_velocity {
  kilometers_per_hour: string;
}

interface CloseApproach {
  miss_distance: MissDistance;
  relative_velocity: Relative_velocity;
}

interface CloseApproachObj {
  0: CloseApproach;
}

export interface NeowInfo {
  id: string;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachObj[];
}
