import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


//components
import Watch from "./Watch";
import Menu from "./Menu";


const Main = () => {

    const date = new Date().toLocaleString('de-DE').split(",",1)
    const now = new Date().getTime()
    const [showDate, setShowDate] = useState(now)

    let hour = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)+2);
    let minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((now % (1000 * 60)) / 1000);
    let millisecond = Math.floor(now % 60)

    
    useEffect(() => {
        let update = setInterval(function () {
        setShowDate({...now})
        }, 100);
        return () => clearInterval(update)
    })

    return (
        <>
            <div className="card">
                <div className="centercenter">
                    < Watch hour={hour} minute={minute} second={second} />
                </div>
            </div>
            <div className="card">
                <p>{date}</p>
                <h1>
                    {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
                </h1>
            </div>
            < Menu />
        </>
    )
}

export default Main;