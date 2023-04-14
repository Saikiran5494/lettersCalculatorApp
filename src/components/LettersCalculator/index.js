// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  textEntered = event => {
    const entered = event.target.value
    this.setState({count: entered.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt=" letters calculator"
          className="image"
        />
        <h1 className="heading">Calculate the Letters you enter</h1>
        <div className="input-container">
          <label htmlFor="phrase" className="phrase">
            Enter the phrase
          </label>

          <input
            type="text"
            id="phrase"
            className="input"
            placeholder="calculator"
            onChange={this.textEntered}
          />
          <p className="paragraph">No.of letters: {count} </p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
