import React from 'react'
import PropTypes from 'prop-types'

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

Gusto.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string
}

export default Gusto
