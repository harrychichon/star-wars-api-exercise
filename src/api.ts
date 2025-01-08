import { Planet, Person, Film, Starship, Vehicle, Species } from "./types";

const endpoints = {
  allPlanets: "https://swapi.py4e.com/api/planets/",
  searchPlanet: "https://swapi.py4e.com/api/planets/?search=",
  person: "https://swapi.py4e.com/api/people/",
  film: "https://swapi.py4e.com/api/films/",
  starship: "https://swapi.py4e.com/api/starships/",
  vehicle: "https://swapi.py4e.com/api/vehicles/",
  species: "https://swapi.py4e.com/api/species/",
};

// ==============================FUNCTIONS==============================
export const getAllPlanets = async (): Promise<Planet[]> => {
  const response = await fetch(endpoints.allPlanets);
  const data: Planet[] = await response.json();
  return data;
};

export const getPlanetById = async (id: number): Promise<Planet> => {
  const response = await fetch(endpoints.allPlanets + id);
  const data: Planet = await response.json();
  return data;
};

export const getPlanetsByName = async (
  searchWord: string
): Promise<Planet[]> => {
  const response = await fetch(endpoints.searchPlanet + searchWord);
  const data: Planet[] = await response.json();
  return data;
};

export const getPeopleById = async (id: number): Promise<Person> => {
  const response = await fetch(endpoints.person + id);
  const data: Person = await response.json();
  return data;
};

export const getFilmById = async (id: number): Promise<Film> => {
  const response = await fetch(endpoints.film + id);
  const data: Film = await response.json();
  return data;
};

export const getStarshipById = async (id: number): Promise<Starship> => {
  const response = await fetch(endpoints.starship + id);
  const data: Starship = await response.json();
  return data;
};

export const getVehicleById = async (id: number): Promise<Vehicle> => {
    const response = await fetch(endpoints.vehicle + id);
    const data: Vehicle = await response.json();
    return data;
};

export const getSpeciesById = async (id: number): Promise<Species> => {
    const response = await fetch(endpoints.species + id);
    const data: Species = await response.json();
    return data;
}
