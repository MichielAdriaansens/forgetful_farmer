import '../styles/App.css';
import '../styles/Game.css';
import { useEffect, useState } from 'react';
import Dialogue from './Dialogue';
import dialogueList from './dialogueList';
import UserInput from './UserInput';

function Game() {

    const [gameState, setGameState] = useState(0);
    const [text, setText] = useState(null);
    const [awnser, setAwnser] = useState(null);
    const [awnseredCorrect, setAwnseredCorrect] = useState(false);

    function onClickHandler() {
        let curState = gameState;

        //gamestates 0 & 1 = introduction/tutorial 
        if (gameState <= 1) {
            setGameState(curState += 1);
        }

        //start gameLoop..
        if (gameState === 1) {
            generateQuestion();
        }
    }

    //generate question
    function generateQuestion() {

        //fix repeat issue..
        let questionId = Math.floor((Math.random()) * dialogueList.length)

        setText(dialogueList[questionId].question.toString());

        //users awnser gets checked in UserInputs Component
        setAwnser(dialogueList[questionId].awnser.toString());
    }

    function checkState() {
        if (gameState === 3) {
            if (awnseredCorrect) {
                setText('✅ Bingo!');
            }
            else {
                setText(`❌ no, i don't think so!`);
            }
        }
        if (gameState === 2) {
            generateQuestion();
        }

    }
    useEffect(checkState, [gameState, awnseredCorrect])

    return (
        <>
            <div className={`gameUI ${gameState !== 2 && 'clickable'}`} onClick={onClickHandler}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/farmer_profile_pic.jpg`}
                    alt='farmer tinder profile img'
                    className='farmerPic'
                />
                <Dialogue state={gameState} curText={text} />
                {/* if game state 2 render input Component */}
            </div>
            {gameState >= 2 &&
                <UserInput
                    realAwnser={awnser}
                    setResult={setAwnseredCorrect}
                    setState={setGameState}
                    state={gameState}
                />
            }
        </>
    );
}

export default Game;