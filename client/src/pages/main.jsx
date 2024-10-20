import { useState } from "react"

const statBoards = ['stat1', 'stat2', 'stat3', 'stat4', 'stat5', 'stat6', ]

export default function Main () {
  return (
    <>
    {/* MAKE A FLEX COL WITH TOP SCREEN AND THEN GRID BELOW */}
      <div className="min-h-screen w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="col-span-3 bg-sky-400">
          {statBoards[0]}
        </div>
        {statBoards.map(board => {
          return (
            <div className="col-span-1 bg-sky-400 w-full">{board}</div>
          )
        })}
      </div>
    </>
  )
}
