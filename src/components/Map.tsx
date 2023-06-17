import {useStore} from "../store/store";
import { PointValue} from "../store/classes/map/IMap";
import {observer} from "mobx-react-lite";
import {IPoint} from "../store/classes/map/Map";
import {Entity} from "../store/classes/entities/Entity";
import {useEffect} from "react";

const cycle = (entities:Entity[],MapAr:IPoint[][]) => {
    console.log('работает')
    for (let i=0;i<entities.length;i++){
        console.log('работает22')
        // moveEntity(entities[i],1)
        drawEntity(entities[i],MapAr)
    }
}

export const Map = observer(() => {
    const mData = useStore()

    useEffect(() => {
        // if(mData.globalEntities.data.length) {
        //     cycle(mData.globalEntities.data, mData.globalMap.data)
        // }
        // cycle(mData.globalEntities.data, mData.globalMap.data)
        // cycle(mData.globalEntities.data,mData.globalMap.data)
        // cycle(mData.globalEntities.data,mData.globalMap.data)
        // cycle(mData.globalEntities.data,mData.globalMap.data)
    },[mData.globalEntities.data.length])


    return (
        <div>
            <button type='button' onClick={(e)=>{
                mData.globalEntities.change('asfds')
            }}>change</button>
            {mData.globalMap.d.map((row,indexX) => {
                return ( <div key={indexX} style={{display:'flex'}}>{ row.map((el,indexY) => {
                    // return <h1>ff</h1>
                    return <PointComp  p={el} key={el.id} />
                })
                }</div>)
            })}
        </div>
    )
})
interface IPointComp{
    key:any,
    p:IPoint,

}
const PointComp = observer(({p}:IPointComp) => {
    return (
        // <div style={{display:"inline-block"}}>
            <div className={ getValueClass(p.value)} style={{
                display:'flex',
                height:'5px',
                width:'5px',
                border:'1px solid black'
            }}>
                {p.value}
            </div>
        // </div>
    )
})
const getValueClass = (value:PointValue)=> {
    // return 'tree'
    switch (value){
        case PointValue.car:
            return 'value-car';
        case PointValue.human:
            return 'value-human';
        case PointValue.empty:
            return 'value-empty'
        case PointValue.road:
            return 'value-road'
    }
}

const moveEntity = (entity:Entity,step:number) => {
    entity.x = entity.x + step;
}

const drawEntity = (entity:Entity,MapAr:IPoint[][]) => {
    console.log('entity',entity)
    for (let i = entity.x;i<entity.width;i++){
        for (let j= entity.y;j<entity.height;j++){
            MapAr[i][j].value = entity.type
        }
    }
}