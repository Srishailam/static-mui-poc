import React from 'react'

export const GiveProduct = () => {
  return (
    <div className="GiveProduct">
      {[1, 2, 3].map(eachItem => <div key={eachItem} className="EmptyGiveProduct"></div> )}
    </div>
  )
}
