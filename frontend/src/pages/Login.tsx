import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Email } from "../components/auth/Email";
import { Password } from "../components/auth/Password";
import { Submit } from "../components/auth/Submit";

export const Login: () => JSX.Element = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode:'all'
  });

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="border flex flex-col items-center gap-5 justify-center w-1/5 p-10">
      <h1 className="text-3xl font-roboto font-[550]">Login</h1>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-5 w-full ">
        <Email register={register} error={errors} />
        <Password  register={register} error={errors} />
        <Submit />
      </form>
    </div>
  );
};
