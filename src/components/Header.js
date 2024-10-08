import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate ,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser())
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    //Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute w-screen px-10 py-2  bg-gradient-to-b from-black z-10 flex justify-between">
      <Link to={"/browse"}>
        <img className="w-48 " alt="Netflix logo" src={LOGO} />
      </Link>
      {user && (
        <div className="p-2 mt-2 flex   ">
          <img
            alt="user logo"
            className="w-12 h-12 rounded-md  "
            src={USER_AVATAR}
          />
          <div className="mb-3">
            <button
              onClick={handleSignOut}
              className="m-3 bg-red-600 rounded-md p-1  text-white font-semibold pl-2 pr-2 pb-2 "
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
