import React from 'react';
const Board = (props) => {
    const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const element = document.getElementById(card_id);
        element.style.display = 'block';

        e.target.appendChild(element);
    }
    const moveOff = e =>{
        e.preventDefault();
    }
  return (
    <div id={props.id} 
         onDrop={drop}
         onDragOver={moveOff}
         className={props.className}>
      {props.children}
    </div>
  );
}
export default Board;