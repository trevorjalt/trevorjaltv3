import React, { Component } from 'react'
import PortfolioContext from '../../contexts/PortfolioContext'
import './NavHamburger.css'


export default class NavHamburger extends Component {
    constructor(props) {
        super(props)

        const handleKeyPressed = (ev) => {
            if (ev.key === 'Enter') {
                this.handleNavClick()
            }
        }
    
        const handleNavClick = () => {
            this.context.setShowNav()
        }

        this.handleKeyPressed = handleKeyPressed
        this.handleNavClick = handleNavClick
    }

    renderNavIcon() {
        if (this.context.showNav === false) {
            return (
                <div
                    className='navigation-icon'
                    onClick={this.handleNavClick}
                    onKeyDown={this.handleKeyPressed}
                    tabIndex='0'
                    role='button'
                    aria-label='navigation-menu-clickable'
                    aria-expanded='false'
                >
                    <span className='hamburger-stripe-top hamburger-stripe' />
                    <span className='hamburger-stripe-bottom hamburger-stripe' />  
                </div>
            )
        }
        return (
            <div
                className='navigation-icon' 
                onClick={this.handleNavClick}
                onKeyDown={this.handleKeyPressed} 
                tabIndex='0'
                role='button'
                aria-label='navigation-menu-clickable'
                aria-expanded='false'
            >
                <span className='hamburger-stripe-top hamburger-stripe-top-open hamburger-stripe' />
                <span className='hamburger-stripe-bottom hamburger-stripe-bottom-open hamburger-stripe' />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNavIcon()}
            </div>
        )
    }
}

NavHamburger.contextType = PortfolioContext
