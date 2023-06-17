import { makeAutoObservable } from "mobx";
import { IGame } from "./IGame";
import { IStoreObject } from "../../interfaces/IStoreObject";

interface iGames {
    id: IGame;
}

export class Games implements IStoreObject<IGame> {
    public data: {
        [id: string]: Game;
    } = {
    };
    constructor() {
        makeAutoObservable(this);
        this.add = this.add.bind(this);
        this.init({
            'fff':{
                id:'ffff',
                title:'gggg'
            }
        })
    }
    add(game: IGame) {
        console.log(game);
        if (this.data[game.id] === undefined) {
            this.data[game.id] = new Game(game);
        } else {
            this.data[game.id].all = game;
        }
    }
    get dataAr(): IGame[] {
        return Object.keys(this.data).map((key) => this.data[key]) ?? [];
    }
    findById(id: string) {
        return this.data[id];
    }
    init(tempD:{[id: string]: IGame}) {
        Object.keys(tempD).forEach((key) => {
            this.add(tempD[key]);
        });
    }
    increaseNumberOfRoundsById(id: string) {
        this.data[id].increaseNumberOfRounds();
    }
    setRoundCounter() {}
    // increaseNumberOfRounds(id:string){
    //     this.data[id].
    // }
}

export class Game {

    set numberOfRounds(value: number) {
        this._numberOfRounds = value;
    }
    public id: string;
    public title: string;
    private _numberOfRounds: number = 0;

    constructor(game: IGame) {
        this.id = game.id;
        this.title = game.title;
        makeAutoObservable(this);
    }
    set all(game: IGame) {
        this.id = game.id;
        this.title = game.title;
    }
    increaseNumberOfRounds() {
        this._numberOfRounds++;
    }
}

// const games = new Games();
export const games = new Games();
