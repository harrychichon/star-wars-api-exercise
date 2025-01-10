import { Planet, Person, Film, Starship, Vehicle, Species } from "./types";

const endpoints = {
  planet: "https://swapi.py4e.com/api/planets/",
  searchPlanet: "https://swapi.py4e.com/api/planets/?search=",
  person: "https://swapi.py4e.com/api/people/",
  film: "https://swapi.py4e.com/api/films/",
  starship: "https://swapi.py4e.com/api/starships/",
  vehicle: "https://swapi.py4e.com/api/vehicles/",
  species: "https://swapi.py4e.com/api/species/",
};

// ==============================FUNCTIONS==============================
export const getplanet = async (): Promise<Planet[]> => {
  const response = await fetch(endpoints.planet);
  const data: Planet[] = await response.json();
  return data;
};

export const getPlanetById = async (id: number): Promise<Planet> => {
  const response = await fetch(endpoints.planet + id);
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
};

export const oneFunctionToRuleThemAll = async (
  id: number,
  thing: string
): Promise<Planet | Person | Film | Starship | Vehicle | Species> => {
  if (thing === "planet") {
    const response = await fetch(endpoints.planet + id);
    const data: Planet = await response.json();
    return data;
  } else if (thing === "person") {
    const response = await fetch(endpoints.person + id);
    const data: Person = await response.json();
    return data;
  } else if (thing === "film") {
    const response = await fetch(endpoints.film + id);
    const data: Film = await response.json();
    return data;
  } else if (thing === "starship") {
    const response = await fetch(endpoints.starship + id);
    const data: Starship = await response.json();
    return data;
  } else if (thing === "vehicle") {
    const response = await fetch(endpoints.vehicle + id);
    const data: Vehicle = await response.json();
    return data;
  } else if (thing === "species") {
    const response = await fetch(endpoints.species + id);
    const data: Species = await response.json();
    return data;
  } else {
    throw new Error(
      "The category of your input is not valid. Please input one of the following: planet, person, film, starship, vehicle or species."
    );
  }
};

const endpointMap: { [key: string]: string } = {
  planet: endpoints.planet,
  person: endpoints.person,
  film: endpoints.film,
  starship: endpoints.starship,
  vehicle: endpoints.vehicle,
  species: endpoints.species,
};

export const oneFunctionToRuleThemAllRefactor = async (
  id: number,
  thing: string
): Promise<Planet | Person | Film | Starship | Vehicle | Species> => {
  const endpoint = endpointMap[thing];

  if (!endpoint) {
    throw new Error(
      "The category of your input is not valid. Please input one of the following: planet, person, film, starship, vehicle or species."
    );
  }

  const response = await fetch(endpoint + id);
  const data = await response.json();
  return data as Planet | Person | Film | Starship | Vehicle | Species;
};
