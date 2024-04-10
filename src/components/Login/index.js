import {Component} from 'react'
import './index.css'

class LoginButton extends Component {
  render() {
    return (
      <button className="button" type="button" onClick={this.clickLogin}>
        Login
      </button>
    )
  }
}

export default LoginButton
