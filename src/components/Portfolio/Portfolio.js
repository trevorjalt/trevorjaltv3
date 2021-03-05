import React, { Component } from 'react'
import PortfolioContext from '../../contexts/PortfolioContext'
import Carousel from '../Carousel/Carousel'
import Store from '../Store/Store'
import './Portfolio.css'


export default class Portfolio extends Component {
    constructor(props) {
        super(props)


        const state = {
            error: null,
        }

        const divToFocus = []

        const handleScroll = () => {
            let divObject = this.divToFocus
    
            if (divObject.ref !== undefined) {
                divObject.ref.scrollIntoView({
                    behavior: 'auto',
                    block: 'start',
                })
            }
        }
   
        this.state = state
        this.divToFocus = divToFocus
        this.handleScroll = handleScroll
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.context.setToggleCarouselFalse()
        this.context.setProjectsLength()
        this.context.setProjectId(null)
    }
    
    componentDidUpdate() {
        if (this.context.projectId !== null) {
            this.handleScroll()
        } 
    }

    renderProjectDescription(project) {
        return (
            <div 
                className='description-wrapper'
                tabIndex='0'
                role='feed'
                aria-label='project-description'
            >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.supplemental
                    ? <p>{project.supplemental}</p>
                    : ''}
            </div>
        )
    }

    renderProjectExperience(project) {
        return (
            <div 
                className='experience-wrapper'
                tabIndex='0'
                role='feed'
                aria-label='project-experience-links'
            >
                <h3>EXPERIENCE {project.name.toUpperCase()}</h3>
                <div className='experience-content-wrapper'>
                    <div className='project-preview-wrapper'>
                        <img
                            className='project-preview'
                            alt={project.name}
                            src={project.preview}
                        />
                    </div>
                    <div className='link-wrapper'>
                        <a 
                            href={project.webAddress.live} 
                            target='_blank'
                            rel='noreferrer'
                        >
                            live
                        </a>
                        <a 
                            href={project.webAddress.client} 
                            target='_blank'
                            rel='noreferrer'
                        >
                            client
                        </a>
                        <a 
                            href={project.webAddress.api} 
                            target='_blank'
                            rel='noreferrer'
                        >
                            api
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    renderProjectLogo(project) {
        return (
            <img
                    className='project-logo'
                    alt={project.name}
                    src={project.image}
                    tabIndex='0'
                    role='feed'
                    aria-label='project-logo'
                />
        )
    }

    renderProjectSlogan(project) {
        return (
            <div className='slogan-wrapper'>
                <div className='quote-container'>
                    <div className='quote'>
                        <h4>"{project.slogan}"</h4>
                    </div>
                </div>
            </div>
        )
    }

    renderProjectTech(project) {
        return (
            <div 
                className='tech-wrapper'
                tabIndex='0'
                role='feed'
                aria-label='project-tech'
            >
                <span className='tech-title'>THE TECH</span>
                <div className='tech-categories-wrapper'>
                    <div className='tech-categories-column'>
                        <span className='tech-category'>front-end</span>
                        {project.tech.frontend.map(el => {
                            return (
                                <span key={el}>{el}</span>
                            )
                        })}
                    </div>
                    <div className='tech-categories-column'>
                        <span className='tech-category'>back-end</span>
                        {project.tech.backend.map(el => {
                            return (
                                <span key={el}>{el}</span>
                            )
                        })}
                    </div>
                    <div className='tech-categories-column'>
                        <span className='tech-category'>architecture</span>
                        {project.tech.architecture.map(el => {
                            return (
                                <span key={el}>{el}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    renderProjectDetails(id) {
        let project = Store.projects.find(el =>  el.id === id)
 
        return (
            <div    
                className='project-wrapper' 
            >
                {this.renderProjectLogo(project)}
                {this.renderProjectDescription(project)}
                {this.renderProjectTech(project)}
                {this.renderProjectExperience(project)}
                {this.renderProjectSlogan(project)}
            </div>
        )
    }

    renderProjects() {
        const { projectId } = this.context

        let project = []

        if ( projectId === null ) {
            project = Store.projects[0]
        } else { 
            project = Store.projects[projectId]
        }

        return(
                <div key={project.id} className='project-wrapper' ref={ref => this.divToFocus = {ref, id: project.id}}>
                    {this.renderProjectDetails(project.id)}
                </div>
        )
    }

    renderQuote() {
        return (
            <div className='quote-container port-quote'>
                <div className='quote'>
                    <h2>"whenever you are creating beauty around you, you
                        are restoring your own soul."</h2>
                    <span className='quote-credit'>- Alice Walker</span>
                </div>
            </div>
        )
    }
    
    render() {
        const { error } = this.state
        
        return (
            <div>
                <div 
                    role='alert' 
                    className='error-message'
                    aria-live='assertive'
                >
                    {error && <p>{error.message}</p>}
                </div>
                {this.renderQuote()}
                <Carousel />
                {this.renderProjects()}     
            </div>
        )
    }
}

Portfolio.contextType = PortfolioContext
