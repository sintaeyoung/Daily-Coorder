import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Button, Col, Figure, Row} from 'react-bootstrap';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import "../css/main/animation.css";
import "../css/MyPage_MemInfoCss.css";



import { useEffect } from 'react';

import IMemberId from "../interfaces/IMemberId";
import MemberIdService from '../service/MemberIdService';
import UserService from '../service/UserService';
import IUser from '../interfaces/IUser';

type memberid={
    infoId : IMemberId;
}


function CeoModify() {
    const [imgfile, setImgFile] = useState('');
   
    const onloadfile = (event: any) => {
        const file = event?.target.files;
        setImgFile(URL.createObjectURL(file[0]));
    }

   

    const assignRequest = () => {
        alert("입력하신 전화번호로 인증요청을 보냈습니다");
    }

    const assignEmail = () => {
        alert("입력하신 이메일로 인증메일을 보냈습니다.");
    }

    const compareIdCheck=(event : any)=>{
        const compareId=event.target.value;
       
    }
    return (
        <>
            <Form className="aa pl-5" >
                <Row className="my-5">
                    <Col>
                        <div
                            style={{width: "170px", height: "200px", margin: "3vh 0 0 0", border: "1px solid #dbdbdb"}}>
                            <Figure style={{width: "170px", height: "200px"}}>
                                <Figure.Image
                                    width={170}
                                    height={200}
                                    alt="프로필 사진"
                                    src={imgfile}
                                />
                            </Figure>
                        </div>
                        <div style={{margin: "1vh 0"}}>
                            <label className="btn btn-white" htmlFor="ppimage" style={{
                                overflow: "hidden",
                                border: "1px solid #dbdbdb",
                                fontWeight: "bold",
                                padding: ".3vw .75vw",
                                borderRadius: "5px"
                            }}>
                                프로필 사진 업로드<input type="file" style={{display: "none"}} id="ppimage" accept='image/*'
                                                 onChange={onloadfile}/>
                            </label>

                            <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제
                                </label>
                        </div>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>아이디</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text" name="id" />
                                <Button style={{width: "180px", textAlign: "center"}} onClick={compareIdCheck}>중복
                                    확인</Button>
                            </div>

                        </Form.Group>


                        <Form.Group controlId="formGridEmail" style={{marginTop: "1vh"}}>
                            <Form.Label>상호명</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text"  name="brandname" />

                            </div>
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" placeholder="Password check" name="passwordCheck"/>
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
                            <Form.Label>사업자 번호</Form.Label>
                            <Form.Control type="text"  name="ceonumber"  />
                        </Form.Group>


                        <Form.Group className="my-3">
                            <Form.Label>전화번호</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text" name="phoneNumber" />
                                <Button style={{width: "180px", textAlign: "center"}}
                                        onClick={assignRequest}>인증요청</Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label>이메일</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="email" name="email" />
                                <Button style={{width: "180px", textAlign: "center"}}
                                        onClick={assignEmail}>인증요청</Button>
                            </div>
                        </Form.Group>

                    </Col>
                </Row>


            </Form>
        </>
    );
}


function MyPage_MemberModify(props : memberid) {
    
    const [show,setShow]=useState(true);
    const [normalMember,setNormalMember]=useState<IUser>();

    //아이디조회
    async function memberSearch(){
        const memberid=await MemberIdService.getIdById(props.infoId.member_id).then(res=>res.data);
        
        return memberid.member_id;
    }


    //아이디를 가져와서  일반인인지 사업자인지 비교
    async function compareId(){
        const memberid=memberSearch();
        const compareid=await UserService.getUserById(await memberid).then(res=>res.data);

        if(compareid === undefined){
            setShow(false);
        }else{
            setShow(true);
        }
    }

    //아이디가 있으면 원래의 정보를 가져옴 그리고 반환;
    async function userInfo() {
        const memberid=memberSearch();
        const userId=await UserService.getUserById(await memberid).then(res=>res.data);


    }

    const handleChange=useEffect(()=>{


    },[]);

    
    //본래 회원정보가져옴
    //일반인 회원정보입력
    //회원정보담아서 업데이트

  

  
   

    const assignRequest = () => {
        alert("입력하신 전화번호로 인증요청을 보냈습니다");
    }

    const assignEmail = () => {
        alert("입력하신 이메일로 인증메일을 보냈습니다.");
    }
   
    return (
        <>
            <ModifyCss/>
            <div className="aa memberOrceo">
                <div style={{padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer"}}
                     onClick={compareId}>
                    일반 회원 정보
                </div>
                <div style={{padding: "1vw 2vw", cursor: "pointer"}} onClick={compareId}>
                    사업자 회원 정보
                </div>
            </div>
            <div className="aa containerCss">
                {show && <Form className="pl-5">
                    <Row className="my-5">
                        <Col>
                            <div style={{
                                width: "170px",
                                height: "200px",
                                margin: "3vh 0 0 0",
                                border: "1px solid #dbdbdb"
                            }}>
                                <Figure style={{width: "170px", height: "200px"}}>
                                    <Figure.Image
                                        width={170}
                                        height={200}
                                        alt="프로필 사진"
                                        
                                    />
                                </Figure>
                            </div>
                            <div style={{margin: "1vh 0",display:"flex"}}>
                                <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px"
                                }}>
                                    프로필 사진 업로드<input type="file" style={{display: "none"}} id="ppimage" accept='image/*'
                                                    />
                                </label>

                                <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제
                                </label>
                            </div>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>아이디</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" placeholder="Enter ID" name="id" 
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}} >중복
                                        확인</Button>
                                </div>

                            </Form.Group>

                            


                            <Form.Group controlId="formGridEmail" style={{marginTop: "1vh"}}>
                                <Form.Label>닉네임</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" placeholder="Enter NickName" name="nickname"
                                                 />
                                    <Button style={{width: "180px", textAlign: "center"}} >닉네임중복
                                        확인</Button>
                                </div>
                            </Form.Group>



                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password"
                                              />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control type="password" placeholder="Password check" name="passwordCheck"
                                              />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>생년월일</Form.Label>
                                <Form.Control type="date" placeholder="생년월일 6자리입력" name="birth"/>
                            </Form.Group>


                            <Form.Group className="my-3">
                                <Form.Label>전화번호</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" placeholder="Phone Number" name="phoneNumber"
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}}
                                            >인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>이메일</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="email" placeholder="Enter Email" name="email"
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}}
                                            onClick={assignEmail}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail" style={{marginTop: "3vh",boxSizing:"border-box"}}>
                                <label style={{margin:"1vw 0"}}>체형</label>
                                <div style={{display:"flex"}}>
                                    <Form.Label style={{width:"20vw",textAlign:"center",marginTop:".6vw"}}>키</Form.Label>
                                    <div style={{width: "100%", display: "flex"}}>
                                        <Form.Control type="text" placeholder="Enter weight" name="weight"
                                                   />
                                    
                                    </div>

                                    <Form.Label style={{width:"20vw",textAlign:"center",marginTop:".6vw"}}>몸무게</Form.Label>
                                    <div style={{width: "100%", display: "flex"}}>
                                        <Form.Control type="text" placeholder="Enter height" name="height"
                                                    />
                                    
                                    </div>
                                </div>
                            </Form.Group>

                        </Col>
                    </Row>
                </Form>}
                {show && <CeoModify/>}

                {/*  작성자: 황인성  */}
                {/*  최종수정 날짜 2022.3.10  */}
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Button variant="white" className="mypage_btn" type="submit" >
                        <span>회원 정보 수정</span>
                    </Button>
                </div>
                {/*    ----------------------------    */}
            </div>

            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>정보 수정 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>회원정보를 정말 수정하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">
                        이전
                    </Button>
                    <Button variant="primary">
                        수정 완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyPage_MemberModify;