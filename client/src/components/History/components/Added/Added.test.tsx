import { render } from '@testing-library/react'

import { Added } from './Added';

describe('<Added />', () => {
    test('should render el with data-testid="type-added"', async () => {

        const { queryByTestId, container } = render(<Added prev="" next="next" taskName="taskName" dueData="1" />)
        
        expect(container.firstChild).toMatchSnapshot()
        expect(queryByTestId('type-added')).toBeDefined()
    })

    test('should NOT render el with data-testid="type-added"', async () => {

        const { queryByTestId } = render(<Added prev="prev" next="next" taskName="taskName" dueData="1" />)
        
        expect(queryByTestId('type-added')).toBeFalsy()
    })
})