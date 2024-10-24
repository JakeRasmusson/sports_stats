import { useState } from "react"
import statBoardArray from '../components/StatBoards'


export default function Home () {
  let [currentIndex, setCurrentIndex] = useState(0)
  const onBoardClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <>
    {/* MAKE A FLEX COL WITH TOP SCREEN AND THEN GRID BELOW */}
      <div className="w-full gap-4 flex flex-col text-center mb-auto">
        <div className="p-4 bg-green-900 border-2 border-white">
          {statBoardArray[currentIndex].full()}
        </div>
        <div className="grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-2">
          {statBoardArray.map((board, index) => {
            return (
              <div key={index} onClick={() => onBoardClick(index)} className="p-4 bg-green-900 border-2 border-white col-span-1 hover:cursor-pointer">{board.half()}</div>
            )
          })}
        </div>
      </div>
    </>
  )
}
