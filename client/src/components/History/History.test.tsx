import { render } from '@testing-library/react'
import { History } from './History';

jest.mock('./components/Added/Added', () => ({
    Added: () => <h1>Added</h1>
}));

jest.mock('./components/Title/Title', () => ({
    Title: () => <h1>Title</h1>
}));

jest.mock('./components/Description/Description', () => ({
    Description: () => <h1>Description</h1>
}));

jest.mock('./components/Priority/Priority', () => ({
    Priority: () => <h1>Priority</h1>
}));

jest.mock('./components/List/List', () => ({
    List: () => <h1>List</h1>
}));

jest.mock('./components/Remove/Remove', () => ({
    Remove: () => <h1>Remove</h1>
}));

describe('<History />', () => {

    test('History component should render Added Component', () => {
        const {container, getAllByText} = render(<History type="added" />)

        expect(getAllByText('Added')).toBeDefined();
        expect(container.firstChild).toMatchSnapshot();
    })

    test('History component should render Title Component', () => {
        const {container, getAllByText} = render(<History type="title" />)

        expect(getAllByText('Title')).toBeDefined();
        expect(container.firstChild).toMatchSnapshot();
    })

    test('History component should render Priority Component', () => {
        const {container, getAllByText} = render(<History type="priority" />)

        expect(getAllByText('Priority')).toBeDefined();
        expect(container.firstChild).toMatchSnapshot();
    })

    test('History component should render List Component', () => {
        const {container, getAllByText} = render(<History type="list" />)

        expect(getAllByText('List')).toBeDefined();
        expect(container.firstChild).toMatchSnapshot();
    })

    test('History component should render Remove Component', () => {
        const {container, getAllByText} = render(<History type="remove" />)

        expect(getAllByText('Remove')).toBeDefined();
        expect(container.firstChild).toMatchSnapshot();
    })
})
