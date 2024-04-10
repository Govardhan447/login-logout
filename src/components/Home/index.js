import {Component} from 'react'

import Message from '../Message'
import LoginButton from '../Login'
import LogoutButton from '../Logout'

import './index.css'

class Home extends Component {
  state = {loginStatus: true, message: 'Please Login'}

  clickLogin = () => {
    this.setState({
      loginStatus: false,
      message: 'Please Login',
    })
  }

  clickLogout = () => {
    this.setState({
      loginStatus: true,
      message: 'Welcome User',
    })
  }

  renderAuthButton = () => {
    const {loginStatus} = this.state

    if (loginStatus === true) {
      return <LoginButton />
    }
    return <LogoutButton />
  }

  render() {
    const {message} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <Message message={message} />
          {this.renderAuthButton()}
        </div>
      </div>
    )
  }
}
export default Home
