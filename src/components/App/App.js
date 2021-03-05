import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PortfolioContext from '../../contexts/PortfolioContext'
import AboutRoute from '../../routes/AboutRoute/AboutRoute'
import ContactRoute from '../../routes/ContactRoute/ContactRoute'
import LandingRoute from '../../routes/LandingRoute/LandingRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import PortfolioRoute from '../../routes/PortfolioRoute/PortfolioRoute'
// import Footer from '../Footer/Footer'
// import Header from '../Header/Header'
// import NavMenu from '../NavMenu/NavMenu'
import './App.css'


export default class App extends Component {
    constructor(props) {
        super(props)

        const state = {
            error: null
        }
        this.state = state
    }

    renderRoutes() {
        return (
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={LandingRoute}
                />
                <Route
                    path={'/about'}
                    component={AboutRoute}
                />
                <Route
                    path={'/portfolio'}
                    component={PortfolioRoute}
                />
                 <Route
                    path={'/contact'}
                    component={ContactRoute}
                />
                <Route
                    component={NotFoundRoute}
                />
            </Switch>
        )
    }

    render() {
        const { error } = this.state

        return (
          <div className='App'>
              {/* <Header /> */}
              {/* <NavMenu /> */}
              <main
                  className='App-Main'
              >  
                  {error && (
                      <p aria-live='assertive'>There was an error! Oh no!</p>
                  )}
                  {this.renderRoutes()} 
              </main>
              {/* <Footer /> */}
          </div>
      )
    }
}

App.contextType = PortfolioContext
