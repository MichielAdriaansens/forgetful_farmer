import '../styles/App.css';
import '../styles/Game.css';
import { useState, useEffect } from 'react';

function UserInput({ realAwnser, setResult, setState, state }) {
    const [userValue, setUserValue] = useState('');

    //to prevent keypress Events from useEffect & input prop running at the same time 
    const [keyPressCount, setKeyPressCount] = useState(0);

    function submitHandler() {
        if (state === 2) {
            checkUserAwnser();
        }
        else if (state === 3) {
            setState(2);
        }
        setUserValue("");
    }

    function checkUserAwnser() {
        if (userValue.toLowerCase() === realAwnser) {
            setResult(true);
        }
        else {
            setResult(false);
        }

        setState(3);
    }

    useEffect(() => {
        //console.log(state);
        document.addEventListener('keypress', keyDownHandler);

        const inputElement = document.getElementsByTagName('input')[0];
        if (state === 2) {
            inputElement.focus();
            setKeyPressCount(1)
        }

        function keyDownHandler(e) {
            if (e.code === 'Enter') {
                if (state === 3 && keyPressCount === 0) {
                    setState(2);
                }
                else {
                    setKeyPressCount(0);
                }
            }
        }

        return (() => { document.removeEventListener('keypress', keyDownHandler); })
    }, [state, setState, keyPressCount, setKeyPressCount]);

    return (
        <div className="gameUI userInput">
            <strong>your awnser:</strong>
            <div className='field'>
                {state === 2 &&
                    <input
                        type='text'
                        placeholder='type here'
                        onChange={(event) => { setUserValue(event.target.value) }}
                        value={userValue}
                        onKeyDown={(e) => {
                            if (e.code === 'Enter') {
                                console.log('pwessed at state 2');
                                submitHandler();
                            }
                        }}
                    />
                }

                <button className='clickable' onClick={submitHandler}>{state === 2 ? 'Submit' : 'Next'}</button>
            </div>
        </div>
    );
}

export default UserInput;