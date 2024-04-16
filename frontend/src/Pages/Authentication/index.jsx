
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";

const Authentication = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prevState) => !prevState);
  };

  return (
    <div className="max-w-md flex flex-col h-100 w-50% mx-auto mt-8 p-4 bg-white border rounded shadow-lg">

      {isLoginForm ? <LoginForm /> : <SignupForm className="flex flex-col" />}
      <button onClick={toggleForm} className="text-blue-500 hover:underline ">
        {isLoginForm ? "Create an account" : "Already have an account? Sign In"}
      </button>
    </div>
  );
};

export default Authentication;
