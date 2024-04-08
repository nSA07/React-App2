import { render } from '@testing-library/react'

import { Remove } from './Remove'

describe('<Remove />', () => {
    test('should render el with data-testid="type-remove"', async () => {

        const { queryByTestId, container } = render(<Remove prev="prev" next="" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
        expect(queryByTestId('type-added')).toBeDefined()
    })

    test('should NOT render el with data-testid="type-remove"', async () => {

        const { queryByTestId } = render(<Remove prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(queryByTestId('type-added')).toBeFalsy()
    })
})