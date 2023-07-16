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

export interface NeowInfo {
  id: string;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproach[];
}

export interface NearEarthObjects {
    "2023-07-01": NeowInfo[];
    "2023-07-02": NeowInfo[];
    "2023-07-03": NeowInfo[];
    "2023-07-04": NeowInfo[];
    "2023-07-05": NeowInfo[];
    "2023-07-06": NeowInfo[];
    "2023-07-07": NeowInfo[];
    "2023-07-08": NeowInfo[];
  }
