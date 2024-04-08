import { render } from '@testing-library/react'

import { Title } from './Title'

describe('<Title />', () => {
    test('should render el with data-testid="type-added"', async () => {

        const { container } = render(<Title prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
    })
})