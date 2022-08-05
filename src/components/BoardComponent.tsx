import React, { FC } from "react";
import { Board } from "../models/Board";
import CellComponent from "./CellComponent";
interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}
const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
  return (
    <div>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent key={cell.id} cell={cell} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
