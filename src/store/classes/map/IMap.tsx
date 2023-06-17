export interface IMap {
        data:  [{
            type:PointTypes,
            value: PointValue
        }[]]
}

let x = [
    [
        1,2,3
    ],
    [
        3,3,3
    ]
]
export enum PointTypes{
    road = 1,
    boulevard = 2,
    tree = 3
}
export enum PointValue {
    car = 1,
    human = 2,
    empty = 3
}