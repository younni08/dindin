import React,{useState} from "react";
import parser from "html-react-parser";
import html2canvas from 'html2canvas';

const Body = () => {
    const [manikin1,setManikin1] = useState(`<img src="./pics/멍한 눈.png" class="manikin" alt="manikin" />`)
    const [manikin2,setManikin2] = useState(`<img src="./pics/졸린 조용눈.png" class="manikin" alt="manikin" />`)
    const [hair11,sethair1] = useState(`<img src="./pics/포숑.png" alt="cape" class="haire" />`)
    const [hair21,sethair21] = useState(`<img src="./pics/깜찍 뿔뿔이.png" alt="cape" class="haire" />`)
    const [hair22,sethair22] = useState(``)

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
    const [label8,setLabel8] = useState("")
    const [label9,setLabel9] = useState("")
    const [back,setBack] = useState(false)
    const [labelback,setLabelback] = useState("")
    const [labelback1,setLabelback1] = useState(`<img src="./pics/background2.png" alt="hat" class="background" />`)

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
    const onClick7 = () => {
        let check = document.getElementById("id7").classList.contains("hidden")
        if(check===true){
            document.getElementById("id7").className = "visible"
        }else{
            document.getElementById("id7").className = "hidden"
        }
    }
    const onClick8 = () => {
        let check = document.getElementById("id8").classList.contains("hidden")
        if(check===true){
            document.getElementById("id8").className = "visible"
        }else{
            document.getElementById("id8").className = "hidden"
        }
    }
    const onClick9 = () => {
        let check = document.getElementById("id9").classList.contains("hidden")
        if(check===true){
            document.getElementById("id9").className = "visible"
        }else{
            document.getElementById("id9").className = "hidden"
        }
    }

    const getback = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "back1":
                setLabelback("")
                setLabelback1(`<img src="./pics/background1.png" alt="hat" class="background" />`)
                break;
            case "back2":
                setLabelback("")
                setLabelback1(`<img src="./pics/background2.png" alt="hat" class="background" />`)
                break;
            case "back3":
                setLabelback("")
                setLabelback1(`<img src="./pics/background3.png" alt="hat" class="background" />`)
                break;
            case "back4":
                setLabelback("")
                setLabelback1(`<img src="./pics/background4.png" alt="hat" class="background" />`)
                break;
            case "back5":
                setLabelback("")
                setLabelback1(`<img src="./pics/background5.png" alt="hat" class="background" />`)
                break;
            case "back6":
                setLabelback("")
                setLabelback1(`<img src="./pics/background6.png" alt="hat" class="background" />`)
                break;
            case "back7":
                setLabelback("")
                setLabelback1(`<img src="./pics/background7.png" alt="hat" class="background" />`)
                break;
            case "back8":
                setLabelback("")
                setLabelback1(`<img src="./pics/background8.png" alt="hat" class="background" />`)
                break;
            default:
                setLabelback(`소멸의 여로`)
                setLabelback1(`<img src="./pics/background2.png" alt="hat" class="background" />`)
        }
    }

    const getId1 = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "2hat":
                setLabel1("딘라벨 2기")
                setLabel11(`<img src="./pics/2hat.png" alt="hat" class="hat2" />`)
                setLabel12(`<img src="./pics/2hat.png" alt="hat" class="hat2" />`)
                break;
            case "3hat":
                setLabel1("딘라벨 3기")
                setLabel11(`<img src="./pics/3hat.png" alt="hat" class="hat16" />`)
                setLabel12(`<img src="./pics/3hat.png" alt="hat" class="hat16" />`)
                break;
            case "4hat":
                setLabel1("딘라벨 4기")
                setLabel11(`<img src="./pics/4hat.png" alt="hat" class="hat4" />`)
                setLabel12(`<img src="./pics/4hat.png" alt="hat" class="hat4" />`)
                break;
            case "8hat":
                setLabel1("딘라벨 8기")
                setLabel11(`<img src="./pics/8hat1.png" alt="hat" class="hat16" />`)
                setLabel12(`<img src="./pics/8hat2.png" alt="hat" class="hat16" />`)
                break;
            case "9hat":
                setLabel1("딘라벨 9기")
                setLabel11(`<img src="./pics/9hat1.png" alt="hat" class="hat16" />`)
                setLabel12(`<img src="./pics/9hat2.png" alt="hat" class="hat16" />`)
                break;
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
                case "20hat":
                setLabel1("딘라벨 20기")
                setLabel11(`<img src="./pics/20hat1.png" alt="hat" class="hat20" />`)
                setLabel12(`<img src="./pics/20hat2.png" alt="hat" class="hat20" />`)
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
            case "2weapon":
                setLabel2("딘라벨 2기")
                setLabel21(`<img src="./pics/2weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/2weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "3weapon":
                setLabel2("딘라벨 3기")
                setLabel21(`<img src="./pics/3weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/3weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "4weapon":
                setLabel2("딘라벨 4기")
                setLabel21(``)
                setLabel22(``)
                break;
            case "8weapon":
                setLabel2("딘라벨 8기")
                setLabel21(``)
                setLabel22(``)
                break;
            case "9weapon":
                setLabel2("딘라벨 9기")
                setLabel21(`<img src="./pics/9weapon1.png" alt="weapon" class="weapon9" />`)
                setLabel22(`<img src="./pics/9weapon2.png" alt="weapon" class="weapon9" />`)
                break;
            case "16weapon":
                setLabel2("메이플 16주년")
                setLabel21(`<img src="./pics/16weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/16weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "17weapon":
                setLabel2("딘라벨 17기")
                setLabel21(`<img src="./pics/17weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/17weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "19weapon":
                setLabel2("딘라벨 19기")
                setLabel21(`<img src="./pics/19weapon.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/19weapon.png" alt="weapon" class="weapon2" />`)
                break;
            case "20weapon":
                setLabel2("딘라벨 20기")
                setLabel21(`<img src="./pics/20weapon1.png" alt="weapon" class="weapon2" />`)
                setLabel22(`<img src="./pics/20weapon2.png" alt="weapon" class="weapon2" />`)
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
            case "2cloth":
                setLabel3("딘라벨 2기")
                setLabel31(`<img src="./pics/2cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/2cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "3cloth":
                setLabel3("딘라벨 3기")
                setLabel31(`<img src="./pics/3cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/3cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "4cloth":
                setLabel3("딘라벨 4기")
                setLabel31(`<img src="./pics/4cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/4cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "8cloth":
                setLabel3("딘라벨 8기")
                setLabel31(`<img src="./pics/8cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/8cloth2.png" alt="cloth" class="cloth2" />`)
                break;
            case "9cloth":
                setLabel3("딘라벨 9기")
                setLabel31(`<img src="./pics/9cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/9cloth2.png" alt="cloth" class="cloth2" />`)
                break;
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
            case "20cloth":
                setLabel3("딘라벨 20기")
                setLabel31(`<img src="./pics/20cloth1.png" alt="cloth" class="cloth2" />`)
                setLabel32(`<img src="./pics/20cloth2.png" alt="cloth" class="cloth2" />`)
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
            case "2shoes":
                setLabel5("딘라벨 2기")
                setLabel51(`<img src="./pics/2shoes1.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/2shoes2.png" alt="shoes" class="shoes2" />`)
                break;
            case "3shoes":
                setLabel5("딘라벨 3기")
                setLabel51(`<img src="./pics/3shoes.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/3shoes.png" alt="shoes" class="shoes2" />`)
                break;
            case "4shoes":
                setLabel5("딘라벨 4기")
                setLabel51(``)
                setLabel52(``)
                break;
            case "8shoes":
                setLabel5("딘라벨 8기")
                setLabel51(`<img src="./pics/8shoes1.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/8shoes2.png" alt="shoes" class="shoes2" />`)
                break;
            case "9shoes":
                setLabel5("딘라벨 9기")
                setLabel51(`<img src="./pics/9shoes1.png" alt="shoes" class="shoes2" />`)
                setLabel52(`<img src="./pics/9shoes2.png" alt="shoes" class="shoes2" />`)
                break;
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
            case "20shoes":
                setLabel5("딘라벨 20기")
                setLabel51(``)
                setLabel52(``)
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
            case "2cape":
                setLabel6("딘라벨 2기")
                setLabel61(`<img src="./pics/2cape.png" alt="cape" class="cape2" />`)
                setLabel62(`<img src="./pics/2cape.png" alt="cape" class="cape2" />`)
                break;
            case "3cape":
                setLabel6("딘라벨 3기")
                setLabel61(``)
                setLabel62(``)
                break;
            case "4cape":
                setLabel6("딘라벨 4기")
                setLabel61(``)
                setLabel62(``)
                break;
            case "8cape":
                setLabel6("딘라벨 8기")
                setLabel61(``)
                setLabel62(``)
                break;
            case "9cape":
                setLabel6("딘라벨 9기")
                setLabel61(`<img src="./pics/9cape.png" alt="cape" class="cape19" />`)
                setLabel62(`<img src="./pics/9cape.png" alt="cape" class="cape19" />`)
                break;
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
            case "20cape":
                setLabel6("딘라벨 20기")
                setLabel61(`<img src="./pics/20cape1.png" alt="cape" class="cape20" />`)
                setLabel62(`<img src="./pics/20cape2.png" alt="cape" class="cape20" />`)
                break;
            case "21cape":
                setLabel6("딘라벨 21기")
                setLabel61(`<img src="./pics/21cape1.png" alt="cape" class="cape21" />`)
                setLabel62(`<img src="./pics/21cape2.png" alt="cape" class="cape21" />`)
                break;
            case "cape":
                setLabel6("")
                setLabel61(``)
                setLabel62(``)
                break;
            default:
                setLabel6(``)
                setLabel61(``)
                setLabel62(``)
        }
    }

    const getFace = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "face1":
                setLabel8("루시드")
                setManikin1(`<img src="./pics/루시드(남).png" alt="cape" class="manikin" />`)
                break;
            case "face2":
                setLabel8("루어")
                setManikin1(`<img src="./pics/루어(남).png" alt="cape" class="manikin" />`)
                break;
            case "face3":
                setLabel8("멍한 눈")
                setManikin1(`<img src="./pics/멍한 눈.png" alt="cape" class="manikin" />`)
                break;
            case "face4":
                setLabel8("조용한 눈")
                setManikin1(`<img src="./pics/조용눈.png" alt="cape" class="manikin" />`)
                break;
            case "face5":
                setLabel8("졸린 눈")
                setManikin1(`<img src="./pics/졸린 눈.png" alt="cape" class="manikin" />`)
                break;
            case "face6":
                setLabel8("졸린 조용한 눈")
                setManikin1(`<img src="./pics/졸린 조용눈.png" alt="cape" class="manikin" />`)
                break;
            case "face7":
                setLabel8("차분한 헤헤")
                setManikin1(`<img src="./pics/차분한 헤헤.png" alt="cape" class="manikin" />`)
                break;
            case "face8":
                setLabel8("차차")
                setManikin1(`<img src="./pics/차차(남).png" alt="cape" class="manikin" />`)
                break;
            case "face11":
                setLabel8("루시드")
                setManikin2(`<img src="./pics/루시드(여).png" alt="cape" class="manikin" />`)
                break;
            case "face21":
                setLabel8("루어")
                setManikin2(`<img src="./pics/루어(여).png" alt="cape" class="manikin" />`)
                break;
            case "face31":
                setLabel8("멍한 눈")
                setManikin2(`<img src="./pics/멍한 눈.png" alt="cape" class="manikin" />`)
                break;
            case "face41":
                setLabel8("조용한 눈")
                setManikin2(`<img src="./pics/조용눈.png" alt="cape" class="manikin" />`)
                break;
            case "face51":
                setLabel8("졸린 눈")
                setManikin2(`<img src="./pics/졸린 눈.png" alt="cape" class="manikin" />`)
                break;
            case "face61":
                setLabel8("졸린 조용한 눈")
                setManikin2(`<img src="./pics/졸린 조용눈.png" alt="cape" class="manikin" />`)
                break;
            case "face71":
                setLabel8("차분한 헤헤")
                setManikin2(`<img src="./pics/차분한 헤헤.png" alt="cape" class="manikin" />`)
                break;
            case "face81":
                setLabel8("차차")
                setManikin2(`<img src="./pics/차차(여).png" alt="cape" class="manikin" />`)
                break;
            default:
                setLabel8(`기본`)
                setManikin1(`<img src="./pics/manikinman2.png" className="manikin" alt="manikin" />`)
                setManikin2(`<img src="./pics/manikinwoman2.png" className="manikin" alt="manikin" />`)
        }
    }

    const gethair = (e) => {
        console.log(e.currentTarget.getAttribute("id"))
        switch(e.currentTarget.getAttribute("id")){
            case "hair1":
                setLabel9("깜찍 뿔뿔이")
                sethair21(`<img src="./pics/깜찍 뿔뿔이.png" alt="cape" class="haire" />`)
                sethair22(``)
                break;
            case "hair2":
                setLabel9("버블리")
                sethair21(`<img src="./pics/버블리(앞).png" alt="cape" class="haire" />`)
                sethair22(`<img src="./pics/버블리(뒤).png" alt="cape" class="haire2" />`)
                break;
            case "hair3":
                setLabel9("블링신비")
                sethair21(`<img src="./pics/블링신비(앞).png" alt="cape" class="haire" />`)
                sethair22(`<img src="./pics/블링신비(뒤).png" alt="cape" class="haire2" />`)
                break;
            case "hair4":
                setLabel9("블레이")
                sethair1(`<img src="./pics/블레이.png" alt="cape" class="haire" />`)
                break;
            case "hair5":
                setLabel9("페르")
                sethair1(`<img src="./pics/페르.png" alt="cape" class="haire" />`)
                break;
            case "hair6":
                setLabel9("포숑")
                sethair1(`<img src="./pics/포숑.png" alt="cape" class="haire" />`)
                break;
            default:
                setLabel9(`기본`)
                sethair1(`<img src="./pics/포숑.png" alt="cape" class="haire" />`)
                sethair21(`<img src="./pics/깜찍 뿔뿔이.png" alt="cape" class="haire" />`)
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
                        back?parser(labelback1):""
                    }
                    {/* <img src="./pics/manikinman2.png" className="manikin" alt="manikin" /> */}
                    {
                        parser(manikin1)
                    }
                    {
                        parser(hair11)
                    }
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
                    {/* <img src="./pics/manikinwoman2.png" className="manikin" alt="manikin" /> */}
                    {
                        parser(manikin2)
                    }
                    {
                        parser(hair21)
                    }
                    {
                        parser(hair22)
                    }
                    {
                        parser(label12)
                    }
                    {
                        parser(label22)
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
                    <li><span>헤어</span><span>{label9}</span></li>
                    <div>
                        <span onClick={onClick9}>헤어 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id9">
                            <div className="minibox" onClick={gethair} id="hair1">
                                <div>
                                    <img src="./pics/깜찍 뿔뿔이.png" alt="dinlabel_16" className="hair" />
                                </div>
                                <span className="face2">깜찍 뿔뿔이(여)</span>
                            </div>
                            <div className="minibox" onClick={gethair} id="hair2">
                                <div>
                                    <img src="./pics/버블리(앞).png" alt="dinlabel_17" className="hair"/>
                                </div>
                                <span className="face2">버블리(여)</span>
                            </div>
                            <div className="minibox" onClick={gethair} id="hair3">
                                <div>
                                    <img src="./pics/블링신비(앞).png" alt="dinlabel_19" className="hair" />
                                </div>
                                <span className="face2">블링 신비(여)</span>
                            </div>
                            <div className="minibox" onClick={gethair} id="hair4">
                                <div>
                                    <img src="./pics/블레이.png" alt="dinlabel_19" className="hair" />
                                </div>
                                <span className="face">블레이(남)</span>
                            </div>
                            <div className="minibox" onClick={gethair} id="hair5">
                                <div>
                                    <img src="./pics/페르.png" alt="dinlabel_19" className="hair" />
                                </div>
                                <span className="face">페르(남)</span>
                            </div>
                            <div className="minibox" onClick={gethair} id="hair6">
                                <div>
                                    <img src="./pics/포숑.png" alt="dinlabel_19" className="hair" />
                                </div>
                                <span className="face">포숑(남)</span>
                            </div>
                        </div>
                    </div>
                    <li><span>성형</span><span>{label8}</span></li>
                    <div>
                        <span onClick={onClick8}>성형 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id8">
                            <div className="minibox" onClick={getFace} id="face1">
                                <div>
                                    <img src="./pics/루시드(남).png" alt="dinlabel_16" className="face" />
                                </div>
                                <span  className="face">루시드(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face2">
                                <div>
                                    <img src="./pics/루어(남).png" alt="dinlabel_17" className="face"/>
                                </div>
                                <span  className="face">루어(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face3">
                                <div>
                                    <img src="./pics/멍한 눈.png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">멍한 눈(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face4">
                                <div>
                                    <img src="./pics/조용눈.png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">조용한 눈(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face5">
                                <div>
                                    <img src="./pics/졸린 눈.png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">졸린(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face6">
                                <div>
                                    <img src="./pics/졸린 조용눈.png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">졸린 조용한 눈(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face7">
                                <div>
                                    <img src="./pics/차분한 헤헤.png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">차분한 헤헤(남)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face8">
                                <div>
                                    <img src="./pics/차차(남).png" alt="dinlabel_19" className="face" />
                                </div>
                                <span  className="face">차차(남)</span>
                            </div>

                            <div className="minibox" onClick={getFace} id="face11">
                                <div>
                                    <img src="./pics/루시드(남).png" alt="dinlabel_16" className="face2" />
                                </div>
                                <span  className="face2">루시드(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face21">
                                <div>
                                    <img src="./pics/루어(남).png" alt="dinlabel_17" className="face2"/>
                                </div>
                                <span  className="face2">루어(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face31">
                                <div>
                                    <img src="./pics/멍한 눈.png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">멍한 눈(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face41">
                                <div>
                                    <img src="./pics/조용눈.png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">조용한 눈(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face51">
                                <div>
                                    <img src="./pics/졸린 눈.png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">졸린(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face61">
                                <div>
                                    <img src="./pics/졸린 조용눈.png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">졸린 조용한 눈(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face71">
                                <div>
                                    <img src="./pics/차분한 헤헤.png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">차분한 헤헤(여)</span>
                            </div>
                            <div className="minibox" onClick={getFace} id="face81">
                                <div>
                                    <img src="./pics/차차(남).png" alt="dinlabel_19" className="face2" />
                                </div>
                                <span  className="face2">차차(여)</span>
                            </div>
                        </div>
                    </div>
                    <li><span>모자</span><span>{label1}</span></li>
                    <div>
                        <span onClick={onClick1}>모자 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id1">
                            <div className="minibox" onClick={getId1} id="2hat">
                                <div>
                                    <img src="./pics/2hat.png" alt="dinlabel_2"/>
                                </div>
                                <span>2기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="3hat">
                                <div>
                                    <img src="./pics/3hat.png" alt="dinlabel_3" className="hat"/>
                                </div>
                                <span>3기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="4hat">
                                <div>
                                    <img src="./pics/4hat.png" alt="dinlabel_4"/>
                                </div>
                                <span>4기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="8hat">
                                <div>
                                    <img src="./pics/8hat1.png" alt="dinlabel_8" className="hat" />
                                </div>
                                <span>8기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="9hat">
                                <div>
                                    <img src="./pics/9hat1.png" alt="dinlabel_9" className="hat" />
                                </div>
                                <span>9기</span>
                            </div>
                            <div className="minibox" onClick={getId1} id="16hat">
                                <div>
                                    <img src="./pics/16hat.png" alt="dinlabel_16" className="hat" />
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
                            <div className="minibox" onClick={getId1} id="20hat">
                                <div>
                                    <img src="./pics/20hat1.png" alt="dinlabel_19" />
                                </div>
                                <span>20기</span>
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
                            <div className="minibox" onClick={getId2} id="2weapon">
                                <div>
                                    <img src="./pics/2weapon.png" alt="dinlabel_2" className="weapon" />
                                </div>
                                <span>2기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="3weapon">
                                <div>
                                    <img src="./pics/3weapon.png" alt="dinlabel_3" className="weapon" />
                                </div>
                                <span>3기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="4weapon">
                                <div>
                                    없어요
                                </div>
                                <span>4기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="8weapon">
                                <div>
                                    없어요
                                </div>
                                <span>8기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="9weapon">
                                <div>
                                    <img src="./pics/9weapon1.png" alt="dinlabel_9" className="weapon" />
                                </div>
                                <span>9기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="16weapon">
                                <div>
                                    <img src="./pics/16weapon.png" alt="dinlabel_16" className="small" />
                                </div>
                                <span>16주년</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="17weapon">
                                <div>
                                    <img src="./pics/17weapon.png" alt="dinlabel_17" className="small"  />
                                </div>
                                <span>17기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="19weapon">
                                <div>
                                    <img src="./pics/19weapon.png" alt="dinlabel_19" className="small" />
                                </div>
                                <span>19기</span>
                            </div>
                            <div className="minibox" onClick={getId2} id="20weapon">
                                <div>
                                    <img src="./pics/20weapon1.png" alt="dinlabel_20" className="small" />
                                </div>
                                <span>20기</span>
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
                            <div className="minibox" onClick={getId3} id="2cloth">
                                <div>
                                    <img src="./pics/2cloth1.png" alt="dinlabel_2" className="two" />
                                    <img src="./pics/2cloth2.png" alt="dinlabel_2" className="two" />
                                </div>
                                <span>2기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="3cloth">
                                <div>
                                    <img src="./pics/3cloth1.png" alt="dinlabel_3" className="two" />
                                    <img src="./pics/3cloth2.png" alt="dinlabel_3" className="two" />
                                </div>
                                <span>3기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="4cloth">
                                <div>
                                    <img src="./pics/4cloth1.png" alt="dinlabel_4" className="two" />
                                    <img src="./pics/4cloth2.png" alt="dinlabel_4" className="two" />
                                </div>
                                <span>4기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="8cloth">
                                <div>
                                    <img src="./pics/8cloth1.png" alt="dinlabel_8" className="two" />
                                    <img src="./pics/8cloth2.png" alt="dinlabel_8" className="two" />
                                </div>
                                <span>8기</span>
                            </div>
                            <div className="minibox" onClick={getId3} id="9cloth">
                                <div>
                                    <img src="./pics/9cloth1.png" alt="dinlabel_9" className="two" />
                                    <img src="./pics/9cloth2.png" alt="dinlabel_9" className="two" />
                                </div>
                                <span>9기</span>
                            </div>
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
                            <div className="minibox" onClick={getId3} id="20cloth">
                                <div>
                                    <img src="./pics/20cloth1.png" alt="dinlabel_20" className="two" />
                                    <img src="./pics/20cloth2.png" alt="dinlabel_20" className="two" />
                                </div>
                                <span>20기</span>
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
                            <div className="minibox" onClick={getId5} id="2shoes">
                                <div>
                                    <img src="./pics/2shoes1.png" alt="dinlabel_2" className="small" />
                                </div>
                                <span>2기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="3shoes">
                                <div>
                                    <img src="./pics/3shoes.png" alt="dinlabel_3" className="small" />
                                </div>
                                <span>3기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="4shoes">
                                <div>
                                    없어요
                                </div>
                                <span>4기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="8shoes">
                                <div>
                                    <img src="./pics/8shoes1.png" alt="dinlabel_8" className="small" />
                                </div>
                                <span>8기</span>
                            </div>
                            <div className="minibox" onClick={getId5} id="9shoes">
                                <div>
                                    <img src="./pics/9shoes1.png" alt="dinlabel_9" className="small" />
                                </div>
                                <span>9기</span>
                            </div>
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
                            <div className="minibox" onClick={getId5} id="20shoes">
                                <div>
                                    없어요
                                </div>
                                <span>20기</span>
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
                            <div className="minibox" onClick={getId6} id="2cape">
                                <div>
                                    <img src="./pics/2cape.png" alt="dinlabel_9" />
                                </div>
                                <span>2기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="3cape">
                                <div>
                                    없어요
                                </div>
                                <span>3기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="4cape">
                                <div>
                                    없어요
                                </div>
                                <span>4기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="8cape">
                                <div>
                                    없어요
                                </div>
                                <span>8기</span>
                            </div>
                            <div className="minibox" onClick={getId6} id="9cape">
                                <div>
                                    <img src="./pics/9cape.png" alt="dinlabel_9" />
                                </div>
                                <span>9기</span>
                            </div>
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
                            <div className="minibox" onClick={getId6} id="20cape">
                                <div>
                                    <img src="./pics/20cape1.png" alt="dinlabel_20" className="bigcape" />
                                </div>
                                <span>20기</span>
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
                    <li><span>배경</span><span>{labelback}</span></li>
                    <div>
                        <span onClick={onClick7}>배경 검색<i className="xi-caret-down-min xi-x"></i></span>
                        <div className="hidden" id="id7">
                            <div className="minibox" onClick={getback} id="back1">
                                <div>
                                    <img src="./pics/background1.png" alt="dinlabel_17" />
                                </div>
                                <span>노틸러스</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back2">
                                <div>
                                    <img src="./pics/background2.png" alt="dinlabel_19" />
                                </div>
                                <span>여로</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back3">
                                <div>
                                    <img src="./pics/background3.png" alt="dinlabel_21" />
                                </div>
                                <span>루디</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back4">
                                <div>
                                    <img src="./pics/background4.png" alt="dinlabel_21" />
                                </div>
                                <span>삐에로</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back5">
                                <div>
                                    <img src="./pics/background5.png" alt="dinlabel_21" />
                                </div>
                                <span>아르카나</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back6">
                                <div>
                                    <img src="./pics/background6.png" alt="dinlabel_21" />
                                </div>
                                <span>엘로딘</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back7">
                                <div>
                                    <img src="./pics/background7.png" alt="dinlabel_21" />
                                </div>
                                <span>리엔</span>
                            </div>
                            <div className="minibox" onClick={getback} id="back8">
                                <div>
                                    <img src="./pics/background8.png" alt="dinlabel_21" />
                                </div>
                                <span>에레브</span>
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

