import React, { useState } from 'react';

const Grid = ({ rows, cols }) => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [selectedBoxes, setSelectedBoxes] = useState([])

    const handleMouseDown = (boxNumber)=>{
        setIsMouseDown(true)
        setSelectedBoxes([boxNumber])
    }

    const handleMouseUp = () =>{
        setIsMouseDown(false)
    }

    const handleMouseEnter = (boxNumber) =>{
        if(isMouseDown){
            const start = selectedBoxes[0]
            const end = boxNumber

            const startRow = Math.floor((start-1)/cols)
            const startCol = (start-1)%cols
            const endRow = Math.floor((end-1)/cols)
            const endCol = (end-1)%cols

            const minRow = Math.min(startRow, endRow)
            const minCol = Math.min(startCol, endCol)
            const maxRow = Math.max(startRow, endRow)
            const maxCol = Math.max(startCol, endCol)

            let selected = []
            for(let row = minRow; row <= maxRow; row ++){
                for(let col = minCol; col <= maxCol; col++){
                    selected.push(row * cols + col + 1)
                }
            }
            setSelectedBoxes(selected)
        }   
    }
  return (
    <div className="flex justify-center">
      <div 
      className="grid grid-cols-10 w-[90vw] border border-black"
      onMouseUp={handleMouseUp}>
        {[...Array(rows * cols).keys()].map((_, i) => (
          <div 
          className={`border select-none border-black flex items-center justify-center h-16 bg-slate-100 ${selectedBoxes.includes(i + 1) ? "bg-fuchsia-200" : ''}`}
          key={i}
          onMouseDown={()=>handleMouseDown(i+1)}
          onMouseEnter={()=>handleMouseEnter(i+1)}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
