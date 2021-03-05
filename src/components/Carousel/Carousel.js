import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import AppleMusicIcon from '../../images/portfolio-apple-music.png'
import ArrowLeft from '../../images/arrow-left.png'
import ArrowRight from '../../images/arrow-right.png'
import SpotifyIcon from '../../images/portfolio-spotify.png'
import Store from '../Store/Store'
import './Carousel.css'


export default class Carousel extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
            activeIndex: 0,
        }

        const goToNextSlide = () => {
            let index = this.state.activeIndex
            let length = this.context.length

            if (index === length - 1) {
                index = 0
            } else {
                index++
            }
            this.setState({ activeIndex: index })
        }

        const goToPrevSlide = () => {
            let index = this.state.activeIndex
            let length = this.context.length

            if (index < 1) {
                index = length - 1
            } else {
                index --
            }
            this.setState({ activeIndex: index})
        }

        const handleKeyPressedPrev = (ev) => {
            if (ev.key === 'Enter') {
                this.goToPrevSlide()
            }
        }

        const handleKeyPressedNext = (ev) => {
            if (ev.key === 'Enter') {
                this.goToNextSlide()
            }
        }

        const handleKeyPressedProject = (ev, id) => {
            if (ev.key === 'Enter') {
                this.handleProjectClick(id)
            }
        }
    
        const handleProjectClick = (id) => {
            this.context.setProjectId(id)
        }

        this.state = state
        this.goToNextSlide = goToNextSlide
        this.goToPrevSlide = goToPrevSlide
        this.handleKeyPressedNext = handleKeyPressedNext
        this.handleKeyPressedPrev = handleKeyPressedPrev
        this.handleKeyPressedProject = handleKeyPressedProject
        this.handleProjectClick = handleProjectClick
    }

    renderSlide(id) {
        let displaySlide = []

        if (this.context.toggleCarousel === true) {
            displaySlide = Store.facts.find(el =>  el.id === id)
        } else {
            displaySlide = Store.projects.find(el =>  el.id === id)
        }
        
        if (this.context.toggleCarousel === true) {
            return (
                <div>
                    {displaySlide.fact}
                    {id === 0
                        ? <div className='music-icons'>
                                <a 
                                href='https://music.apple.com/profile/trevorjalt' 
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    className='social-icon'
                                    alt='apple-music'
                                    src={AppleMusicIcon}
                                />
                            </a>
                            <a 
                                href='https://open.spotify.com/user/3h61o9gjw94s00704jjlnxx8r?si=PX2-_t71TRKVIS96Rl59tw' 
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img
                                    className='social-icon'
                                    alt='spotify'
                                    src={SpotifyIcon}
                                />
                            </a>
                        </div>
                        : ''}
                </div>
            )
        } else {
            return (
                <div>
                    <Link
                        to={'/portfolio'}
                        className='project'
                        id='caption'
                        onClick={() => this.handleProjectClick(displaySlide.id)}
                        onKeyDown={(ev) => this.handleKeyPressedProject(ev, displaySlide.id)}
                    >
                        <span className='text'>{displaySlide.name}</span>
                        <img
                        className='project-image'
                        alt={displaySlide.name}
                        src={displaySlide.image}
                    />
                    </Link>                    
                </div>
            )
        }
    }

    renderCarousel() {
        return (
            <div className='carousel-wrapper'>
                {this.context.toggleCarousel === true 
                    ? <span className='carousel-title'>FUN FACTS</span>
                    : <span className='carousel-title-large'>THE WORK</span>
                }
                <div className='carousel'>
                    <img
                        className='arrow'
                        alt='arrow-left'
                        src={ArrowLeft}
                        onClick={this.goToPrevSlide}
                        onKeyDown={this.handleKeyPressedPrev}
                        tabIndex='0'
                        role='button'
                        aria-label='previous-slide'
                    />
                    <div className='carousel-text'>
                        {this.renderSlide(this.state.activeIndex)}
                    </div>
                    <img
                        className='arrow'
                        alt='arrow-right'
                        src={ArrowRight}
                        onClick={this.goToNextSlide}
                        onKeyDown={this.handleKeyPressedNext}
                        tabIndex='0'
                        role='button'
                        aria-label='next-slide'
                    />
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
                {this.renderCarousel()}       
            </div>
        )
    }
}

Carousel.contextType = PortfolioContext
