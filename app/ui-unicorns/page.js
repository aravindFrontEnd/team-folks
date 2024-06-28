'use client'
import React from 'react';
import Image from 'next/image';
import teamMembers from './data';

const Team = () => {
  return (
    <section className='cardTop'>
      {teamMembers.map(member => (
        <div className="cardgp" key={member.id}>
    <div className="circlegp"></div>
    <div className="circlegp"></div>
    <div className="card-innergp">
      <div className="flip-card">
  <div className="flip-card-inner">
          <div className="flip-card-front">
          <h2 className='text-3xl xs:text-2xl text-white'>{member.characteristic}</h2>
          <Image
            src={member.photo}
            alt={`${member.name}-image`}
            width={150}
            height={150}
            className='Image'
          />
          </div>
          <div className="flip-card-back">
          <h2 className='text-4xl text-white'>{member.name}</h2>
          <p className='mt-10'>{member.description}</p>
          </div>
        </div>
        </div> 
    </div>
      </div>
      ))}
    </section>
  );
}

export default Team;

