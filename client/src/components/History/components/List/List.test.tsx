import { render } from '@testing-library/react'

import { List } from './List'

describe('<List />', () => {
    test('should render el with data-testid="type-added"', async () => {

        const { container } = render(<List prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
    })
})