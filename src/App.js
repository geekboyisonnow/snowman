import React, { Component } from 'react'
import './App.css'
import step_0 from './images/step_0.png'
import step_1 from './images/step_1.png'
import step_2 from './images/step_2.png'
import step_3 from './images/step_3.png'
import step_4 from './images/step_4.png'
import step_5 from './images/step_5.png'
import step_6 from './images/step_6.png'
import step_7 from './images/step_7.png'
import words from './words.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.snowmen = [
      step_0,
      step_1,
      step_2,
      step_3,
      step_4,
      step_5,
      step_6,
      step_7
    ]

    this.state = {
      lettersChosen: [],
      secretWord: words[Math.floor(Math.random() * words.length)].toUpperCase()
    }
  }

  // if this letter is in the array of letters we have already chosen
  // ... then return the letter
  // else
  // ... return an _

  displayLetterOrUnderscore = letter => {
    if (this.state.secretWord.split('').includes(letter)) {
      return letter
    } else {
      return '_'
    }
  }

  _click = event => {
    this.state.lettersChosen.push(event.target.value)
    console.log(this.state.lettersChosen)
    console.log(this.state.secretWord)
    this.setState({
      lettersChosen: this.state.lettersChosen
    })
  }

  whichSnowman = () => {
    if (this.state.lettersChosen.length > 7) {
      return this.snowmen[7]
    } else {
      return this.snowmen[this.state.lettersChosen.length]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>SNOWMAN</h1>
        <header>
          <img
            src={this.whichSnowman()}
            alt="snowman"
            height="35%"
            width="35%"
          />
        </header>

        <body>
          <div id="blanks">
            {this.state.secretWord.split('').map(letter => {
              return (
                <li>
                  {this.state.lettersChosen.includes(letter) ? letter : '_'}
                </li>
              )
            })}
          </div>
          {/* <ul class="blanks">
            <li>{this.displayLetterOrUnderscore('Q')}</li>
            <li>{this.displayLetterOrUnderscore('n')}</li>
            <li>{this.displayLetterOrUnderscore('o')}</li>
            <li>{this.displayLetterOrUnderscore('W')}</li>
            <li>{this.displayLetterOrUnderscore('m')}</li>
            <li>{this.displayLetterOrUnderscore('p')}</li>
            <li>{this.displayLetterOrUnderscore('n')}</li>
          </ul> */}
        </body>
        <footer>
          <row>
            <button value="Q" onClick={this._click}>
              Q
            </button>
            <button value="W" onClick={this._click}>
              W
            </button>
            <button value="E" onClick={this._click}>
              E
            </button>
            <button value="R" onClick={this._click}>
              R
            </button>
            <button value="T" onClick={this._click}>
              T
            </button>
            <button value="Y" onClick={this._click}>
              Y
            </button>
            <button value="U" onClick={this._click}>
              U
            </button>
            <button value="I" onClick={this._click}>
              I
            </button>
            <button value="O" onClick={this._click}>
              O
            </button>
            <button value="P" onClick={this._click}>
              P
            </button>
          </row>
          <row>
            <button value="A" onClick={this._click}>
              A
            </button>
            <button value="S" onClick={this._click}>
              S
            </button>

            <button value="D" onClick={this._click}>
              D
            </button>

            <button value="F" onClick={this._click}>
              F
            </button>

            <button value="G" onClick={this._click}>
              G
            </button>

            <button value="H" onClick={this._click}>
              H
            </button>

            <button value="J" onClick={this._click}>
              J
            </button>

            <button value="K" onClick={this._click}>
              K
            </button>

            <button value="L" onClick={this._click}>
              L
            </button>
          </row>
          <row>
            <button value="Z" onClick={this._click}>
              Z
            </button>

            <button value="X" onClick={this._click}>
              X
            </button>

            <button value="C" onClick={this._click}>
              C
            </button>

            <button value="" V onClick={this._click}>
              V
            </button>

            <button value="B" onClick={this._click}>
              B
            </button>

            <button value="N" onClick={this._click}>
              N
            </button>

            <button value="M" onClick={this._click}>
              M
            </button>
          </row>
        </footer>
      </div>
    )
  }
}
export default App
