import { Material } from './materials.model';
export interface ShoeInterface {
  name: string,
  color: string,
  size: string,
  price: string,
  materials: Material[]
}
