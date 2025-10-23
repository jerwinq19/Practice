import axiosInstance from "../utils/axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../components/logoutButton";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const formSubmit = async (data) => {
    console.log(data)
    try {
      const res = await axiosInstance.post('token/', data)
      console.log(res.data)
      // store the jwt access and refresh token to the local storage
      localStorage.setItem('access_token', res.data.access)
      localStorage.setItem('refresh_token', res.data.refresh)
      navigate('/home')
    }
    catch (error) {
      console.log(error)
    }
    console.log('dasdsa')
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-3 mt-5 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text">
          SIGN IN
        </h1>
        <p className="text-center mb-5 text-xs md:text-sm md:mx-10">
          Enter your account in order to rant your problems away
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full flex flex-col gap-2"
      >
        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="text"
          placeholder="Username"
          {...register("username", { required: "This is required" })}
        />
        <p className="text-red-600 text-xs m-0">{errors.username?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="password"
          placeholder="Password"
          {...register("password", { required: "This is required" })}
        />
        <p className="text-red-600 text-xs">{errors.password?.message}</p>

        <button
          disabled={isSubmitting}
          className="w-5/5 self-center text-white py-2 rounded-md bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
        >
          {isSubmitting ? "Loading..." : "Login"}
        </button>
        <p className="text-red-600 text-xs mb-5">{errors.root?.message}</p>
      </form>

      <h1 className="text-xs md:text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register Here
        </Link>
      </h1>

    </div>
  );
};

export default Login;
