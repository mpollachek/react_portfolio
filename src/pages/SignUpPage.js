import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setCurrentUser, selectCurrentUser } from '../user/userSlice';

const SignUpPage = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate('../profile');
    }
  },[currentUser])

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const currentUser = userCredential.currentUser;
        console.log("Registered user: ", currentUser);
        setRegisterEmail("");
        setRegisterPassword("");
        dispatch(setCurrentUser(currentUser));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>New User Registration for Farmstand Finder!</h2>
          <input 
          placeholder="email"
          type="text"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)} 
          />
          <input 
          placeholder="password" 
          type="text"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button>Create New User</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;