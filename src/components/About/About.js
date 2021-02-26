import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import TrevorJAltSmiling from '../../images/trevor-j-alt-smiling.png'
import Carousel from '../Carousel/Carousel'
import './About.css'


export default class About extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null,
        }

        this.state = state
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.context.setToggleCarouselTrue()
        this.context.setFactsLength()
        this.context.setProjectId(null)
    }
    
    renderAboutMain() {
        return (
            <div className='about-wrapper'>
                <img
                    className='about-photo'
                    alt='trevor-j-alt-laughing'
                    src={TrevorJAltSmiling}
                />
                <div className='about-text-wrapper'>
                    <p>I’m a software developer, and privacy and data rights advocate 
                        currently residing in the Atlanta, Georgia Metropolitan Area.</p>
                    <p>I’ve lived, worked, and learned all over the world, and it’s in 
                        coding where all my passions and skills come together.  I’m a 
                        perpetual student, thriving on learning new things and finding 
                        solutions to old problems.  I love learning from, working with, 
                        and teaching others.  I see patterns all around me.  I live in the 
                        details.  I find beauty in all things. I’m a protector. I'm 
                        always creating something.  And it’s key to me that 
                        in the world of coding, as it also is in the physical world, for 
                        all the individual parts to come together effectively, there must be
                        communication every step of the way.  The result: a beautiful and 
                        secure product.  If that doesn’t make you say 'Whatever, Trevor!', 
                        then we’re a great fit to collaborate.</p>
                    <div className='about-work-together-wrapper'>
                        <Link
                            to='/contact'
                            className='about-work-together'
                        >
                            LET'S WORK TOGETHER
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    renderEnoughAboutMe() {
        return (
            <div className='enough-about-me-wrapper'>
                <div className='quote-container'>
                    <div className='quote'>
                        <h2>"but enough about me."</h2>
                    </div>
                </div>
            </div>
        )
    }

    renderMissionStatement() {
        return (
            <div className='mission-statement'>
                <span className='mission-title'>MY MISSION</span>
                <ul>
                    <li>Create applications that help people connect and further their passions</li>
                    <li>Find solutions through quality code and secure coding practices</li>
                    <li>Work with others to foster an environment of support and continued growth</li>
                </ul>
            </div>
        )
    }

    renderQuote() {
        return (
            <div className='quote-container'>
                <div className='quote'>
                    <h2>"hi, I'm Trevor."</h2>
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
                {this.renderAboutMain()}   
                {this.renderMissionStatement()}  
                <Carousel />      
                {this.renderEnoughAboutMe()}
            </div>
        )
    }
}

About.contextType = PortfolioContext
