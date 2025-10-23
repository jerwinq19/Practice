import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
    console.log(data)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', data)
        if (response.status === 200) {
            console.log(response.data)
            console.log("it work")
        }    
        } catch (error) {
            console.log(error)
        }
  };

  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg p-4 lg:px-20 shadow-lg">
      <div className="flex flex-col items-center mb-2">
        <h1 className="font-bold text-4xl mb-3 mt-5 bg-linear-to-r from-cyan-500 to-blue-900 text-transparent bg-clip-text">
          REGISTER
        </h1>
        <p className="text-center text-sm mx-10">
          Register an account to be a part of a healthy community
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)} className="w-full flex flex-col gap-2">
          
        <input
          className=" w-5/5 py-1 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600 focus:border-cyan-600"

          type="text"
          placeholder="Username"
          {...register("username", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs m-0">{errors.username?.message}</p>

        <input
          className=" w-5/5 py-1 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600"

          type="password"
          placeholder="Password"
          {...register("password", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs">{errors.password?.message}</p>

        <input
          className=" w-5/5 py-1 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600"

          type="text"
          placeholder="First Name"
          {...register("firstname", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs">{errors.firstname?.message}</p>

        <input
          className=" w-5/5 py-1 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600"

          type="text"
          placeholder="Last Name"
          {...register("lastname", {required: "This is required",})}
        />
        <p className="text-red-600 text-xs">{errors.lastname?.message}</p>

        <input
          className=" w-5/5 py-1 px-2 border-2 border-gray-200 rounded-xl placeholder:text-gray-600"

          type="email"
          placeholder="Email"
          {...register("email", {required: "This is required", pattern: {
            value: /^\S+@\S+$/i, 
            message: "Invalid email address"
          }})}
        />
        <p className="text-red-600 text-xs">{errors.email?.message}</p>

        <button
          disabled={isSubmitting}
          className="w-5/5 self-center mt-5 text-white py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-900 disabled:bg-gray-400 font-bold text-xl"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>

      <h1 className="text-sm">
        Already have an account?
        <Link to='/' className="text-blue-500">Login Here</Link>
      </h1>
    </div>
  );
};

export default Register;