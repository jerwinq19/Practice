import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

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
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        data
      );
      if (response.status === 200) {
        console.log(response.data);
        console.log("it work");
        navigate("Home");
      }
    } catch (error) {
      console.log(error);
      setError("root", { message: "Registration failed, please try again" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center mb-2">
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
        <p className="text-red-600 text-xs m-0">{errors.username?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="password"
          placeholder="Password"
          {...register("password", { required: "This is required" })}
        />
        <p className="text-red-600 text-xs">{errors.password?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="text"
          placeholder="First Name"
          {...register("firstname", { required: "This is required" })}
        />
        <p className="text-red-600 text-xs">{errors.firstname?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="text"
          placeholder="Last Name"
          {...register("lastname", { required: "This is required" })}
        />
        <p className="text-red-600 text-xs">{errors.lastname?.message}</p>

        <input
          className=" w-5/5 py-2 px-2 border-2 bg-white shadow-md border-gray-200 rounded-md placeholder:text-gray-600 focus:outline-none focus:border-cyan-600 focus:scale-105 transition-all"
          type="email"
          placeholder="Email"
          {...register("email", { required: "This is required", pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          }})}
        />
        <p className="text-red-600 text-xs">{errors.email?.message}</p>


        <button
          disabled={isSubmitting}
          className="w-5/5 self-center text-white py-2 rounded-md bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        <p className="text-red-600 text-xs mb-5">{errors.root?.message}</p>
      </form>

      <h1 className="text-sm">
        Already have an account?
        <Link to="/" className="text-blue-500">
          Login Here
        </Link>
      </h1>
    </div>
  );
};

export default Register;
