import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProvider } from '../../contexts/PortfolioContext'
import NavHamburger from './NavHamburger'


describe(`NavHamburger Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <PortfolioProvider>
                        <NavHamburger />
                    </PortfolioProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
