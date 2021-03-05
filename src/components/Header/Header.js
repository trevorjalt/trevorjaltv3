import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import NavHamburger from '../NavHamburger/NavHamburger'
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <header role='banner'>
                <div className='Header'>
                    <NavHamburger />
                    <div className='logo-wrapper'>
                        <h1>
                            <Link
                                to='/'
                                className='logo'
                                onClick={this.context.setShowNavFalse}
                            >
                                trevor<span className='logo-blue'>j</span>alt
                            </Link>
                        </h1>
                        <span className='job-title'>SOFTWARE DEVELOPER</span>
                    </div>
                    {/* <div className='invisible-icon'>
                        <span className='invisible-stripe' />
                    </div> */}
                </div>
            </header>
        )
    }
}

Header.contextType = PortfolioContext
