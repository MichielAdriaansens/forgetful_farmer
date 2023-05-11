import { useEffect } from "react";

function Test() {

    useEffect(() => {
        function LemmeSee(e) {
            if (e.code === 'Enter') {
                console.log('enter pwessed');
            }
        }

        document.addEventListener('keypress', LemmeSee);

        return () => { document.removeEventListener('keypress', LemmeSee); };
    }, []);
}

export default Test;