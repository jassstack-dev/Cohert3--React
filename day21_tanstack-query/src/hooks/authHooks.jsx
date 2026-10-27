import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerItem")) || [],
  );
  console.log(registerData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    const arr = [...registerData, data];
    setRegisterData(arr);
    localStorage.setItem("registerItem", JSON.stringify(arr));
  };

  const loginForm = (data) => {
    const user = registerData.find((val) => {
      return val.email === data.email && val.password === data.password;
    });
    if (!user) {
      toast.error("user not found");
      return;
    }

    disPatch(addUser(user));
    localStorage.setItem("loginUserItem", JSON.stringify(user));
    toast.success("user logged in successfully");
    reset();
    console.log("user loggen in");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    registerForm,
    loginForm,
  };
};
