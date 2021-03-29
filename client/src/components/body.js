import react from "react";

const Body = () => {
    const getDress = () => {
        console.log("aas")
    }


    return (
        <div className="body">
            <div className="body_level1">
                <div className="showroom">
                    <img src="./pics/manikin.png" alt="manikin" />
                    <span>남자 코디</span>
                </div>
                <div className="showroom">
                    <img src="./pics/manikin.png" alt="manikin" />
                    <span>여자 코디</span>
                </div>
            </div>
            <div className="body_level2">
                <span>Options</span>
                <ul>
                    <li><span>모자</span><span>딘라벨 17기</span></li>
                    <li><span>무기</span><span>딘라벨 17기</span></li>
                    <li><span>상의</span><span>딘라벨 17기</span></li>
                    <li><span>하의</span><span>딘라벨 17기</span></li>
                    <li><span>신발</span><span>딘라벨 17기</span></li>
                    <li><span>망토</span><span>딘라벨 17기</span></li>
                </ul>
                <span onClick={getDress}>적용하기</span>
            </div>
        </div>
    )
}

export default Body;
