import React from "react";

const Navi = () => {

    const onClick = () => {
        let check = document.getElementById("navi_id").classList.contains("hidden")
        if(check===true){
            document.getElementById("navi_id").className = "visible"
        }else{
            document.getElementById("navi_id").className = "hidden"
        }
    }

    const goto1 = () => {
        window.location.href="https://www.youtube.com/channel/UCKYdD83f363lIzcAwwhB-_A";
    }

    const goto2 = () => {
        window.location.href="https://www.twitch.tv/nj622";
    }

    const goto3 = () => {
        window.location.href="https://blog.naver.com/nj622";
    }

    return (
        <div className="navibar">
            <div className="navitop">
                <span onClick={onClick} ><i className="xi-bars xi-x"></i></span>
                <span>Maple Din-Label Coordination</span>
                <span></span>
            </div>
            <div className="hidden" id="navi_id">
                <span>πλμ½ μ¦κ²¨μ°ΎκΈ°π</span>
                <div onClick={goto1}>
                    <img src="./pics/youtube.png" alt="youtube" />
                    <span>λμ½ μ νλΈ μ±λμλλ€ :)</span>
                </div>
                <div onClick={goto2}>
                    <img src="./pics/twitch.png" alt="youtube" />
                    <span>λμ½ νΈμμΉ μ±λμλλ€ :)</span>
                </div>
                {/* <div>
                    <img src="./pics/donation2.png" alt="youtube" />
                    <span>νΈμ λλ€μ΄μμλλ€! ν­μ κ°μ¬ν©λλ€β</span>
                </div>
                <div>
                    <img src="./pics/donation.png" alt="youtube" />
                    <span>ν¬λ€μ΄μ λλ€μ΄μμλλ€! ν­μ κ°μ¬ν©λλ€β</span>
                </div> */}
                <div onClick={goto3}>
                    <img src="./pics/blog.png" alt="youtube" />
                    <span>μλ£λ μ΄λ―Έμ§ μ¬λ¦¬λ κ³΅κ°μλλ€ :)</span>
                </div>

            </div>
        </div>
    )
}

export default Navi;