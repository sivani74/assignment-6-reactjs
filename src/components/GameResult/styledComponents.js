import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  flex-wrap: wrap;
  color: #ffffff;
  font-family: 'Bree Serif';
`
export const GameButton = styled.button`
    border: none;
    background-color: transparent;
`
export const GameImage = styled.img`
    width: 150px;
    height: 150px;
    @media screen and (max-width: 576px) {
        width: 100px;
        height: 100px;
    }
`
export const ResultImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    @media screen and (max-width: 576px) {
        width: 30%;
    }
`
export const ResultName = styled.p`
    font-size: 20px;
    @media screen and (max-width: 576px) {
        font-size: 14px;
    }
`

export const ResultText = styled.p`
    font-size: 25px;
    @media screen and (max-width: 576px) {
        font-size: 16px;
    }
`

export const PlayAgainButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    padding: 10px;
    color: #223a5f;
`
