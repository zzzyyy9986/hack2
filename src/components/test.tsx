import {observer} from "mobx-react-lite";
import  {useStore} from "../store/store";

export const Test = observer( () =>  {
    const {games} = useStore()
    return (
        <h1>
            {games.dataAr.map(el => {
                return el.id
            })}
        </h1>
    )
})