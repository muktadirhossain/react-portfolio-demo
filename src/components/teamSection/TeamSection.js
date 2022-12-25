import React from 'react'
import TeamCard from './TeamCard'

function TeamSection() {
  return (
    <div className='container'>
      <h2 className='text-center mb-5 pb-5 text-heading'>Meet Our Amazing Team</h2>
      <div className='row mb-5'>
        <TeamCard name='Isharak Ahmed' role='Grapics Designer'/>
        <TeamCard name='Ayan Upadhaya' role='Back-End web developer'/>
        <TeamCard name='Muktadir Hossain' role='Front-End Developer'/>
        <TeamCard name='Muktadir Hossain' role='Front-End Developer'/>
        <TeamCard name='Muktadir Hossain' role='Front-End Developer'/>
        <TeamCard name='Muktadir Hossain' role='Front-End Developer'/>
      </div>
    </div>
  ) 
}

export default TeamSection
