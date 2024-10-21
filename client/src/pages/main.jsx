import { useState } from "react"
import statBoardArray from '../components/statBoards'


export default function Main () {
  let [currentIndex, setCurrentIndex] = useState(0)
  const onBoardClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
    {/* MAKE A FLEX COL WITH TOP SCREEN AND THEN GRID BELOW */}
      <div className="min-h-screen w-full gap-4 flex flex-col text-center">
        <div className="bg-sky-400">
          {statBoardArray[currentIndex].full()}
        </div>
        <div className="grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-2">
          {statBoardArray.map((board, index) => {
            return (
              <div key={index} onClick={() => onBoardClick(index)} className="bg-sky-400 col-span-1 hover:cursor-pointer">{board.half()}</div>
            )
          })}
        </div>
      </div>
    </>
  )
}
