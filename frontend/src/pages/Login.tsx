import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Email } from "../components/auth/Email";
import { Password } from "../components/auth/Password";
import { Submit } from "../components/auth/Submit";
import toast from "react-hot-toast";
import { Redirect } from "../components/helper/Redirect";
import { postHandler } from "../components/helper/apiHandler";

export const Login: () => JSX.Element = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    const res = await postHandler("auth/login", data);
    if (!res) return;
    toast.success(res.message);
  };
  return (
    <div className="border flex flex-col items-center gap-5 justify-center w-1/5 p-10">
      <h1 className="text-3xl font-roboto font-[550]">Login</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-3 w-full "
      >
        <Email register={register} error={errors} />
        <Redirect
          className="ml-auto cursor-pointer text-blue-600 text-sm"
          label="Forgot Password"
          to="/auth/forgotpassword"
        />
        <Password register={register} error={errors} />
        <Submit />
      </form>
      <p className="ml-auto">
        new user?
        <Redirect
          className="ml-2 cursor-pointer text-blue-600 text-sm"
          label="Create account"
          to="/auth/register"
        />
      </p>
    </div>
  );
};
