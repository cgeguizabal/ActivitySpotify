import { useForm } from "react-hook-form";
import "./css/signup.css";

function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="fromContainer">
        <div className="formLogoContainer">
          <img className="formLogo" src="/assets/logo2.webp" alt="logo" />
        </div>
        <h1 className="formTitle">Sign Up Now to Start Listening</h1>
        <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="firstName">
            <label htmlFor="firstname" className="formLabel">
              First Name
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Enter First Name"
              {...register("firstname", { required: "First Name is required" })}
            />
            {errors.firstname && (
              <p className="error">{errors.firstname.message}</p>
            )}
          </div>
          <div className="lastName">
            <label htmlFor="lastname" className="formLabel">
              Last Name
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Enter Last Name"
              {...register("lastname", { required: "Last Name is required" })}
            />
            {errors.lastname && (
              <p className="error">{errors.lastname.message}</p>
            )}
          </div>
          <div className="email">
            <label htmlFor="email" className="formLabel">
              Email
            </label>
            <input
              className="formInput"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <button type="submit" className="formButton">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
