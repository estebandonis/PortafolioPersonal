import React from 'react'

import { styles, imagen, descrip, botones } from './Projects.module.css'

const Projects = ({ url, title, description, repo, oficial }) => {
  return (
    <div className={styles}>
      <div>{title}</div>
      <div className={imagen}>
        <img src={url} alt="" />
      </div>
      <div className={descrip}>
        <p>{description}</p>
      </div>
      <div className={botones}>
        <button type="button" onClick={() => {window.open(repo)}}>Repositorio</button>
        {
          oficial ? <button type="button" onClick={() => {window.open(oficial)}}>Página</button> : null
        }
      </div>
    </div>
  )
}

export default Projects
