import React, { Component } from 'react'
import PortfolioContext from '../../contexts/PortfolioContext'
import EmailIcon from '../../images/portfolio-email.png'
import GitHubIcon from '../../images/portfolio-github.png'
import LinkedInIcon from '../../images/portfolio-linkedin.png'
import TrevorJAltCerulean from '../../images/trevor-j-alt-cerulean.png'
import './Contact.css'


export default class Contact extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }

        this.state = state
    }

    componentDidMount() {
        window.scrollTo(0,0)
        this.context.setProjectId(null)
    }

    renderContactForm() {
        return (
            <form action='https://formspree.io/f/xleoykpq' method='POST'>
                <div className='form-wrapper'>     
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input 
                        id='name' 
                        type='text' 
                        name='name' 
                        required
                        aria-required='true'
                        autoComplete='name'
                    />
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input 
                        id='email' 
                        type='email' 
                        name='email' 
                        required 
                        aria-required='true'
                        autoComplete='email'
                    />
                    <label htmlFor='message'>
                        Message
                    </label>
                    <textarea 
                        id='message' 
                        type='text'
                        name="message" 
                        required
                        aria-required='true'
                        autoComplete='off'
                    />
                </div>  
                <div>
                    <button type='submit' value='Send'>Send</button>
                    <button type='reset'>Reset</button>
                </div>
            </form>
        )
    }
    
    renderContactMain() {
        return (
            <div className='main-wrapper'>
                <div className='main-text-wrapper contact-form'>
                    <h3>LET'S CONNECT</h3>
                    <h4>trevor@trevorjalt.com</h4>
                    {this.renderContactSocial()}
                    {this.renderContactForm()}
                </div>
                <img
                    className='main-photo'
                    alt='trevor-j-alt-laughing'
                    src={TrevorJAltCerulean}
                />
            </div>
        )
    }

    renderContactSocial() {
        return (
            <div className='contact-social'>
                <a 
                    href='https://www.github.com/trevorjalt' 
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        className='social-icon'
                        alt='github'
                        src={GitHubIcon}
                    />
                </a>
                <a 
                    href='https://www.linkedin.com/in/trevor-j-alt/' 
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        className='social-icon'
                        alt='linkedin'
                        src={LinkedInIcon}
                    />
                </a>
                <a 
                    href='mailto:trevor@trevorjalt.com?subject=Hey%20I%20Saw%20Your%20Portfolio'>
                        <img 
                            className='social-icon'
                            alt='email-me'
                            src={EmailIcon}
                        />
                </a>
            </div>
        )
    }

    renderFarewellQuote() {
        return (
            <div className='quote-container farewell'>
                <div className='quote'>
                    <h4>"happy trails to you, until we meet again."</h4>
                    <span className='quote-credit'>- Dale Evans</span>
                </div>
            </div>
        )
    }

    renderQuote() {
        return (
            <div className='quote-container'>
                <div className='quote'>
                    <h2>"genius is the ability to put into effect what is on your mind."</h2>
                    <span className='quote-credit'>- F. Scott Fitzgerald</span>
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
                {this.renderContactMain()}   
                {this.renderFarewellQuote()}     
            </div>
        )
    }
}

Contact.contextType = PortfolioContext
