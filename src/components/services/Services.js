import React from 'react'
import './Services.css'
import ServicesCard from './ServicesCard/ServicesCard'
function Services() {
  return (
    <div className='services container'>
      <h2 className='text-center pb-3'> OUR SERVICES </h2>
      <div className='row d-flex'>
      <ServicesCard heading='Maintenance' /> 
      <ServicesCard heading='SM Barnding' /> 
      <ServicesCard heading='Maintenance' /> 
      <ServicesCard heading='Maintenance' /> 
      <ServicesCard heading='Maintenance' /> 
      <ServicesCard heading='Maintenance' /> 
      </div>
    </div>
  )
}

export default Services
