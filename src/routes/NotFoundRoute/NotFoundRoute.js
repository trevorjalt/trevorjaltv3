import React, { Component } from 'react'
import './NotFound.css'


export default class NotFoundRoute extends Component {
    render() {
        return (
            <section 
                className ='not-found-route'
                aria-live='polite'
                aria-relevant='all'
            >
                <div className='not-found-wrapper'>
                    <h2>404 - Whoops, looks like the page you were looking for
                        isn't here
                    </h2>
                    <span className='go-back'>TRY GOING BACK TO YOUR PREVIOUS PAGE</span>
                </div>
            </section>
        );
    }
}
