import React from 'react'
import { render, screen } from '@testing-library/react'

import Gusto from './Gusto.jsx'

describe('Gusto component', () => {
  it('Renders correctly', () => {
    render(<Gusto />)

    screen.debug()
  })
})
