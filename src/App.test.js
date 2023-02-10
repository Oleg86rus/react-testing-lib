import { fireEvent, render, screen } from '@testing-library/react'
import App from './App';
import userEvent from '@testing-library/user-event'

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
    expect(input).toMatchSnapshot()
  });
  
  test('renders learn react link 2', async () => {
    render(<App/>)
    // const helloWorldElem = screen.queryByText(/hello2/i)
    // expect(helloWorldElem).toBeNull()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
  })
  
  test('CLICK ELEM', async () => {
    render(<App/>)
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })
  
  test('INPUT EVENT', () => {
    render(<App/>)
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
//    Искусственное событие
    fireEvent.input(input, {
      target: {value: '1231312'}
    })
//    Искусственное действие. Близко к пользователю,
//    обрабатываются события нажатия клавиш и тд
    userEvent.type(input, '1231312')
    expect(screen.queryByTestId('value-elem')).toContainHTML('1231312')
  })
})

