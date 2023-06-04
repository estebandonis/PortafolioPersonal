import React from 'react'
import PropTypes from 'prop-types'

import { styles, imagen, descrip, botones, titulo } from './Projects.module.css'

const Projects = ({ url, title, description, repo, oficial }) => {
  return (
    <div className={styles}>
      <div className={titulo}>{title}</div>
      <div className={imagen}>
        <img src={url} alt="" />
      </div>
      <div className={descrip}>
        <p>{description}</p>
      </div>
      <div className={botones}>
        <button
          type="button"
          onClick={() => {
            window.open(repo)
          }}
        >
          Repositorio
        </button>
        {oficial ? (
          <button
            type="button"
            onClick={() => {
              window.open(oficial)
            }}
          >
            Página
          </button>
        ) : null}
      </div>
    </div>
  )
}

Projects.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repo: PropTypes.string,
  oficial: PropTypes.string
}

export default Projects
