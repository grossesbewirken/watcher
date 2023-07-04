import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

//components
import Menu from "./Menu"

const Timer = () => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const counter = useRef()


    let [selectedHour, setSelectedHour] = useState(0)
    let [selectedMin, setSelectedMin] = useState(0)
    let [selectedSec, setSelectedSec] = useState(0)
    const selectedTime = selectedHour+selectedMin+selectedSec
    console.log("selectedTime: ", selectedTime);


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
        setCountdown(selectedTime)
        console.log("current countdown: " + countdown);
    }


    const clearInput = () => {
        let formSec = document.getElementById("sec");
        let formMin = document.getElementById("min");
        let formHour = document.getElementById("hour");
        if (formSec.value != "") {
            formSec.value = "";
        }
        if (formMin.value != "") {
            formMin.value = "";
        }
        if (formHour.value != "") {
            formHour.value = "";
        }
    }


    const handleStart = () => {
        setIsActive(true)
        const startTime = new Date().getTime()
        counter.current = setInterval(() => {
            setCountdown((startTime + countdown) - new Date().getTime())
        })
        console.log("started at ", startTime);
        console.log("countdown: ", countdown);
        clearInput()
    }

    const handleStop = () => {
        clearInterval(counter.current)
    }

    const handleReset = () => {
        setCountdown(0)
        setSelectedHour(0)
        setSelectedMin(0)
        setSelectedSec(0)
        setIsActive(false)
        clearInterval(counter.current)
        clearInput()
    }

    const timerTxt = () => {
        const mil = `00${Math.floor( countdown )}`.slice(-3,-1)
        const sec = (Math.floor(countdown / 1000) % 60)
        const min = (Math.floor(countdown / 1000 / 60) % 60)
        const hour = (Math.floor(countdown / 1000 / 60 / 60))
        return (
            <>
                <div className="flex jcsb g card">
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
            <p>timer</p>
            <>{timerTxt()}</>

            <p>eingabe</p>
            <div className="card">
                <div className="flex">
                    <form onClick={handleTimer} className="flex">
                        <div>
                            <input
                                type="number"
                                name="hour"
                                id="hour"
                                min="0"
                                onChange={handleHour}
                            />
                            <p>const selectedHour:</p>
                            <p>{selectedHour}</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                name="min"
                                id="min"
                                min="0"
                                onChange={handleMin}
                            />
                            <p>const selectedMin:</p>
                            <p>{selectedMin}</p>
                        </div>
                        <div>
                            <input
                                type="number"
                                name="sec"
                                id="sec"
                                min="0"
                                onChange={handleSec}
                            />
                            <p>const selectedSec:</p>
                            <p>{selectedSec}</p>
                        </div>
                        
                    </form>
                </div>
                <div>
                    <p>selectedTime</p>
                    <p>{selectedTime}</p>
                </div>
            </div>


            <p>action buttons</p>
            <div className="card">
                <div className='buttons'>
                    {!isActive ?
                        <button onClick={handleStart}>Start</button> :
                        <button onClick={handleStop}>Stop</button>
                    }
                <button onClick={handleReset} disabled={!isActive}>Reset</button>
                </div>
            </div>
            <Menu/>
        </div>
    );
}

export default Timer;