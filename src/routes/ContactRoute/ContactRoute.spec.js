import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioProvider } from '../../contexts/PortfolioContext'
import ContactRoute from './ContactRoute'


describe(`ContactRoute Component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
            ReactDOM.render(
                <BrowserRouter>
                    <PortfolioProvider>
                        <ContactRoute />
                    </PortfolioProvider>
                </BrowserRouter>, div)
            
            ReactDOM.unmountComponentAtNode(div)
    })
})
