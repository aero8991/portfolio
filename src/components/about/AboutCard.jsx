import React from 'react'

const AboutCard = ({icon, largeText, smallText}) => {
  return (
    <article className="about__card">
        {icon}
       <h5>{largeText}</h5> 
       <small>{smallText}</small>
    </article>
  )
}

export default AboutCard