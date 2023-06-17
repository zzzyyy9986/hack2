import {makeAutoObservable} from "mobx";
import {PointTypes, PointValue} from "./IMap";
import {uuidv4} from "../../../utils";

export class Map{
    public data:IPoint[][] = [[]]
    constructor() {
        makeAutoObservable(this)
        this.init()
    }
    init(){
     this.data = [[]]
        for (let i = 0;i<40;i++){
            this.data[i] = []
            for(let j=0;j<40;j++){
                this.data[i][j] =   {
                    id:uuidv4(),
                    type:PointTypes.tree,
                    value:PointValue.car
                }
            }
        }
    }
}
export interface IPoint {id:string; type: PointTypes, value: PointValue}
export const globalMap = new Map()
