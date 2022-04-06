import React from 'react'



export const Header:React.FC=({children})=> {
  return (
    <header> 
      <div className="container">
      {children}
      </div>

    </header>
  )
}