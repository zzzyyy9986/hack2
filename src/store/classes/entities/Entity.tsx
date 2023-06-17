import {makeAutoObservable} from "mobx";
import {IEntity} from "./IEntity";
import {PointValue} from "../map/IMap";


export class Entities {
    data:Entity[] = []
    constructor() {
        makeAutoObservable(this)
        this.init()
    }
    init(){
        this.data.push(
            new Entity({
                id:'asfds',
                x:1,
                y:1,
                width:5,
                height:5,
                type:PointValue.car
            }),
            new Entity({
                id:'sdfdfs',
                x:8,
                y:8,
                width:6,
                height:6,
                type:PointValue.empty
            }),
        )
    }
}

export class Entity implements IEntity{
    public id:string;
    public x:number = 0;
    public y:number = 0;
    public width:number = 0;
    public height:number = 0;
    public type:PointValue  = PointValue.empty;
    constructor(point:IEntity) {
        makeAutoObservable(this)
        this.id = point.id
        this.x = point.x
        this.y = point.y
        this.width = point.width
        this.height = point.height
        this.type = point.type;
    }
}
export const globalEntities = new Entities()