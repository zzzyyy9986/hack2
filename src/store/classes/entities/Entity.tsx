import {makeAutoObservable} from "mobx";
import {IEntity} from "./IEntity";
import {PointValue} from "../map/IMap";
import {globalMap} from "../map/Map";


export class Entities {
    data:{[id:string]:Entity} = {}
    constructor() {
        makeAutoObservable(this)
        this.init()
    }
    init(){
        this.data['asfds'] =
            new Entity({
                id:'asfds',
                x:1,
                y:1,
                width:5,
                height:5,
                type:PointValue.car,
                speed:1
            });
            this.data['sdfdfs'] = new Entity({
                id:'sdfdfs',
                x:8,
                y:8,
                width:6,
                height:6,
                type:PointValue.empty,
                speed:1
            })
    }
    change(key:string){
        // if(this.data[key].x - 1 >= globalMap.height) this.data[key].x = globalMap.height - this.data[key].height;
        // if(this.data[key].y - 1 >= globalMap.width) this.data[key].y = globalMap.width - this.data[key].width;
        this.clearPrevious(key)
        if(this.data[key].x + this.data[key].speed + this.data[key].height < globalMap.height)this.data[key].x  += this.data[key].speed
        // if(this.data[key].x - 1 >= globalMap.height) this.data[key].x = globalMap.height - this.data[key].height;
        // if(this.data[key].y - 1 >= globalMap.width) this.data[key].y = globalMap.width - this.data[key].width;

        this.printCurrent(key)

    }
    printCurrent(key:string){
        this.data[key] = new Entity(this.data[key]);
        for (let i = this.data[key].x;i < this.data[key].x + this.data[key].width;i++){
            for(let j=this.data[key].y;j < this.data[key].y + this.data[key].height;j++){
                // if(i >= globalMap.width ||  j >= globalMap.height ){
                console.log(i)

                globalMap.changePoint(i,j,PointValue.car)
                // }
                // else {
                //     console.log(globalMap.height)
                // }
            }
        }
    }
    clearPrevious(key:string){
        for (let i = this.data[key].x;i <= this.data[key].x + this.data[key].width;i++){
            for(let j=this.data[key].y;j <= this.data[key].y + this.data[key].height;j++){
                console.log(i)
                globalMap.changePoint(i,j,PointValue.empty)
            }
        }
    }
    copy(entity:Entity){
        let t =  {} as IEntity;
        t.id = entity.id
        t.type = entity.type;
        t.speed = entity.speed;
        t.height = entity.height;
        t.width = entity.width;
        t.x = entity.x;
        t.y = entity.y
        return t;
    }
}

export class Entity implements IEntity{
    public id:string;
    public x:number = 0;
    public y:number = 0;
    public width:number = 0;
    public height:number = 0;
    public type:PointValue  = PointValue.empty;
    public speed:number = 0;
    constructor(point:IEntity) {
        makeAutoObservable(this)
        this.id = point.id
        this.x = point.x
        this.y = point.y
        this.width = point.width
        this.height = point.height
        this.type = point.type;
        this.speed = point.speed
    }
}
export const globalEntities = new Entities()