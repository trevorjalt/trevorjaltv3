import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ArrowLeft from '../../images/arrow-left.png'
import ArrowRight from '../../images/arrow-right.png'
import './Carousel.css'


export default class About extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
            activeIndex: 0,
            length: 6,
            facts: [
                {
                    id: 0,
                    fact: 'Music is life.  I make (and share) playlists regularly.  Need some motivation or new tunes? Check out my playlists.'
                },
                {
                    id: 1,
                    fact: 'I love all things Dragon Ball (let’s be real, Super was *ahem* a limit breaker).'
                },
                {
                    id: 2,
                    fact: 'Besides learning to code, switching to a plant based diet is the best thing I ever did for myself.'
                },
                {
                    id: 3,
                    fact: 'Lady Gaga’s ‘Stupid Love’ is always my mood.'
                },
                {
                    id: 4,
                    fact: 'I used to work for Disney, performing in shows as a certain son of man who grew up in the jungle.'
                },
                {
                    id: 5,
                    fact: 'In between sets at the gym, I\'m either dancing like no one\'s watching, or working on code in my head.'
                }
            ]
        }

        const goToNextSlide = () => {
            let index = this.state.activeIndex
            let length = this.state.length

            if (index === length - 1) {
                index = 0
            } else {
                index++
            }
            this.setState({ activeIndex: index })
        }

        const goToPrevSlide = () => {
            let index = this.state.activeIndex
            let length = this.state.length

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

        this.state = state
        this.goToNextSlide = goToNextSlide
        this.goToPrevSlide = goToPrevSlide
        this.handleKeyPressedNext = handleKeyPressedNext
        this.handleKeyPressedPrev = handleKeyPressedPrev
    }

    renderSlide(id) {
        let displaySlide = this.state.facts.find(el =>  el.id === id)
        
        return (
            <div>
                {displaySlide.fact}
            </div>
        )
    }

    renderCarousel() {
        return (
            <div className='carousel-wrapper'>
                <span className='carousel-title'>FUN FACTS</span>
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
