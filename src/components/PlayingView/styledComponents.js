import styled from 'styled-components'

export const PlayingViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #223a5f;
    padding: 20px;
`
export const GameRulesView = styled.div`
    align-self: flex-end;
    margin-top: auto;
    @media screen and (max-width: 576px) {
        margin-bottom: 40px;
    }
`

export const PopupViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    width: 40vw;
    background-color: #ffffff;
    padding: 20px;
`
export const PopupImage = styled.img`
    width: 100%;
    height: 90%;
    margin-top: auto;
`
