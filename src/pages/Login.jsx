import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const signIn = async (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-left mx-11 mt-11 text-4xl font-sans font-bold">
        <span className="text-[#006435]">Login </span>To Your APS Times Account
      </h1>
      <div className="w-full flex mt-24 justify-center sm:mt-11">
        <div className="bg-gray-300 h-max p-4 rounded-md">
          <form
            className="flex flex-col items-center justify-center text-center h-auto"
            onSubmit={(e) => {
              e.preventDefault();
              signIn(e.target.email.value, e.target.password.value);
            }}
          >
            <input
              type="text"
              className="my-5 p-2 rounded-md focus:outline-none"
              placeholder="email"
              name="email"
              id="email"
            />

            <input
              type="password"
              className=" mb-10 p-2 rounded-md focus:outline-none"
              placeholder="password"
              name="password"
              aria-controls="hide"
              id="password"
            />

            <button
              className="text-white p-3 rounded-md bg-[#006435] hover:bg-gray-700"
              type="submit"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
