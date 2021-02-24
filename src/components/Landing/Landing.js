import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TrevorJAltLaughting from '../../images/trevor-j-alt-laughing.jpg'
import './Landing.css'


export default class Landing extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }
        this.state = state
    }
    
    renderLandingMain() {
        return (
            <div className='landing-wrapper'>
                <div className='landing-text-wrapper'>
                    <div className='text-container'>
                        <h3>Developing a more secure and beautiful world.</h3>
                    </div>
                </div>
                <img
                    className='landing-photo'
                    alt='trevor-j-alt-laughing'
                    src={TrevorJAltLaughting}
                />
            </div>
        )
    }

    renderQuote() {
        return (
            <div className='quote-container'>
                <div className='quote'>
                    <h2>"today or never, that's my motto."</h2>
                    <span className='quote-credit'>- Mary Poppins</span>
                </div>
            </div>
        )
    }

    renderOurServices() {
        return (
            <div className='services-wrapper'>
                <span>OUR SERVICES</span>
                <h3>Full Stack Web Applications • Web Design</h3>
                <Link
                        to='/contact'
                        className='services-contact-me'
                    >
                        CONTACT ME
                </Link>
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
                {this.renderLandingMain()}   
                {this.renderOurServices()}         
            </div>
        )
    }
}
