import logo from "../images/logo_w.png"


const Watch = ({ hour, minute, second }) => {
    const secondHandDeg = second * 6;
    const minuteHandDeg = minute * 6;
    const hourHandDeg = (hour * 30) +(minute/2);

    const secondHand = document.getElementById("secondHand")
    const minuteHand = document.getElementById("minuteHand")
    const hourHand = document.getElementById("hourHand")

    const secondHandRotation = { transform: `rotate(${secondHandDeg}deg)` }
    const minuteHandRotation = { transform: `rotate(${minuteHandDeg}deg)` }
    const hourHandRotation = { transform: `rotate(${hourHandDeg}deg)` }

    return (
        <>
            <div className="clock">
                <div className="numbers number1">
                    <p className="ps p1">1</p>
                </div>
                <div className="numbers number2">
                    <p className="ps p2">2</p>
                </div>
                <div className="numbers number3">
                    <p className="ps p3">3</p>
                </div>
                <div className="numbers number4">
                    <p className="ps p4">4</p>
                </div>
                <div className="numbers number5">
                    <p className="ps p5">5</p>
                </div>
                <div className="numbers number6">
                    <p className="ps p6">6</p>
                </div>
                <div className="numbers number7">
                    <p className="ps p7">7</p>
                </div>
                <div className="numbers number8">
                    <p className="ps p8">8</p>
                </div>
                <div className="numbers number9">
                    <p className="ps p9">9</p>
                </div>
                <div className="numbers number10">
                    <p className="ps p10">10</p>
                </div>
                <div className="numbers number11">
                    <p className="ps p11">11</p>
                </div>
                <div className="numbers number12">
                    <p className="ps p12">12</p>
                </div>

                <div className="hands secondHand" style={ secondHandRotation }></div>
                <div className="hands minuteHand" style={ minuteHandRotation }></div> 
                <div className="hands hourHand" style={ hourHandRotation }></div> 

                <div className="centercenter">

                <div className="logo-container">
                    <img src={logo} alt="grossesbewirken" className="logo"/>
                    <p>grossesbewirken</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Watch;