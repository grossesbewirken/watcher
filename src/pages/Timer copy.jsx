import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect} from "react";



const Timer = () => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const counter = useRef()


    const [selectedHour, setSelectedHour] = useState(0)
    const [selectedMin, setSelectedMin] = useState(0)
    const [selectedSec, setSelectedSec] = useState(0)
    console.log("selectedHour:", selectedHour);
    console.log("selectedMin:",selectedMin);
    console.log("selectedSec:",selectedSec);


    const handleHour = () => {
        setSelectedHour(event.target.value*1000*60*60)
    }
    const handleMin = () => {
        setSelectedMin(event.target.value*1000*60)
    }
    const handleSec = () => {
        setSelectedSec(event.target.value*1000)
    }
    const handleTimer = () => {
        setCountdown(selectedHour + selectedMin + selectedSec)
    }
    console.log("current countdown: "+countdown);


    const handleStart = () => {
        setIsActive(true)
        const startTime = new Date().getTime()
        counter.current = setInterval(() => {
            setCountdown((startTime + countdown) - new Date().getTime())
        })
        console.log("started at ", startTime);
        console.log("countdown: ", countdown);
    }

    const handleStop = () => {
        clearInterval(counter.current)
    }

    const handleReset = () => {
        setCountdown(0)
        setIsActive(false)
        clearInterval(counter.current)
    }

    const timerTxt = () => {
        const mil = `00${Math.floor( countdown )}`.slice(-3,-1)
        const sec = (Math.floor(countdown / 1000) % 60)
        const min = (Math.floor(countdown / 1000 / 60) % 60)
        const hour = (Math.floor(countdown / 1000 / 60 / 60))
        return (
            <>
                <div>
                    <p>timer</p>
                </div>
                <div className="flex jcsb g">
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
        <div>
            <>{timerTxt()}</>
            <div className="card">
                <div className="flex">
                    <form onClick={handleTimer} className="flex">
                        <div>
                            <input
                                type="number"
                                name="hour"
                                id="hour"
                                placeholder="hour"
                                min="0"
                                max="23"
                                onChange={handleHour}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="min"
                                id="min"
                                placeholder="min"
                                min="0"
                                max="59"
                                onChange={handleMin}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                name="sec"
                                id="sec"
                                placeholder="sec"
                                min="1"
                                max="59"
                                onChange={handleSec}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className="card">
                <div className='buttons'>
                    {!isActive ?
                        <button onClick={handleStart}>Start</button> :
                        <button onClick={handleStop}>Stop</button>
                    }
                <button onClick={handleReset} disabled={!isActive}>Reset</button>
                </div>
            </div>

            <div className="card">
                <button onClick={() => navigate("/")}>back</button>
            </div>
        </div>
    );
}

export default Timer;