import { render } from '@testing-library/react'

import { Priority } from './Priority'

describe('<Priority />', () => {
    test('should render el with data-testid="type-added"', async () => {

        const { container } = render(<Priority prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
    })
})