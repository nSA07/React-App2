import { render } from '@testing-library/react'

import { Description } from './Description'

describe('<Description />', () => {
    test('should render el with data-testid="type-added"', async () => {

        const { container } = render(<Description prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
    })
})