export type Planet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type Person = {
  birth_year: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
};

export type Film = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export type Starship = {
  mglt: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: Array<string>;
  pilots: Array<string>;
  starship_class: string;
  url: string;
};

export type Vehicle = {
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: Array<string>;
  films: Array<string>;
  url: string;
  vehicle_class: string;
};

export type Species = {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<string>;
  films: Array<string>;
  skin_colors: string;
  url: string;
};

export type Endpoint = {
  api: string;
  planet: string;
  person: string;
  film: string;
  starship: string;
  vehicle: string;
  species: string;
};