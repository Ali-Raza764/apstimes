const Login = () => {
  
  const signIn = async (username, password) =>{
    console.log(username, password);
  }
  return (
    <div className="w-full flex mt-24 justify-center">
      <div className="bg-gray-300 h-max p-4 rounded-md">
        <form
          className="flex flex-col items-center justify-center text-center h-auto"
          onSubmit={(e)=>{
            e.preventDefault()
            signIn(e.target.username.value, e.target.password.value)
          }}
        >
          <input
            type="text"
            className="my-5 p-2 rounded-md focus:outline-none"
            placeholder="username"
            name="username"
            id="username"
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
  );
};

export default Login;
