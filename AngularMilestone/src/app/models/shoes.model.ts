import { Material } from './materials.model';

export interface Shoe {
    shoeId: number,
    name: string,
    color: string,
    size: string,
    price: string,
    materials: Material[]
}
