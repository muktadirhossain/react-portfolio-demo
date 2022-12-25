import React from 'react'
import img01 from '../../data/teamMember01.jpg'
function TeamCard({name,role}) {
  return (
    <div className='col-md-4 col-sm-12 mb-5'>
        <div className="card shadow" style={{width: '22rem'}}>
            <img src={img01} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-danger">{name}</h5>
                <p className="card-text text-success">{role}</p>
                <a className='btn btn-sm btn-danger'>Know More...</a>
            </div>
        </div>
    </div>

  )
}

export default TeamCard
