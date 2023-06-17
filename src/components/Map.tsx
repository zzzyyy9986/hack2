import {useStore} from "../store/store";
import {PointTypes, PointValue} from "../store/classes/map/IMap";
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
            {/*{*/}
            {/*   new Array(40).fill("").map(row => {*/}
            {/*       return (*/}
            {/*           <div style={{display:'flex'}}>*/}
            {/*               {*/}
            {/*                   new Array(40).fill("").map(cell => {*/}
            {/*                       return <div key={mData.globalEntities.data[+row + cell].id}>*/}
            {/*                           {mData.globalEntities.data[+row + cell].type}*/}
            {/*                       </div>*/}
            {/*                   })*/}
            {/*               }*/}
            {/*           </div>*/}
            {/*       )*/}
            {/*   })*/}
            {/*}*/}
            {mData.globalMap.data.map((row,indexX) => {
              return ( <div key={indexX} style={{display:'flex'}}>{ row.map((el,indexY) => {
                  // return <h1>ff</h1>
                  //return <PointComp  dd={el} key={el.id} />
                  return <div>{el.value} </div>
              })
              }</div>)
            })}
        </div>
    )
})
interface IPointComp{
    key:any,
    dd:IPoint

}
const PointComp = observer(({dd}:IPointComp) => {
    return (
        // <div style={{display:"inline-block"}}>
            <div className={ getTypeName(dd.type)} style={{
                display:'flex',
                height:'10px',
                width:'10px',
                border:'1px solid black'
            }}>

            </div>
        // </div>
    )
})
const getTypeName = (type:PointTypes)=> {
    // return 'tree'
    switch (type){
        case PointTypes.boulevard:
            return 'type-boulevard';
        case PointTypes.road:
            return 'type-road';
        case PointTypes.tree:
            return 'type-tree'
    }
}
const getValueClass = (value:PointValue)=> {
    // return 'tree'
    switch (value){
        case PointValue.car:
            return 'value-car';
        case PointValue.human:
            return 'value-human';
        case PointValue.empty:
            return 'value-empty'
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