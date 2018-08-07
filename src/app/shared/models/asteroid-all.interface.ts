// generated with http://json2ts.com/
// this is not how you would do it, underscores are not ok.
// But we don't have influence on the api so for deserializing this is the quickest way.

export interface Kilometers {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Meters {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Miles {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface Feet {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface EstimatedDiameter {
    kilometers: Kilometers;
    meters: Meters;
    miles: Miles;
    feet: Feet;
}

export interface RelativeVelocity {
    kilometers_per_second: string;
    kilometers_per_hour: string;
    miles_per_hour: string;
}

export interface MissDistance {
    astronomical: string;
    lunar: string;
    kilometers: string;
    miles: string;
}

export interface CloseApproachData {
    close_approach_date: string;
    epoch_date_close_approach: any;
    relative_velocity: RelativeVelocity;
    miss_distance: MissDistance;
    orbiting_body: string;
}

export interface OrbitalData {
    orbit_id: string;
    orbit_determination_date: string;
    orbit_uncertainty: string;
    minimum_orbit_intersection: string;
    jupiter_tisserand_invariant: string;
    epoch_osculation: string;
    eccentricity: string;
    semi_major_axis: string;
    inclination: string;
    ascending_node_longitude: string;
    orbital_period: string;
    perihelion_distance: string;
    perihelion_argument: string;
    aphelion_distance: string;
    perihelion_time: string;
    mean_anomaly: string;
    mean_motion: string;
    equinox: string;
}

export interface Asteroid {
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimatedDiameter;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
    orbital_data: OrbitalData;
}

export interface NearEarthObjectsForDate {
    date: string;
    asteroids: Asteroid[];
}

export interface AsteroidsRoot {
    element_count: number;
    near_earth_objects: NearEarthObjectsForDate[];
}
