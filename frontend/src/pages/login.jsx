import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', data)
        if (response.status === 200) {
            console.log(response.data)
            console.log("it work")
        }    
        } catch (error) {
            console.log(error)
        }
  };

  return (
    <div className="flex flex-col items-center justify-between w-4/5 md:w-3/5 lg:w-2/5 h-4/5 bg-white rounded-lg p-4 lg:px-5 shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-3 mt-5 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text">
          SIGN IN
        </h1>
        <p className="text-center text-sm mx-10">
          Enter your account in order to rant your problems away
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)} className="w-full flex flex-col gap-2">
          
        <input
          className=" w-5/5 py-2 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600 focus:border-cyan-600"

          type="text"
          placeholder="Username"
          {...register("username", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs m-0">{errors.username?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600"

          type="password"
          placeholder="Password"
          {...register("password", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs">{errors.password?.message}</p>


        <button
          disabled={isSubmitting}
          className="w-5/5 self-center mt-5 text-white py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>

      <h1 className="text-sm">
        Don't have an account?{" "}
        <Link to='/register' className="text-blue-500">Register Here</Link>
      </h1>
    </div>
  );
};

export default Login;