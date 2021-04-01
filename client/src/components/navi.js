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
                <span>💜딘썽 즐겨찾기💜</span>
                <div onClick={goto1}>
                    <img src="./pics/youtube.png" alt="youtube" />
                    <span>딘썽 유튜브 채널입니다 :)</span>
                </div>
                <div onClick={goto2}>
                    <img src="./pics/twitch.png" alt="youtube" />
                    <span>딘썽 트위치 채널입니다 :)</span>
                </div>
                {/* <div>
                    <img src="./pics/donation2.png" alt="youtube" />
                    <span>트윕 도네이션입니다! 항상 감사합니다★</span>
                </div>
                <div>
                    <img src="./pics/donation.png" alt="youtube" />
                    <span>투네이션 도네이션입니다! 항상 감사합니다★</span>
                </div> */}
                <div onClick={goto3}>
                    <img src="./pics/blog.png" alt="youtube" />
                    <span>자료나 이미지 올리는 공간입니다 :)</span>
                </div>

            </div>
        </div>
    )
}

export default Navi;