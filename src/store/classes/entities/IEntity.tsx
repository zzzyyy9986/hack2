import {PointValue} from "../map/IMap";

export interface IEntity {
    id:string,
    x:number,
    y:number,
    height:number,
    width:number,
    type:PointValue
}