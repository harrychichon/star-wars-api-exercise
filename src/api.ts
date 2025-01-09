import {
  Planet,
  Person,
  Film,
  Starship,
  Vehicle,
  Species,
  Endpoint,
} from "./types";

const endpoints: Endpoint = {
  api: "https://swapi.py4e.com/api/",
  planet: "https://swapi.py4e.com/api/planets/",
  person: "https://swapi.py4e.com/api/people/",
  film: "https://swapi.py4e.com/api/films/",
  starship: "https://swapi.py4e.com/api/starships/",
  vehicle: "https://swapi.py4e.com/api/vehicles/",
  species: "https://swapi.py4e.com/api/species/",
};

const search: string = "?search=";

// ==============================FUNCTIONS==============================

export const getPlanetById = async (id: number): Promise<Planet> => {
  const response = await fetch(endpoints.planet + id);
  const data: Planet = await response.json();
  return data;
};

export const getPlanetsByName = async (
  searchWord: string
): Promise<Planet[]> => {
  const response = await fetch(endpoints.planet + search + searchWord);
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
};

export const oneFunctionToRuleThemAll = async (
  type: keyof Endpoint,
  id: number
): Promise<unknown> => {
  const response = await fetch(endpoints.api + type + "/" + id);
  const data = await response.json();
  return data;
};
