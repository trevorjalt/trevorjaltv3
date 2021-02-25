import React, { Component } from 'react'

const PortfolioContext = React.createContext({
    error: null,
    length: 3,
    showNav: false,
    toggleCarousel: false,
    clearError: () => { },
    setError: () => { },
    setFactsLength: () => { },
    setProjectsLength: () => { },
    setShowNav: () => { },
    setShowNavFalse: () => { },
    setToggleCarouselFalse: () => { },
    setToggleCarouselTrue: () => { },
})

export default PortfolioContext

export class PortfolioProvider extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
            length: 3,
            showNav: false,
            toggleCarousel: false,
        }
    
        const clearError = () => {
            this.setState({ error: null })
        }
      
        const setError = error => {
            console.error(error)
            this.setState({ error })
        }

        const setFactsLength = () => {
            this.setState({ length: 6 })
        }

        const setProjectsLength = () => {
            this.setState({ length: 3 })
        } 

        const setShowNav = () => {
            this.setState({ showNav: !this.state.showNav })
        }

        const setShowNavFalse = () => {
            this.setState({ showNav: false })
        }

        const setToggleCarouselFalse = () => {
            this.setState({ toggleCarousel: false })
        }

        const setToggleCarouselTrue = () => {
            this.setState({ toggleCarousel: true })
        }

        this.state = state
        this.clearError = clearError
        this.setError = setError
        this.setFactsLength = setFactsLength
        this.setProjectsLength = setProjectsLength
        this.setShowNavFalse = setShowNavFalse
        this.setShowNav = setShowNav
        this.setToggleCarouselFalse = setToggleCarouselFalse
        this.setToggleCarouselTrue = setToggleCarouselTrue
    }
    
    render() {
        const value = {
            error: this.state.error,
            length: this.state.length,
            showNav: this.state.showNav,
            toggleCarousel: this.state.toggleCarousel,
            clearError: this.clearError,
            setError: this.setError,
            setFactsLength: this.setFactsLength,
            setProjectsLength: this.setProjectsLength,
            setShowNav: this.setShowNav,
            setShowNavFalse: this.setShowNavFalse,
            setToggleCarouselFalse: this.setToggleCarouselFalse,
            setToggleCarouselTrue: this.setToggleCarouselTrue,
        }
        return (
            <PortfolioContext.Provider value={value}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}
