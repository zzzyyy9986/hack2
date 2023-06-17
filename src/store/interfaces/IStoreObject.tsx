export interface IStoreObject<T> {
    init: (data: { [id: string]: T }) => void;
    // add(row:T)
}
