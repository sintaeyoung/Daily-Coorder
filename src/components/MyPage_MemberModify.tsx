import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MyPage_MemberModify(){
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }


    return(
        <>
            <ModifyCss />
            <div className="containerCss">
                <Form className="pl-5">
                    <Row className="my-5 lg">
                        <Col xs={10}>
                            <Form.Group  controlId="formGridEmail">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="email" placeholder="Enter ID"/>
                                    <Button>아이디중복 확인</Button>
                               
                            </Form.Group>
                        
                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>Password check</Form.Label>
                                <Form.Control type="password" placeholder="Password check" />
                            </Form.Group>
                    
                            <Form.Group className="my-3">
                                <Form.Label>Birth</Form.Label>
                                <Form.Control type="text" placeholder="생년월일 6자리입력" />
                            </Form.Group>


                            <Form.Group className="my-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control placeholder="Phone Number" />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                                <Button>인증</Button>
                            </Form.Group>
                    
                            <Form.Group controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                        <Button variant="primary" type="submit" onClick={handleShow}>
                                회원 정보 수정
                        </Button>
                    </div>
                </Form> 
            </div> 

            <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>정보 수정 확인</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>회원정보를 정말 수정하시겠습니까?</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                이전
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                수정 완료
                            </Button>
                            </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyPage_MemberModify;