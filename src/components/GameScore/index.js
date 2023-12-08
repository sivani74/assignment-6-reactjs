import {
  GameScoreContainer,
  NameContainer,
  Names,
  ScoreCard,
  ScoreValue,
} from './styledComponents'

const GameScore = props => {
  const {score} = props

  return (
    <GameScoreContainer>
      <NameContainer>
        <Names>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
          <br />
        </Names>
      </NameContainer>
      <ScoreCard>
        <p>Score</p>
        <ScoreValue>{score}</ScoreValue>
      </ScoreCard>
    </GameScoreContainer>
  )
}

export default GameScore
