import React from 'react'

import { gusto, imagen, par } from './Gusto.module.css'

const Gusto = ({ url, title, paragraph }) => {
  return (
    <div className={gusto}>
      <div className={imagen}>
        <img src={url} alt="" />
      </div>
      <div>{title}</div>
      <div className={par}>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}

export default Gusto
