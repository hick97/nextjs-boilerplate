import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the Main component', () => {
    const { getByTestId } = render(<Main />)

    expect(getByTestId('main-section')).toBeInTheDocument()
  })
})
