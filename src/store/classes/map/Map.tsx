import {makeAutoObservable} from "mobx";
import { PointValue} from "./IMap";
import {uuidv4} from "../../../utils";

export class Map{
    public data:Point[][] = [[]]
    public width:number = 100
    public height:number = 100
    constructor() {
        makeAutoObservable(this)
        this.init()
    }
    get d(){
        return this.data
    }
    init(){
     this.data = [[]]
        for (let i = 0;i < this.height;i++){
            this.data[i] = []
            for(let j= 0;j < this.width;j++){
                this.data[i][j] = new Point( {
                    id:uuidv4(),
                    value:PointValue.empty
                })
            }
        }
        for (let i = 0;i < 80;i++){
            for (let j = 20;j<40;j++){
                this.data[i][j] = new Point( {
                    id:uuidv4(),
                    value:PointValue.road
                })
            }
        }
    }
    changePoint(x:number,y:number,value:PointValue){
        this.data[x][y] = new Point({...this.data[x][y],value})
    }
}
export class Point implements IPoint{
    id:string = '';
    value = PointValue.empty;
    constructor(p:IPoint) {
        makeAutoObservable(this)
        this.id = p.id
        this.value = p.value
    }
}
export interface IPoint {id:string;  value: PointValue}
export const globalMap = new Map()
