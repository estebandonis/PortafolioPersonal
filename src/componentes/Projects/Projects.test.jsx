import React from 'react'
import { render, screen } from '@testing-library/react'

import Projects from './Projects.jsx'

describe('Projects component', () => {
  it('Renders correctly', () => {
    render(<Projects />)

    screen.debug()
  })
})
