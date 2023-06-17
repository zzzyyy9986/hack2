export interface IMap {
        data:  [{
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
export enum PointValue {
    car = 1,
    human = 2,
    empty = 3,
    tree = 4,
    road = 5
}