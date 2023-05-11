import { useRef, useEffect, useState } from "react";
import Matrix from './Matrix';

function Canvas() {
    const canvasRef = useRef(null);
    const [gotCanvas, setGotCanvas] = useState(false);

    useEffect(() => {
        if (canvasRef) {
            setGotCanvas(true);
        }
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        function resizeHandler() {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }
        window.addEventListener("resize", resizeHandler);
        // const context = canvasRef.current.getContext('2d');
        // context.fillRect(20, 80, 20, 20);
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{ border: '1px solid black' }}
                className="bg"
            />
            {gotCanvas ?
                <Matrix _canvas={canvasRef} /> : "static background"
            }

        </>);
}

export default Canvas;