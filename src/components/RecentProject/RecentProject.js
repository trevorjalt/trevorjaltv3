import React, { Component } from 'react'
import PortfolioContext from '../../contexts/PortfolioContext'
import Store from '../Store/Store'
import './RecentProject.css'


export default class RecentProject extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }
        this.state = state
    }

    renderLinks(project) {
        return (
            <div className='recent-link-wrapper'>
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
        )
    }


    renderRecentProjectDetails(id) {
        let project = Store.projects.find(el =>  el.id === id)
 
        return (
            <div    
                className='recent-project-wrapper' 
            >
                <img
                    className='recent-project-preview'
                    alt={project.name}
                    src={project.preview}
                    tabIndex='0'
                    role='feed'
                    aria-label='project-logo'
                />
                <h3>{project.name}</h3>
                {this.renderLinks(project)}
                <p>{project.description}</p>
                <h4>TECH</h4>
                <div className='recent-project-tech-wrapper'>
                    {project.techSummary.map(el => {
                        return (
                            <span key={el}>{el}, </span>
                        )
                    })}
                </div>
            </div>
        )
    }
    
    renderRecentProjects() {
        return(
            Store.projects.map((project, index) => (
                <div key={project.id} className='project-wrapper'>
                    {this.renderRecentProjectDetails(project.id)}
                </div>
            ))
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
                <div className='recent-project-container'>
                    <div className='recent-projects-title-wrapper'>
                        <h3>RECENT PROJECTS</h3>
                    </div>
                        {this.renderRecentProjects()}
                </div>
            </div>
        )
    }
}

RecentProject.contextType = PortfolioContext
