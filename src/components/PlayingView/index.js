import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PlayingViewContainer,
  GameRulesView,
  PopupViewContainer,
  PopupImage,
} from './styledComponents'
import GameScore from '../GameScore'
import GameResult from '../GameResult'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    isShow: true,
    resultText: 'YOU WON',
    score: 0,
    newArray: [choicesList[0], choicesList[1]],
  }

  updateResult = (you, opponent) => {
    if (you.id === 'ROCK') {
      switch (opponent.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (you.id === 'PAPER') {
      switch (opponent.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponent.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => {
    this.setState({isShow: true})
  }

  opponentRandomChoice = id => {
    const {score} = this.state
    const opponent = choicesList[Math.floor(Math.random() * 3)]
    const you = choicesList.filter(eachItem => eachItem.id === id)
    const result = this.updateResult(you[0], opponent)
    let updatedScore = score

    if (result === 'YOU WON') {
      updatedScore = score + 1
    } else if (result === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }

    this.setState({
      score: updatedScore,
      resultText: result,
      isShow: false,
      newArray: [you[0], opponent],
    })
  }

  render() {
    const {score, resultText, isShow, newArray} = this.state

    return (
      <PlayingViewContainer>
        <GameScore score={score} />
        <GameResult
          choicesList={choicesList}
          resultText={resultText}
          isShow={isShow}
          newArray={newArray}
          opponentRandomChoice={this.opponentRandomChoice}
          restartGame={this.restartGame}
        />
        <GameRulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopupViewContainer>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
              </PopupViewContainer>
            )}
          </Popup>
        </GameRulesView>
      </PlayingViewContainer>
    )
  }
}

export default PlayingView
