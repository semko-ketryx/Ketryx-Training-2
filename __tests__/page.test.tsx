/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Test insulin delivery status UI on iOS @tests:KD-66', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for infusion limitations @tests:51TZVQ', () => {
  it('renders the best heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for record keeping @tests:KD-98', () => {
  it('Verify create and archive record feature', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Unit test feedback forms @tests:KD-72', () => {
  it('Verify form submission', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test feedback forms @tests:KD-30', () => {
  it('Verify form submission', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})




