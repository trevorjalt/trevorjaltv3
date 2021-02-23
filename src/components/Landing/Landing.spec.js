import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProvider } from '../../contexts/PortfolioContext'
import Landing from './Landing'


describe(`Landing Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <PortfolioProvider>
                        <Landing />
                    </PortfolioProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
