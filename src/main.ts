import './style.css'
import {
  getPlanetById,
  getPlanetsByName,
  getPeopleById,
  getFilmById,
  getStarshipById,
  getVehicleById,
  getSpeciesById,
  oneFunctionToRuleThemAll,
  oneFunctionToRuleThemAllRefactor,
} from "./api";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Star Wars stuff</h1>
  </div>
`;

console.log(await getPlanetById(1));

console.log(await getPlanetsByName("oo"));

console.log(await getPeopleById(2));

console.log(await getFilmById(5));

console.log(await getStarshipById(10));

console.log(await getVehicleById(4));

console.log(await getSpeciesById(18));

console.log(await oneFunctionToRuleThemAll(4, "film"));

console.log(await oneFunctionToRuleThemAllRefactor(4, "film"));