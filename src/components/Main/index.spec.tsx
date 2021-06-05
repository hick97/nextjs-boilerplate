import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the Main component', () => {
    const { getByTestId } = render(<Main />)

    expect(getByTestId('main__div--wrapper')).toBeInTheDocument()
    expect(getByTestId('main__text--title')).toBeInTheDocument()
    expect(getByTestId('main__text--description')).toBeInTheDocument()
  })

  it('should render the correct texts to Main title and description', () => {
    const { getByTestId } = render(<Main />)

    expect(getByTestId('main__text--title')).toHaveTextContent('Lorem Ipsum')
    expect(getByTestId('main__text--description')).toHaveTextContent(
      'Give me some description'
    )
  })
})
