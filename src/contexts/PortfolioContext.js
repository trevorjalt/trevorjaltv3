import React, { Component } from 'react'

const PortfolioContext = React.createContext({
    error: null,
    showNav: false,
    clearError: () => { },
    setError: () => { },
    setShowNav: () => { },
    setShowNavFalse: () => { },
})

export default PortfolioContext

export class PortfolioProvider extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
            showNav: false,
        }
    
        const clearError = () => {
            this.setState({ error: null })
        }
      
        const setError = error => {
            console.error(error)
            this.setState({ error })
        }

        const setShowNav = () => {
            this.setState({ showNav: !this.state.showNav })
        }

        const setShowNavFalse = () => {
            this.setState({ showNav: false })
        }

        this.state = state
        this.clearError = clearError
        this.setError = setError
        this.setShowNavFalse = setShowNavFalse
        this.setShowNav = setShowNav
    }
    
    render() {
        const value = {
            error: this.state.error,
            showNav: this.state.showNav,
            clearError: this.clearError,
            setError: this.setError,
            setShowNav: this.setShowNav,
            setShowNavFalse: this.setShowNavFalse,
        }
        return (
            <PortfolioContext.Provider value={value}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}
