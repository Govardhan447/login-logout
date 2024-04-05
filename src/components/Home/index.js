import {Component} from 'react'
import Loginbutton from '.src/components/Login/index'
import Logoutbutton from '.src/components/Logout/index'
import Message from '.src/components/Message/index'
import './index.css'

let message = null
class Home extends Component {
  state = {login: true}

  clickLogin = () =>
    this.setState(prevState => ({login: (prevState.login = false)}))
  clickLogout = () =>
    this.setState(prevState => ({login: (prevState.login = true)}))

  renderAuthButton = () => {
    const {login} = this.state
    if (login === true) {
      message = 'Welcome User'
      return <Logoutbutton />
    }
    message = 'Please Login'
    return <Loginbutton />
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
