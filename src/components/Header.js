import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
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
    <div className=" fixed w-screen px-10 py-2  bg-gradient-to-b from-black z-50 flex justify-between">
      <Link to={"/browse"}>
        <img className="w-32 md:w-48 " alt="Netflix logo" src={LOGO} />
      </Link>
      {user && (
        <div className="p-2 mt-2 flex">
          <div
            className="relative inline-block cursor-pointer "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={USER_AVATAR} 
              alt="User Avatar"
              className="w-10 h-10 md:w-12 md:h-12 rounded"
            />

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0  mt-2 w-40 bg-black bg-opacity-80 text-white shadow-lg rounded-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:text-red-500">Accounts</li>
                  <li className="px-4 py-2 hover:text-red-500">User</li>
                  <li className="px-4 py-2 hover:text-red-500">Help</li>
                  <li
                    className="px-4 py-2 hover:text-red-500"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
