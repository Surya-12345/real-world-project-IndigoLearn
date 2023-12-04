import React from 'react'
import "./index.css"
import ModalDetails from '../Modal'

const KickOff = () => {
  return (
    <>
    <div className='kick-container'>
        <div className='kick-heading-container'>
            <h1 className='kick-heading'>Kick off your ACCA Perp journey with IndigoLearn</h1>
            <p className='kick-para'>Sign-in and get instant acccess to our FREE Courses</p>
            <button className='kick-btn'>SILVER LEARNING PARTNER <br /> ACCA</button>
        </div>
        <div>
            <ModalDetails />
        </div>
    </div>
    </>
  )
}

export default KickOff