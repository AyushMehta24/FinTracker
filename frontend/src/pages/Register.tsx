import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Email } from "../components/auth/Email";
import { Password } from "../components/auth/Password";
import { Submit } from "../components/auth/Submit";
import { Text } from "../components/auth/CommonTextFields";
import { DateComponenet } from "../components/auth/Date";
import toast from "react-hot-toast";
import { Redirect } from "../components/helper/Redirect";
import { postHandler } from "../components/helper/apiHandler";

export const Register: () => JSX.Element = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const submitHandler: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    const res = await postHandler("auth/register", data);
    if (!res) return;
    toast.success(res.message);
  };

  return (
    <div className="border flex flex-col items-center gap-5 justify-center w-1/5 p-10">
      <h1 className="text-3xl font-roboto font-[550]">Register</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-5 w-full "
      >
        <Text register={register} error={errors} fieldId="firstName" />
        <Text register={register} error={errors} fieldId="lastName" />
        <Email register={register} error={errors} />
        <DateComponenet
          register={register}
          error={errors}
          setError={setError}
        />
        <Password register={register} error={errors} />
        <Submit />
      </form>
      <p>
        already user?
        <Redirect
          className="ml-2 align-center cursor-pointer text-blue-600 text-md"
          label="Login"
          to="/auth/login"
        />
      </p>
    </div>
  );
};
