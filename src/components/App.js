import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
//React Redux loading bar
import LoadingBar from 'react-redux-loading-bar'
//Action Creators
import {
  handleInitialData
} from '../actions/shared'
//UI components
import Dashboard from './Dashboard'
import Login from './Login'
import PetDetails from './PetDetails'
import PageNotFound from './PageNotFound'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div>
            <Nav/>
            {this.props.loading === true
              ? null
              : <div className='app-contents'>
                  <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/signin' exact component={Login}/>
                    <Route path='/home' exact component={Dashboard}/>
                    <Route path='/pet/:id' exact component={PetDetails}/>
                    <Route path='/404' component = {PageNotFound}/>
                    <Route component={Home} />
                  </Switch>
                </div>
            }
            <Footer />
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({users,authedUser }) => {
  const loading = Object.keys(users).length === 0 ? true : false
  return {
    loading,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
