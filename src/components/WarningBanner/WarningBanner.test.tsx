import {render, screen} from '@testing-library/react'
import WarningBanner from "./WarningBanner";

const title: string = 'Test title'
const description: string = 'Test description'

describe('Testing WarningBanner Component', () => {
    test('Component render', () => {
        render(<WarningBanner title={title} description={description}/>)

        expect(screen.getByText('Test title')).toBeInTheDocument();
        expect(screen.getByText('Test description')).toBeInTheDocument();
    })

    test('WarningBanner snapshot', ()=>{
        const view = render(<WarningBanner title={title} description={description}/>);

        expect(view).toMatchSnapshot()
    })
})