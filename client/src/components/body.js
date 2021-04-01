import React,{useState} from "react";
import parser from "html-react-parser";
import html2canvas from 'html2canvas';

const Body = () => {
    const [label1,setLabel1] = useState("")
    const [label11,setLabel11] = useState("")
    const [label12,setLabel12] = useState("")
    const [label2,setLabel2] = useState("")
    const [label21,setLabel21] = useState("")
    const [label22,setLabel22] = useState("")
    const [label3,setLabel3] = useState("")
    const [label31,setLabel31] = useState("")
    const [label32,setLabel32] = useState("")
    const [label5,setLabel5] = useState("")
    const [label51,setLabel51] = useState("")
    const [label52,setLabel52] = useState("")
    const [label6,setLabel6] = useState("")
    const [label61,setLabel61] = useState("")
    const [label62,setLabel62] = useState("")
    const [back,setBack] = useState(false)

    const onClick1 = () => {
        let check = document.getElementById("id1").classList.contains("hidden")
        if(check===true){
            document.getElementById("id1").className = "visible"
        }else{
            document.getElementById("id1").className = "hidden"
        }
    }
    const onClick2 = () => {
        let check = document.getElementById("id2").classList.contains("hidden")
        if(check===true){
            document.getElementById("id2").className = "visible"
        }else{
            document.getElementById("id2").className = "hidden"
        }
    }
    const onClick3 = () => {
        let check = document.getElementById("id3").classList.contains("hidden")
        if(check===true){
            document.getElementById("id3").className = "visible"
        }else{
            document.getElementById("id3").className = "hidden"
        }
    }
    const onClick5 = () => {
        let check = document.getElementById("id5").classList.contains("hidden")
        if(check===true){
            document.getElementById("id5").className = "visible"
        }else{
            document.getElementById("id5").className = "hidden"
        }
    }
    const onClick6 = () => {
        let check = document.getElementById("id6").classList.contains("hidden")
        if(check===true){
            document.getElementById("id6").className = "visible"
        }else{
            document.getElementById("id6").className = "hidden"
        }
    }

    const getId1 = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "16hat":
                setLabel1("메이플 16주년")
                setLabel11(`<img src="./pics/16hat.png" alt="hat" class="hat16" />`)
                setLabel12(`<img src="./pics/16hat.png" alt="hat" class="hat16" />`)
                break;
            case "17hat":
                setLabel1("딘라벨 17기")
                setLabel11(`<img src="./pics/17hat.png" alt="hat" class="hat" />`)
                setLabel12(`<img src="./pics/17hat.png" alt="hat" class="hat" />`)
                break;
            case "19hat":
                setLabel1("딘라벨 19기")
                setLabel11(`<img src="./pics/19hat.png" alt="hat" class="hat19" />`)
                setLabel12(`<img src="./pics/19hat.png" alt="hat" class="hat19" />`)
                break;
            case "21hat":
                setLabel1("딘라벨 21기")
                setLabel11(`<img src="./pics/21hat1.png" alt="hat" class="hat21" />`)
                setLabel12(`<img src="./pics/21hat2.png" alt="hat" class="hat21" />`)
                break;
            case "hat":
                setLabel1("")
                setLabel11(``)
                setLabel12(``)
                break;
            default:
                setLabel1(``)
                setLabel11(``)
                setLabel12(``)
        }
    }

    const getId2 = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "16weapon":
                setLabel2("메이플 16주년")
                setLabel21(`<img src="./pics/16weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/16weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "17weapon":
                setLabel2("딘라벨 17기")
                setLabel21(`<img src="./pics/17weapon.png" alt="weapon" class="weapon" />`)
                setLabel22(`<img src="./pics/17weapon.png" alt="weapon" class="weapon" />`)
                break;
            case "19weapon":
                setLabel2("딘라벨 19기")
                setLabel21(`<img src="./pics/19weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/19weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "21weapon":
                setLabel2("딘라벨 21기")
                setLabel21(`<img src="./pics/21weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/21weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "weapon":
                setLabel2("")
                setLabel21(``)
                setLabel22(``)
                break;
            default:
                setLabel2(``)
                setLabel21(``)
                setLabel22(``)
        }
    }

    const getId3 = (e) => {
        // 의상
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "16cloth":
                setLabel3("메이플 16주년")
                setLabel31(`<img src="./pics/16cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/16cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "17cloth":
                setLabel3("딘라벨 17기")
                setLabel31(`<img src="./pics/17cloth1.png" alt="cloth" class="cloth" />`)
                setLabel32(`<img src="./pics/17cloth2.png" alt="cloth" class="cloth" />`)
                break;
            case "19cloth":
                setLabel3("딘라벨 19기")
                setLabel31(`<img src="./pics/19cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/19cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "21cloth":
                setLabel3("딘라벨 21기")
                setLabel31(`<img src="./pics/21cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/21cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "cloth":
                setLabel3("")
                setLabel31(``)
                setLabel32(``)
                break;
            default:
                setLabel3(``)
                setLabel31(``)
                setLabel32(``)
        }
    }

    const getId5 = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "16shoes":
                setLabel5("메이플 16주년")
                setLabel51(`<img src="./pics/16shoes.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/16shoes.png" alt="shoes" class="shoes2" />`)
                break;
            case "17shoes":
                setLabel5("딘라벨 17기")
                setLabel51(`<img src="./pics/17shoes.png" alt="shoes" class="shoes" />`)
                setLabel52(`<img src="./pics/17shoes.png" alt="shoes" class="shoes" />`)
                break;
            case "19shoes":
                setLabel5("딘라벨 19기")
                setLabel51(`<img src="./pics/19shoes.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/19shoes.png" alt="shoes" class="shoes2" />`)
                break;
            case "21shoes":
                setLabel5("딘라벨 21기")
                setLabel51(``)
                setLabel52(``)
                break;
            case "shoes":
                setLabel5("")
                setLabel51(``)
                setLabel52(``)
                break;
            default:
                setLabel5(``)
                setLabel51(``)
                setLabel52(``)
        }
    }

    const getId6 = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "16cape":
                setLabel6("메이플 16주년")
                setLabel61(`<img src="./pics/16cape.png" alt="cape" class="cape16" />`)
                setLabel62(`<img src="./pics/16cape.png" alt="cape" class="cape16" />`)
                break;
            case "17cape":
                setLabel6("딘라벨 17기")
                setLabel61(`<img src="./pics/17cape.png" alt="cape" class="cape" />`)
                setLabel62(`<img src="./pics/17cape.png" alt="cape" class="cape" />`)
                break;
            case "19cape":
                setLabel6("딘라벨 19기")
                setLabel61(`<img src="./pics/19cape.png" alt="cape" class="cape19" />`)
                setLabel62(`<img src="./pics/19cape.png" alt="cape" class="cape19" />`)
                break;
            case "21cape":
                setLabel6("딘라벨 21기")
                setLabel61(`<img src="./pics/21cape1.png" alt="cape" class="cape21" />`)
                setLabel62(`<img src="./pics/21cape2.png" alt="cape" class="cape21" />`)
                break;
            case "cape":
                setLabel6("딘라벨 21기")
                setLabel61(``)
                setLabel62(``)
                break;
            default:
                setLabel6(``)
                setLabel61(``)
                setLabel62(``)
        }
    }

    const handleBackground = () => {
        if(back===true){
            setBack(false)
        }else{
            setBack(true)
        }
    }

    const saveimage1 = () => {
        document.getElementById("id1").className = "hidden";
        document.getElementById("id2").className = "hidden";
        document.getElementById("id3").className = "hidden";
        document.getElementById("id5").className = "hidden";
        document.getElementById("id6").className = "hidden";
        html2canvas(document.getElementById("getshot")).then(canvas => {
            console.log(canvas);
            let dataurl = canvas.toDataURL('image/png');
            let blobBin = atob(dataurl.split(',')[1]);
            let array = [];
            for(let i = 0; i < blobBin.length; i++) {
                array.push(blobBin.charCodeAt(i));
            }
            let returnfile=new Blob([new Uint8Array(array)], {type: 'image/png'});
            console.log(returnfile)
            // download
            const url = window.URL.createObjectURL(returnfile)
            const a = document.createElement("a")
            a.href = url
            a.download = `딘라벨.png`
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url);
        })
    }

    return (
        <div className="body">
            <div className="temp_toggle">
                <div className="backtoggle">
                    <label htmlFor="filter_id_title">배경</label>
                    <div className="check_slider_reverse">
                        <input type="checkbox" id="filter_id_title" name="user_bl" className="check_input_reverse" onChange={handleBackground} />
                        <label htmlFor="filter_id_title"></label>
                    </div>
                </div>
            </div>
            <div className="body_level1" id="getshot">
                {/* <div id="getshot"></div> */}
                <div className="showroom">
                    {
                        back?<img src="./pics/background2.png" className="background" alt="background" />:""
                    }
                    <img src="./pics/manikinman2.png" className="manikin" alt="manikin" />
                    {
                        parser(label11)
                    }
                    {
                        parser(label21)
                    }
                    {
                        parser(label31)
                    }
                    {
                        parser(label51)
                    }
                    {
                        parser(label61)
                    }
                    <span>남자 코디</span>
                </div>
                <div className="showroom">
                    <img src="./pics/manikinwoman2.png" className="manikin" alt="manikin" />
                    {
                        parser(label11)
                    }
                    {
                        parser(label21)
                    }
                    {
                        parser(label32)
                    }
                    {
                        parser(label52)
                    }
                    {
                        parser(label62)
                    }
                    <span>여자 코디</span>
                </div>
            </div>
            <div className="body_level2">
                <span>Options</span>
                <ul>
                    <li><span>모자</span><span>{label1}</span></li>
                    <div>
                        <span onClick={onClick1}>모자 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id1">
                            <div className="minibox" onClick={getId1} id="16hat">
                                <div>
                                    <img src="./pics/16hat.png" alt="dinlabel_16" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="17hat">
                                <div>
                                    <img src="./pics/17hat.png" alt="dinlabel_17" />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="19hat">
                                <div>
                                    <img src="./pics/19hat.png" alt="dinlabel_19" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="21hat">
                                <div>
                                    <img src="./pics/21hat1.png" alt="dinlabel_21" />
                                    {/* <img src="./pics/21hat2.png" alt="dinlabel_21" /> */}
                                </div>
                                <span>21기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="hat">
                                <div>
                                </div>
                                <span>벗기기</span>
                            </div>
                        </div>
                    </div>
                    <li><span>무기</span><span>{label2}</span></li>
                    <div>
                        <span onClick={onClick2}>무기 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id2">
                            <div className="minibox" onClick={getId2} id="16weapon">
                                <div>
                                    <img src="./pics/16weapon.png" alt="dinlabel_16" className="small" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="17weapon">
                                <div>
                                    <img src="./pics/17weapon.png" alt="dinlabel_17" />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="19weapon">
                                <div>
                                    <img src="./pics/19weapon.png" alt="dinlabel_19" className="small" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="21weapon">
                                <div>
                                    <img src="./pics/21weapon.png" alt="dinlabel_21" className="small" />
                                </div>
                                <span>21기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="weapon">
                                <div>
                                </div>
                                <span>벗기기</span>
                            </div>
                        </div>
                    </div>
                    <li><span>의상</span><span>{label3}</span></li>
                    <div>
                        <span onClick={onClick3}>의상 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id3">
                            <div className="minibox" onClick={getId3} id="16cloth">
                                <div>
                                    <img src="./pics/16cloth1.png" alt="dinlabel_16" className="two" />
                                    <img src="./pics/16cloth2.png" alt="dinlabel_16" className="two" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="17cloth">
                                <div>
                                    <img src="./pics/17cloth1.png" alt="dinlabel_17" />
                                    <img src="./pics/17cloth2.png" alt="dinlabel_17" />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="19cloth">
                                <div>
                                    <img src="./pics/19cloth1.png" alt="dinlabel_19" className="two" />
                                    <img src="./pics/19cloth2.png" alt="dinlabel_19" className="two" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="21cloth">
                                <div>
                                    <img src="./pics/21cloth1.png" alt="dinlabel_21" className="two" />
                                    <img src="./pics/21cloth2.png" alt="dinlabel_21" className="two" />
                                </div>
                                <span>21기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="cloth">
                                <div>
                                </div>
                                <span>벗기기</span>
                            </div>
                        </div>
                    </div>
                    <li><span>신발</span><span>{label5}</span></li>
                    <div>
                        <span onClick={onClick5}>신발 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id5">
                            <div className="minibox" onClick={getId5} id="16shoes">
                                <div>
                                    <img src="./pics/16shoes.png" alt="dinlabel_16" className="small" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="17shoes">
                                <div>
                                    <img src="./pics/17shoes.png" alt="dinlabel_17" />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="19shoes">
                                <div>
                                    <img src="./pics/19shoes.png" alt="dinlabel_19" className="small" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="21shoes">
                                <div>
                                    없어요
                                </div>
                                <span>21기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="shoes">
                                <div>
                                </div>
                                <span>벗기기</span>
                            </div>

                        </div>
                    </div>
                    <li><span>망토</span><span>{label6}</span></li>
                    <div>
                        <span onClick={onClick6}>망토 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id6">
                            <div className="minibox" onClick={getId6} id="16cape">
                                <div>
                                    <img src="./pics/16cape.png" alt="dinlabel_16" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="17cape">
                                <div>
                                    <img src="./pics/17cape.png" alt="dinlabel_17" />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="19cape">
                                <div>
                                    <img src="./pics/19cape.png" alt="dinlabel_19" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="21cape">
                                <div>
                                    <img src="./pics/21cape.png" alt="dinlabel_21" />
                                </div>
                                <span>21기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="cape">
                                <div>
                                </div>
                                <span>벗기기</span>
                            </div>

                        </div>
                    </div>
                </ul>
                <span onClick={saveimage1}>사진 저장하기</span>
            </div>
        </div>
    )
}

export default Body;
