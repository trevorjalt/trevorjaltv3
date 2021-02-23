import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Landing.css'


export default class Landing extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }
        this.state = state
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
                <h2>"now in full color"</h2>
                <div className='cerulean-blue'>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                <h3>"now in full color"</h3>
                </div>               
            </div>
        )
    }
}
