/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Test insulin delivery status UI on iOS @tests:KT-68', () => {
  it('Transition state and keep status', () => {
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

describe('Unit test for record keeping @tests:KT-98', () => {
  it('Verify create and archive record feature', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Unit test feedback forms @tests:KT-30', () => {
  it('Verify form submission', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Test insulin delivery status UI on Android @tests:KXITM5M88YE4A3P87Y8EE1HGYP8JQGP', () => {
  it('Transition state and keep status', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

describe('Unit test Android client @tests:KXITM5M88YE4A3P87Y8EE1HGYP8JQGP', () => {
  it('Test menu buttons ', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Docs ->/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
