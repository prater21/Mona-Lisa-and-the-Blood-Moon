import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css"

const Index = () => {
    const [click, setClick] = useState(false);
    const title = useRef();
    const dinerImg = useRef();
    let cnt = 1;

    const clickMona= () => {
        let scale = 1 + 0.02 * cnt;
        cnt++;
        if (cnt <= 11)
            dinerImg.current.style.transform = `scale(${scale})`;
    }

    const mouseOutMona = () => {
        dinerImg.current.style.transform = "scale(1)";
        cnt = 0;
        title.current.classList.remove("red")
    }

    return (
        <div className="index">
            <div className="title" ref={title}>
                <p className="title-1">MONA LISA</p>
                <p className="title-2">and the</p>
                <p className="title-3">BLOOD MOON</p>
            </div>
            <Link to="main">
                <img className="img-moon"
                    onMouseOver={() => { setClick(true) }}
                    onMouseOut={() => { setClick(false) }}
                    src={process.env.PUBLIC_URL + "/imgs/mona-moon.png"} alt="" />
            </Link>
            <img className="img-background" src={process.env.PUBLIC_URL + "/imgs/mona1.jpeg"} alt="" />
            <div className="img-diner" >
                <img  ref={dinerImg} src={process.env.PUBLIC_URL + "/imgs/diner.png"} alt="" />
            </div>
            <div className="img-mona">
                <img
                    onClick={clickMona}
                    onMouseOver={() => {title.current.classList.add("red");}}
                    onMouseOut={mouseOutMona}
                    src={process.env.PUBLIC_URL + "/imgs/mona.png"} alt="" />
            </div>
            {click && <span className="click-btn">Click</span>}

        </div>)
}

export default Index