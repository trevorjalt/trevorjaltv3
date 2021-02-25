import React, { Component } from 'react'
import Store from '../Store/Store'
import './Portfolio.css'


export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
        }
        this.state = state
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }     

    renderProjects() {
        return(
            Store.projects.map((project) => (
                <div key={project.id}>
                    {this.renderProjectDetails(project.id)}
                </div>
            ))
        )
    }

    renderProjectDetails(id) {
        let project = Store.projects.find(el =>  el.id === id)
 
        return (
            <div    
                className='project-wrapper' 
            >
                <img
                    className='project-logo'
                    alt={project.name}
                    src={project.image}
                    tabIndex='0'
                    role='feed'
                    aria-label='project-logo'
                />
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
                <div 
                    className='tech-wrapper'
                    tabIndex='0'
                    role='feed'
                    aria-label='project-tech'
                >
                    <span className='tech-title'>THE TECH</span>
                    <span className='tech-category'>front-end</span>
                    {project.tech.frontend.map(el => {
                        return (
                            <span>{el}</span>
                        )
                    })}
                    <span className='tech-category'>back-end</span>
                    {project.tech.backend.map(el => {
                        return (
                            <span>{el}</span>
                        )
                    })}
                    <span className='tech-category'>architecture</span>
                    {project.tech.architecture.map(el => {
                        return (
                            <span>{el}</span>
                        )
                    })}
                </div>
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
                <div className='slogan-wrapper'>
                    <div className='quote-container'>
                        <div className='quote'>
                            <h4>"{project.slogan}"</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderQuote() {
        return (
            <div className='quote-container'>
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
                <div className='portfolio-title'>
                    <h3>THE WORK</h3>
                </div>
                {this.renderProjects()}     
            </div>
        )
    }
}
