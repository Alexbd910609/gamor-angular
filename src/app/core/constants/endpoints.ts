import {environment} from "../../../environment/environment.dev";

export const getGamesEndpoint: string = environment.apiUrl + '/games';
export const gePlayersEndpoint: string = environment.apiUrl + '/players';
