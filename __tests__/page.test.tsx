/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Test insulin dose UI @tests:KT-68', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test for iOS Client @tests:KT-2', () => {
  it('renders the best heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
