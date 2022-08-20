import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider, db } from '../firebase.config';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { setCurrentUser, selectCurrentUser } from '../user/userSlice';

const SignInPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate('../profile');
    }
  },[currentUser])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential, response) => {
        const currentUser = userCredential.user;
        dispatch(setCurrentUser(currentUser));
        console.log("Signed in user: ", currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });
  };

  const handleGoogleLogin = async() => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider)
      const currentUser = result.user
      //check for user
      const docRef = doc(db, 'users', currentUser.uid)
      const docSnap = await getDoc(docRef)

      //if user doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', currentUser.uid), {
          name: currentUser.displayName,
          email: currentUser.email,
          timestamp: serverTimestamp(),
        })
      }
      dispatch(setCurrentUser(currentUser));
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
    }

    const handleSignUp = () => {
      navigate('../sign-up');
    }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Login</h2>
          <input 
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
          placeholder="password" 
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin}>Sign In</Button>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleSignUp} >Register New User</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
