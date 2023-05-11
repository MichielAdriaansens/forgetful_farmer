function Dialogue({ state, curText }) {
    function tutorial() {
        if (state === 0) {
            return (
                <>
                    Hello there kid...<br />
                    I lost my farm animals.
                    Can you help me find them?<br />
                </>);
        }
        else if (state === 1) {
            return (
                <>
                    Now, i'm really bad at remembering names.<br />
                    <br />
                    So i'll give you hints and you'll have to guess what animal i'm looking 👀 for.
                    Understood!!?
                </>);
        }
        else if (state >= 2) {
            return (
                <>{curText}</>
            );
        }
    }

    return (
        <p className='dialogue'>
            <strong>forgetful farmer:</strong> <br />
            {tutorial()}
        </p>
    )
}

export default Dialogue;