import React from 'react'

export const Button2 = ({txt,handleClick}) => {
  return (
    <button className="border-2 border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-100 w-50" onClick={handleClick}>{txt}</button>
  )
}
