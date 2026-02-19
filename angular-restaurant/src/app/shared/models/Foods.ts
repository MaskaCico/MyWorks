export class Foods {
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favourite: boolean = false;
  stars: number = 0;
  imageURL!: string;
  origins!: string[];
  cookTime!: string;
}
