import React, { useState } from "react";
import { MoreHorizontal, Plus } from "react-feather";
import Card from "./Card";

import Constants from "./Constants";
function PriorityBoard(props) {
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          <MoreHorizontal />

          {Constants.priorityOptions[props.priority]}
          {<span className="number-of-task">{props.cards?.length || 0}</span>}
        </p>
        <span>
          <Plus size={20} />
          <MoreHorizontal />
        </span>
      </div>
      {props.cards.map((card) => (
        <Card key={card.id} ticket={card} />
      ))}
    </div>
  );
}

export default PriorityBoard;
