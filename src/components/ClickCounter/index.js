// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  increaseOnClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="cont">
        <h1 className="head">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <div className="button-cont">
          <button className="btn" type="button" onClick={this.increaseOnClick}>
            Click me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
