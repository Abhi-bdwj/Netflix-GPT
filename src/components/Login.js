import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignInForm, setIsSignInFrom] = useState(true);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInForm);
  };
  const handleSignIn = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="relative min-h-screen">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src={BG_URL}
            alt="background"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Centered Form Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="w-full max-w-md p-8 bg-black bg-opacity-50 text-white rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>

            {/* conditionally rendering Transparent name Input */}
            {!isSignInForm ? (
              <input
                ref={name}
                type="Name"
                placeholder="Full Name"
                className="block w-full p-3 mb-6 bg-black bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
              />
            ) : null}

            {/* Transparent Email Input */}
            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="block w-full p-3 mb-6 bg-black bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
            />

            {/* Transparent Password Input */}
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="block w-full p-3 mb-6 bg-black bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <p className="text-red-600 font-medium">{errorMessage}</p>
            {/* Sign In Button */}
            <button
              type="submit"
              onClick={handleSignIn}
              className="w-full p-3  bg-red-600 rounded-sm font-bold text-white hover:bg-red-700"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <h1 className="p-3 text-center text-slate-200 ">OR</h1>
            <button className="block w-full p-3 mb-4 bg-gray-300 bg-opacity-30 rounded-sm text-white placeholder-gray-300 hover:bg-gray-400 hover:bg-opacity-50 ">
              Use a sign-in code
            </button>

            <div className="w-full">
              <a
                href="#"
                className="block  mx-auto p-4 text-white text-center "
              >
                Forgot password?
              </a>
            </div>

            {/* Additional Options */}
            <div className="flex justify-between items-center text-sm text-gray-500 ">
              <div className="mt-3">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="ml-2 ">
                  Remember me
                </label>
              </div>
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <span className="text-gray-500">
                {isSignInForm ? "New to Netflix? " : "Have an account?"}
              </span>
              <a
                href="#"
                onClick={toggleSignInForm}
                className="text-white hover:underline"
              >
                {isSignInForm ? "Sign up now" : "Sign In now"}
              </a>
              .
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
