import { useNavigate } from "react-router-dom";
import { useRef, useState} from "react";


// components
import Menu from "./Menu";


const Stopwatch = () => {
    const navigate = useNavigate()

    const [stopwatch, setStopwatch] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const fillStopwatch = useRef(0)


    // START
    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        const clickedTime = new Date().getTime()
        fillStopwatch.current = setInterval(() => {
            setStopwatch(new Date().getTime() - clickedTime)
        })
        console.log("started at ", clickedTime);
        console.log("stopwatch: ", stopwatch);
    }

    // PAUSE
    const handlePause = () => {
        clearInterval(fillStopwatch.current)
        setIsPaused(false)
    }

    // RESUME
    const handleResume = () => {
        setIsPaused(true)
        const clickedTime = new Date().getTime()
        fillStopwatch.current = setInterval(() => {
            setStopwatch((new Date().getTime() + stopwatch) - clickedTime)
        })
        console.log("resumed at ", clickedTime);
        console.log("stopwatch: ", stopwatch);
    }

    // RESET
    const handleReset = () => {
        setStopwatch(0)
        setIsActive(false)
        setIsPaused(false)
        clearInterval(fillStopwatch.current)
    }

    const stopwatchTxt = () => {
        const mil = `00${Math.floor( stopwatch )}`.slice(-3,-1)
        const sec = (Math.floor(stopwatch / 1000) % 60)
        const min = (Math.floor(stopwatch / 1000 / 60) % 60)
        const hour = (Math.floor(stopwatch / 1000 / 60 / 60))
        return (
            <>
                <div>
                    <p>stopwatch</p>
                </div>
                <div className="flex jcc">
                    <div className="col">
                        <h1>{ hour<10 ? "0"+hour : hour }</h1>
                        <p>hour</p>
                    </div>
                    <div>
                        <h1>:</h1>
                    </div>
                    <div className="col">
                        <h1>{ min<10 ? "0"+min : min }</h1>
                        <p>min</p>
                    </div>
                    <div>
                        <h1>:</h1>
                    </div>
                    <div className="col">
                        <h1>{ sec<10 ? "0"+sec : sec }</h1>
                        <p>sec</p>
                    </div>
                    <div>
                        <h1>,</h1>
                    </div>
                    <div className="col">
                        <h1>{ mil }</h1>
                        <p>mil</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <>{stopwatchTxt()}</>

            <div className='buttons'>
                {
                    !isActive && !isPaused ?
                    <button onClick={handleStart} >Start</button>
                    : (
                        isPaused ? 
                        <button onClick={handlePause}>Pause</button> :
                        <button onClick={handleResume}>Resume</button>
                        )
                    }
                <button onClick={handleReset} disabled={!isActive}>Reset</button>
            </div>
            < Menu />
        </>
    );
}

export default Stopwatch;