/* eslint-env jest */
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Logo from '@/components/logo'

describe('Logo Component', () => {
	it('navigates to the homepage when clicked', async () => {
		// render the logo component
		render(<Logo />)
		// simulate click event on logo
		const logoLink = screen.getByRole('link')
		fireEvent.click(logoLink)
		// assert homepage is loaded
		expect(logoLink).toBeInTheDocument()
		expect(logoLink).toHaveAttribute('href', '/')
	})
})
