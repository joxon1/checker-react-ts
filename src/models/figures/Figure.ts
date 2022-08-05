import { Cell } from "../Cell";
// import logo from "../../assets/black-queen.png"
import { Colors } from "../Colors";

export enum FigureNames {
  PAWN = "Пешка",
  QUEEN = "Королева",
  FIGURE = "Фигура",
}

export class Figure {
  color: Colors;
  // logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    // this.logo = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
}
