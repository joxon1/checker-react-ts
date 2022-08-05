import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Board {
  cells: Cell[][] = [];
  lostBlackFigures: Figure[] = [];
  lostWhiteFigures: Figure[] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); //qora
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); //oq
        }
      }
      this.cells.push(row);
    }
  }
}
