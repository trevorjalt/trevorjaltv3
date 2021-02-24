import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import AppleMusicIcon from '../../images/portfolio-apple-music.png'
import EmailIcon from '../../images/portfolio-email.png'
import GitHubIcon from '../../images/portfolio-github.png'
import InstagramIcon from '../../images/portfolio-instagram.png'
import LinkedInIcon from '../../images/portfolio-linkedin.png'
import SpotifyIcon from '../../images/portfolio-spotify.png'
import './NavMenu.css'


export default class NavMenu extends Component {
    renderNavLinks() {
        return (
            <nav 
                role='navigation'
                className='navigation'
            >
                <div className='navigation-menu-wrapper'>
                    <Link
                        to='/'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNavFalse}
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNavFalse}
                    >
                        About
                    </Link>
                    <Link
                        to='/portfolio'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNavFalse}
                    >
                        Portfolio
                    </Link>
                    <Link
                        to='/contact'
                        className='navigation-link-wrapper'
                        onClick={this.context.setShowNavFalse}
                    >
                        Contact
                    </Link>
                    <span className='social-text'>@trevorjalt</span>
                    <div className='navigation-social-wrapper navigation-link-wrapper'>
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
                        <a 
                            href='https://www.instagram.com/trevorjalt/' 
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                className='social-icon'
                                alt='instagram'
                                src={InstagramIcon}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        )
    }

    renderNavMenu() {
        if (this.context.showNav === true) {
            return (
                <div
                    aria-live='assertive'
                    aria-relevant='all'
                >
                    {this.renderNavLinks()}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderNavMenu()}
            </div>
        )
    }
}

NavMenu.contextType = PortfolioContext
