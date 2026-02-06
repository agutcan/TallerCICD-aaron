import {render, screen} from '@testing-library/react'
import {test, expect} from 'vitest'
import App from './App'

vi.mock('/vite.svg', () => ({
  default: 'vite.svg',
}))

test("Verifica el titulo principal", () => {
  render(<App />)
  const titulo = screen.getByText(/Bienvenido/i)
  expect(titulo).toBeInTheDocument()
}

);