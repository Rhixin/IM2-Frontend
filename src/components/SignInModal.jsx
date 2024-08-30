import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useModal } from "./Global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function SignInModal() {
  const theme = useTheme();
  const { open, handleOpen } = useModal();
  const [register, setRegister] = React.useState(false);

  const handleRegisterTransition = () => {
    setRegister(!register);
  };

  return (
    <>
      <div className={`overlay ${open ? "overlay-active" : ""}`}></div>
      <div
        className={`fixed flex items-center justify-center ${
          open ? "scale-100" : "scale-0"
        } transition-transform z-50 inset-0`}
      >
        <div className="modal-container bg-white p-4">
          <button onClick={handleOpen}>X</button>

          <button onClick={handleRegisterTransition}>
            {register ? "Log In" : "Register"}
          </button>

          {register ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </>
  );
}
