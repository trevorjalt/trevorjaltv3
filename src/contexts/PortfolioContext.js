import React, { Component } from 'react'

const PortfolioContext = React.createContext({
    length: 3,
    projectId: null,
    showNav: false,
    toggleCarousel: false,
    setFactsLength: () => { },
    setProjectId: () => { },
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
            length: 3,
            projectId: null,
            showNav: false,
            toggleCarousel: false,
        }

        const setFactsLength = () => {
            this.setState({ length: 6 })
        }

        const setProjectId = (id) => {
            this.setState({ projectId: id })
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
        this.setFactsLength = setFactsLength
        this.setProjectId = setProjectId
        this.setProjectsLength = setProjectsLength
        this.setShowNavFalse = setShowNavFalse
        this.setShowNav = setShowNav
        this.setToggleCarouselFalse = setToggleCarouselFalse
        this.setToggleCarouselTrue = setToggleCarouselTrue
    }
    
    render() {
        const value = {
            length: this.state.length,
            projectId: this.state.projectId,
            showNav: this.state.showNav,
            toggleCarousel: this.state.toggleCarousel,
            setFactsLength: this.setFactsLength,
            setProjectId: this.setProjectId,
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
