import React from 'react'
import "./index.css"
import { BsBookHalf } from 'react-icons/bs'
import {GrPersonalComputer} from 'react-icons/gr'
import { MdAlarmOn } from 'react-icons/md'
import {BiCalendarCheck} from 'react-icons/bi'

const WhyChooseUs = () => {
  return (
    <>
    <div className='why-container'>
        <div>
            <div className='main-container'>
                <h1 className='heading'>Why Choose Us?</h1>
                <hr className='hr'/>
            </div>
            <div className='why-cards'>
                <div className='card'>
                    <img src='https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159505/ca_concept_nqnbru.png' alt='expertlogo' className='card-images'/>
                    <h1 className='card-heading'>Expert Faculty</h1>
                    <p className='card-para'>Our Faculty are subject matter expertise with practical
            experience.They belive in StudentFirst principle</p>
                </div>
                <div className='card'>
                    <img src='https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159513/ca_top_faculties_gghzdi.png' alt='expertlogo' className='card-images'/>
                    <h1 className='card-heading-1'>Complete Success Package</h1>
                    <p className='card-para'>Leading Exam Prep Destination with Video classes, Live sessions, Doubt
            resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
            Webinars.</p>
                </div>
                <div className='card'>
                    <img src='https://res.cloudinary.com/dvpzl3ogh/image/upload/v1672159522/ca_unlimited_views_ahnykz.png' alt='expertlogo' className='card-images'/>
                    <h1 className='card-heading'>Placements</h1>
                    <p className='card-para'>Resume building workshops, mock interviews and placement drives will
            help you impress the top employers and get the dream job.</p>
                </div>
            </div>
        </div>
    </div>
    <div className='level-container'>
        <div className='level-card'>
            <h1 className='level-heading'>Levels</h1>
            <p className='level-para'><BsBookHalf size={20} /> Three (13 papers)</p>
        </div>
        <div className='level-card'>
            <h1 className='level-heading'>Duration</h1>
            <p className='level-para'><MdAlarmOn size={20} /> 6-30 months</p>
        </div>
        <div className='level-card'>
            <h1 className='level-heading'>Exams</h1>
            <p className='level-para'><GrPersonalComputer size={20} /> quarterly(Online)</p>
        </div>
        <div className='level-card'>
            <h1 className='level-heading'>Exemptions</h1>
            <p className='level-para'><BiCalendarCheck size={20} /> Upto 9 papers</p>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs