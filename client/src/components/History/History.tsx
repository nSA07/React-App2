import { Added } from './components/Added/Added';
import { Title } from './components/Title/Title';
import { Description } from './components/Description/Description';
import { Priority } from './components/Priority/Priority';
import { List } from './components/List/List';
import { Remove } from './components/Remove/Remove';



export const History = ({type, ...restProps}) => {
    let Component = null

    switch (type) {
        case 'added':
            Component = Added
            break;

            case 'title':
            Component = Title
            break;

            case 'description':
            Component = Description
            break;

            case 'priority':
            Component = Priority
            break;

            case 'list':
            Component = List
            break;

            case 'remove':
            Component = Remove
            break;
    
        default:
            break;
    }

    return <Component {...restProps} />
}