import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('counter test', () => {
	test('test router', async () => {
		const { getByTestId } = render(renderTestApp(null, {
			route: '/',
			initialState: {
				counter: {
					value: 10
				}
			}
		}))
		const incrementBtn = getByTestId('increment-btn')
		expect(getByTestId('value-title')).toHaveTextContent('10')
		userEvent.click(incrementBtn)
		expect(getByTestId('value-title')).toHaveTextContent('11')
		
	})
})