import {Component} from 'react'
import './index.css'

class LogoutButton extends Component {
  render() {
    return (
      <button className="button" type="button" onClick={this.clickLogout}>
        Logout
      </button>
    )
  }
}

export default LogoutButton
