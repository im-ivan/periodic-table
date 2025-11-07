import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { PeriodicTable } from './PeriodicTable'

test("number of chemical elements exibited", async () => {
  render(<PeriodicTable />)
  const chemicalElements = await screen.findAllByTestId("chemical-element-container")
  expect(chemicalElements).toHaveLength(119);
})