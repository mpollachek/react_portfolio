import { signOut } from "firebase/auth";
import { Button } from "reactstrap";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, setCurrentUser } from "../user/userSlice";
import { useEffect } from "react";

const ProfilePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('../sign-in');
    }
  },[currentUser])

  const handleSignOut = () => {
    signOut(auth);
    dispatch(setCurrentUser(null));
  }

  return (
    <div>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
};

export default ProfilePage;