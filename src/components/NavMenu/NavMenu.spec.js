import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProvider } from '../../contexts/PortfolioContext'
import NavMenu from './NavMenu'


describe(`NavMenu Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <PortfolioProvider>
                        <NavMenu />
                    </PortfolioProvider>
                </BrowserRouter>, div)
            ReactDOM.unmountComponentAtNode(div)
    })
})
