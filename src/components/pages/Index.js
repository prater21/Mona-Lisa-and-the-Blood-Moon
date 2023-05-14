import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"

const Index = () => {
    const [click, setClick] = useState(false);
    console.log(click);
    return (
        <div className="index">
            <div className="title">
                <p className="title-1">MONA LISA</p>
                <p className="title-2">and the</p>
                <p className="title-3">BLOOD MOON</p>
            </div>
            <Link to="main"><img className="img-moon" onMouseOver={()=>{setClick(true)}} onMouseOut={()=>{setClick(false)}} src={process.env.PUBLIC_URL + "/imgs/mona-moon.png"} alt="" /></Link>
            <img className="img-background" src={process.env.PUBLIC_URL + "/imgs/mona1.jpeg"} alt=""/>
            {click && <span className="click-btn">Click</span>}

        </div>)
}

export default Index