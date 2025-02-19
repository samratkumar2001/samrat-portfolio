import React from 'react'
import '../Css/Card.css'

const Card = (prop) => {
  return (
    <>
    <div className='flip-card-container'>
        <div className='flip-card'>
            <div className='front'>
                Front Side
            </div>
            <div className='back'>
                Back Side
            </div>
        </div>
    </div>
    </>
  )
}

export default Card