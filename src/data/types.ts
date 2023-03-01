interface ChipStructure {
  id: number;
  productName: string;
  price: number;
  image: string;
  isAvailable: boolean;
}

export type Chips = ChipStructure[];
export default ChipStructure;
