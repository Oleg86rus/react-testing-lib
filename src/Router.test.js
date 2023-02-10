import { fireEvent, render, screen } from '@testing-library/react'
import App from './App';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe('ROUTER APP', () => {
	test('ROUTER TEST', () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>);
		const mainLink = screen.getByTestId('main-link')
		const aboutLink = screen.getByTestId('about-link')
		userEvent.click(aboutLink)
		expect(screen.getByTestId('main-link')).toBeInTheDocument()
		userEvent.click(mainLink)
		expect(screen.getByTestId('about-link')).toBeInTheDocument()
	});
	test('ERROR PAGE TEST', () => {
		render(
			<MemoryRouter initialEntries={['/adasdsadsadasdas']}>
				<App />
			</MemoryRouter>);
		expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
	});
	test('ERROR PAGE TEST', () => {
		render(
			<MemoryRouter initialEntries={['/about']}>
				<App />
			</MemoryRouter>);
		expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
	});
	
})

