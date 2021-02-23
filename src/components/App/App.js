import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import LandingRoute from '../../routes/LandingRoute/LandingRoute'
import Header from '../Header/Header'
import NavMenu from '../NavMenu/NavMenu'
import './App.css'


export default class App extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }
        this.state = state
    }

    componentDidMount() {
        this.context.clearError()
    }

    renderRoutes() {
        return (
            <Switch>
                <Route
                    exact
                    patch={'/'}
                    component={LandingRoute}
                />
            </Switch>
        )
    }

    render() {
        const { error } = this.state

        return (
          <div className='App'>
              <Header />
              <NavMenu />
              <main
                  className='App-Main'
              >  
                  {error && (
                      <p aria-live='assertive'>There was an error! Oh no!</p>
                  )}
                  {this.renderRoutes()} 
              </main>
          </div>
      )
    }
}

App.contextType = PortfolioContext
