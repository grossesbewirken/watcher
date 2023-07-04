import { useNavigate } from "react-router-dom";


//react icons
import { BiStopwatch as Stop } from "react-icons/bi"
import { MdOutlineAvTimer as Timer } from "react-icons/md"
import { AiOutlineClockCircle as Clock } from "react-icons/ai"


const Menu = () => {
    const navigate = useNavigate()
    
    return (
        <div className="card flex jcc">
            <button onClick={ () => navigate("/stopwatch") }>
                <div>
                    <h2><Stop /></h2>
                    <p>stopwatch</p>
                </div>
            </button>
            <button onClick={ () => navigate("/") }>
                <div>
                    <h2><Clock /></h2>
                    <p>clock</p>
                </div>
            </button>
            <button onClick={ () => navigate("/timer") }>
                <div>
                    <h2><Timer /></h2>
                    <p>timer</p>
                </div>
            </button>
        </div >
    )
}

export default Menu;