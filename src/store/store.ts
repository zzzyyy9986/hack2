import { createContext, useContext } from "react";
import { games } from "./classes/games/Games";
import {globalMap} from "./classes/map/Map";
import {globalEntities} from "./classes/entities/Entity";


const store = {
    games: games,
    globalMap:globalMap,
    globalEntities:globalEntities
    // rounds: rounds,
    // players: players,
    // settings: gameSettings,
    // playersOpinionGl: playersOpinion,
};

export const StoreContext = createContext(store);

export const useStore = () => {
    return useContext<typeof store>(StoreContext);
};

export default store;
