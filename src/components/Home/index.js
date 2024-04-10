import {Component} from 'react'

import Message from '../Message'
import Loginbutton from '../Login'
import Logoutbutton from '../Logout'

import './index.css'

let message = null
class Home extends Component {
  state = {loginStatus: 'true'}

  clickLogin = () => this.setState({loginStatus: 'true'})

  clickLogout = () => this.setState({loginStatus: 'false'})

  renderAuthButton = () => {
    const {loginStatus} = this.state
    if (loginStatus === true) {
      message = 'Welcome User'
      return <Logoutbutton onClick={this.clickLogout} />
    }
    message = 'Please Login'
    return <Loginbutton onClick={this.clickLogin} />
  }

  render() {
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
