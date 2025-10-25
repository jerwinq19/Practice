import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const formSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("user/", data);
      console.log(response.data);
      // 201 kasi create nigga
      if (response.status === 201) {
        console.log("it work");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setError("root", { message: "Registration failed, please try again" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center mb-2 mt-20">
        <h1 className="font-bold text-4xl mb-3 mt-5 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text">
          REGISTER
        </h1>
        <p className="text-center mb-5 text-xs md:text-sm md:mx-10">
          Register an account to be a part of a healthy community
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
        {errors.username && (
          <p className="text-red-600 text-xs m-0">
            <img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>
            {errors.username?.message}
          </p>
        )}

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="password"
          placeholder="Password"
          {...register("password", { required: "This is required" })}
        />
        {errors.password && (
          <p className="text-red-600 text-xs">
            <img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>
            {errors.password?.message}
          </p>
        )}

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-xs">
            <img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>
            {errors.email?.message}
          </p>
        )}

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="text"
          placeholder="First Name"
          {...register("first_name", { required: "This is required" })}
        />
        {errors.first_name && (
          <p className="text-red-600 text-xs">
            <img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>
            {errors.first_name?.message}
          </p>
        )}

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="text"
          placeholder="Last Name"
          {...register("last_name", { required: "This is required" })}
        />
        {errors.last_name && (
          <p className="text-red-600 text-xs">
            <img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>
            {errors.last_name?.message}
          </p>
        )}

        <button
          disabled={isSubmitting}
          className="w-5/5 self-center text-white py-2 rounded-md bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && <p className="text-red-600 text-xs"><img
              src="https://img.icons8.com/?size=100&id=60673&format=png&color=FA5252"
              className="inline mr-1 w-4 h-4"
            ></img>{errors.root?.message}</p>}
      </form>

      <h1 className="text-xs md:text-sm mt-5">
        Already have an account ?{" "}
        <Link to="/" className="text-blue-500">
          {" "}
          Login Here
        </Link>
      </h1>
    </div>
  );
};

export default Register;
