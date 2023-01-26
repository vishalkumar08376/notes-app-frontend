import React, {useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import leftArrow from "../assets/images/left_arrow.svg";
import putData from "../utils/putData";

export default function ResetPassword(props) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const {resetToken} = useParams();

  const resetPassword = async() => {
    const data = {
        password: newPassword,
        confirmPassword: confirmPassword
    }
    const res = await putData(`/api/auth/password/reset/${resetToken}`, data);
    if (res.success === true){
        alert("Successfully reset password");
        navigate("/login");
    }
    else{
        alert(res.message);
    }
  }

  const handleForm = (event) => {
    event.preventDefault();
    resetPassword();
  }

  return (
    <div>
      <div className="mt-4 ml-2">
        <Link to="/profile">
          <img
            src={leftArrow}
            alt="left-arrow"
            className={`w-7 h-7 ${
              props.mode === "light" ? "invert-0" : "invert"
            }`}
          />
        </Link>
      </div>
      <form
        className="mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 2xl:mx-96 my-20"
        onSubmit={handleForm}
      >
        <div
          className={`font-extrabold text-2xl mb-7 text-center ${
            props.mode === "light" ? "text-black" : "text-white"
          }`}
        >
          Reset Password
        </div>
        <div className="my-6">
          <input
            type="password"
            placeholder="New Password"
            className={`w-full border-2 py-3 px-6 font-lg outline-none rounded-3xl shadow-md ${
              props.mode === "light"
                ? "border-gray-200 bg-white text-gray-500 placeholder:text-gray-500"
                : "border-gray-400 bg-gray-600 text-gray-100 placeholder:text-gray-100"
            }`}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="my-6">
          <input
            type="password"
            placeholder="Confirm New Password"
            className={`w-full border-2 py-3 px-6 font-lg outline-none rounded-3xl shadow-md ${
              props.mode === "light"
                ? "border-gray-200 bg-white text-gray-500 placeholder:text-gray-500"
                : "border-gray-400 bg-gray-600 text-gray-100 placeholder:text-gray-100"
            }`}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <div className="my-6">
          <button
            type="submit"
            className={`w-full py-3 rounded-3xl font-semibold text-lg bg-blue-500 text-white shadow-lg`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
