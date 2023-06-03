import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../action/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPass, setConfirmPass] = useState(true);
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const [data, setData] = useState(initialState);
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
      //  if (data.password !== data.confirmpassword) {
      //    setConfirmPass(false);
      //  }
    } else {
      dispatch(logIn(data));
    } 
  };

  // const resetForm = () => {
  //   setData(initialState);
  //   setConfirmPass(confirmPass);
  // };
  return (
    // { left side }
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ANGRYBIRD</h1>
          <h6>Explore theas throughout the world</h6>
        </div>

        {/* <Login /> */}
        {/*  {right side} */}
        <div className="a-right">
          <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
            <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

            {isSignUp && (
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  placeholder="last Name"
                  className="infoInput"
                  name="lastname"
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <input
                type="text"
                placeholder="Username"
                className="infoInput"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                onChange={handleChange}
              />

              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="infoInput"
                  name="confirmpass"
                  onChange={handleChange}
                  // value={data.confirmpassword}
                />
              )}
            </div>
            <span
              style={{
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-endm",
                marginRight: "5px",
                display: confirmPass ? "none" : "block",
              }}
            >
              * Confirm Password is not same
            </span>

            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => {
                  setIsSignUp((prev) => !prev);
                  // resetForm();
                }}
              >
                {isSignUp
                  ? "Already have an account Login!"
                  : "Don't have an account? Sign Up"}
              </span>
              <button
                className="button infoButton"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : isSignUp ? "Signup" : "login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// function Login() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Log In</h3>

//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account Sign up
//           </span>
//           <button className="button infoButton" type="submit">
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Sign up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />

//           <input
//             type="text"
//             placeholder="last Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             className="infoInput"
//             name="username"
//           />
//         </div>

//         <div>
//           <input
//             type="text"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//           />

//           <input
//             type="text"
//             placeholder="Confirm Password"
//             className="infoInput"
//             name="confirmpassword"
//           />
//         </div>

//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account Login
//           </span>
//           <button className="button infoButton" type="submit">
//             Sign up
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default Auth;
