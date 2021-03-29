import React,{useState} from "react";

const Body = () => {
    const [weapon,setWeapon] = useState(false)
    const [cloth1,setCloth1] = useState(false)
    const [cloth2,setCloth2] = useState(false)
    const [cape,setCape] = useState(false)
    const [shoes,setShoes] = useState(false)
    const [hat,setHat] = useState(false)

    const getDress = () => {
        console.log("aas")
        setHat(true)
        setShoes(true)
        setCape(true)
        setCloth1(true)
        setCloth2(true)
        setWeapon(true)
    }


    // 80:55 = 70:x

    // x = 55 * y/80
    return (
        <div className="body">
            <div className="body_level1">
                <div className="showroom">
                    <img src="./pics/manikinman2.png" className="manikin" alt="manikin" />
                    <img src="./pics/background2.png" className="bakground" alt="manikin" />
                    {
                        hat?<img src="./pics/17hat.png" alt="hat" className="hat" />:""
                    }
                    {
                        cloth1?<img src="./pics/17cloth1.png" alt="cloth" className="cloth" />:""
                    }
                    {
                        weapon?<img src="./pics/17weapon.png" alt="weapon" className="weapon" />:""
                    }
                    {
                        cape?<img src="./pics/17cape.png" alt="cape" className="cape" />:""
                    }
                    {
                        shoes?<img src="./pics/17shoes.png" alt="shoes" className="shoes" />:""
                    }
                    <span>남자 코디</span>
                </div>
                <div className="showroom">
                    <img src="./pics/manikinwoman2.png" className="manikin" alt="manikin" />
                    {/* <img src="./pics/background2.png" className="bakground" alt="manikin" /> */}
                    {
                        hat?<img src="./pics/17hat.png" alt="hat" className="hat" />:""
                    }
                    {
                        cloth1?<img src="./pics/17cloth2.png" alt="cloth" className="cloth" />:""
                    }
                    {
                        weapon?<img src="./pics/17weapon.png" alt="weapon" className="weapon" />:""
                    }
                    {
                        cape?<img src="./pics/17cape.png" alt="cape" className="cape" />:""
                    }
                    {
                        shoes?<img src="./pics/17shoes.png" alt="shoes" className="shoes" />:""
                    }
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
